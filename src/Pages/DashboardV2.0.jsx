import React, { useState } from 'react'
import SearchedResults from '../Components/SearchedResults';
import SearchBar from '../Components/SearchBar';
import PlayerCard from '../Components/PlayerCard';

export default function DashboardV2_0() {

    const [results, setResults] = useState([]);
    const [results2, setResults2] = useState([]);
    const [input, setInput] = useState('');
    const [playerId, setPlayerId] = useState('');
    const [data,setData] = useState([]);
    const [season,setSeason] = useState('');
    const [input2,setInput2] = useState('');
    const [playerId2, setPlayerId2] = useState('');
    const [data2,setData2] = useState([]);


    function handleChange(event){
        setSeason(event.target.value);
      }

  return (
    <div>
        <label htmlFor="select">Select Season</label>
        <select onChange={handleChange}>
            <option value=''>Select season...</option>
            <option value='2022'>2022-2023</option>
            <option value='2021'>2021-2022</option>
            <option value='2020'>2020-2021</option>
            <option value='2019'>2019-2020</option>
            <option value='2018'>2018-2019</option>
        </select>
        <div>
            <SearchBar season={season} playerId={playerId} setResults={setResults} input={input} setInput={setInput} />
            {results.data && results.data.length>0 && <SearchedResults setPlayerId={setPlayerId} results={results} setResults={setResults} setInput={setInput} />}
            {playerId && <PlayerCard id={playerId} season={season} />}
        </div>
        <div>
            <SearchBar season={season} playerId={playerId2} setResults={setResults2} input={input2} setInput={setInput2} />
            {results2.data && results2.data.length>0 && <SearchedResults setPlayerId={setPlayerId2} results={results2} setResults={setResults2} setInput={setInput2} />}
            {playerId2 && <PlayerCard id={playerId2} season={season} />}
        </div>
    </div>
  )
}
