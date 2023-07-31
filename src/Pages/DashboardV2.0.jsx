import React, { useEffect, useState } from 'react'
import SearchedPlayer from '../Components/SearchedPlayer';
// import ComparedCard from '../Components/Comparedcard';

export default function DashboardV2_0() {

    const[selectInput, setSelectInput]=useState('');
    const[searchInput, setSearchInput]=useState('');
    const[player, setPlayer] = useState([]);

    function handleChange(event){
        setSelectInput(event.target.value)
    }

    function handleInputChange1(event){
        let search1 = event.target.value;
        setSearchInput(search1);
    }

    async function getPlayer (){
        let url = `https://www.balldontlie.io/api/v1/players?search=${searchInput}`;
        let response = await fetch(url);
        let newPlayer = await response.json();
        // console.log(newPlayer);
        // let newPlayerArr = [...player, newPlayer]
        setPlayer(newPlayer);
        // setPlayer()
    }

    function handleClick(event){
        event.preventDefault();
        getPlayer();

    }

  return (
    <div>
        <form action="">
            <select name='compare' onChange={handleChange}>
                <option value="">Compare...</option>
                <option value="teams">Compare Teams</option>
                <option value="players">Compare Player</option>
            </select>
            <div id='card-container'>
                <div className='card'>
                    <input className='card-input' type="text" placeholder={`Search ${selectInput}`} onChange={handleInputChange1} />
                    <button onClick={handleClick}>Select</button>
                    {player.length===0?<h1>no player</h1>:<SearchedPlayer player={player}/>}
                </div>
            </div>
        </form>
    </div>
  )
}
