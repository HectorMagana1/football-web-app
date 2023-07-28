import React, { useState } from 'react'
import { data } from '../data'
import ComparedCard from '../Components/Comparedcard';

export default function DashboardV2_0() {

    const[selectInput, setSelectInput]=useState('');
    const[searchInput, setSearchInput]=useState({});

    function handleChange(event){
        setSelectInput(event.target.value)
    }

    function handleInputChange1(event){
        setSearchInput(event.target.value);
    }

    function handleInputChange2(event){
        setSearchInput(event.target.value);
    }


    let player = null;

  return (
    <div>
        <form action="">
            <select name='compare' onChange={handleChange}>
                <option value="">Compare...</option>
                <option value="team">Compare Teams</option>
                <option value="players">Compare Teams</option>
            </select>
            <div id='card-container'>
                <div className='card'>
                    <input className='card-input' type="text" placeholder={`Search ${selectInput}`} onChange={handleInputChange1} />
                    <button onClick={null}>Select</button>
                    {!player?<h1>search</h1>:<ComparedCard />}
                </div>
                <div className='card'>
                    <input className='card-input' type="text" placeholder={`Search ${selectInput}`} onChange={handleInputChange2} />
                    <button onClick={null}>Select</button>
                    {!player?<h1>search</h1>:<ComparedCard />}
                </div>
            </div>

        </form>
     

        <ComparedCard value={selectInput} compare={data} />
        <ComparedCard value={selectInput} compare={data} />
    </div>
  )
}
