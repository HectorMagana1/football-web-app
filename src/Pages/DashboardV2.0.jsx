import React, { useState } from 'react'
import SearchedResults from '../Components/SearchedResults';
import SearchBar from '../Components/SearchBar';
import PlayerCard from '../Components/PlayerCard';
import Select from '../Components/Select';

export default function DashboardV2_0() {

    const [results, setResults] = useState('');
    const [results2, setResults2] = useState([]);

    const [input, setInput] = useState('');
    const [input2,setInput2] = useState('');

    const [playerId, setPlayerId] = useState('');
    const [playerId2, setPlayerId2] = useState('');

    const [season,setSeason] = useState('');
    const [season2,setSeason2] = useState('');

  return (
    <div id='main-container'>
        <div id='player-card-container'>
            <div id='player1-card-container'>
                <Select setSeason={setSeason} />
                <SearchBar setPlayerId={setPlayerId} setResults={setResults} input={input} setInput={setInput} />
                {results.data && results.data.length>0 && <SearchedResults setPlayerId={setPlayerId} results={results} setResults={setResults} setInput={setInput} />}
                {playerId && <PlayerCard season={season} id={playerId} />}
            </div>
            <div id='player1-card-container'>
                <Select setSeason={setSeason2} />
                <SearchBar setPlayerId={setPlayerId2} setResults={setResults2} input={input2} setInput={setInput2} />
                {results2.data && results2.data.length>0 && <SearchedResults setPlayerId={setPlayerId2} results={results2} setResults={setResults2} setInput={setInput2} />}
                {playerId2 && <PlayerCard id={playerId2} season={season2} />}
            </div>
        </div>
    </div>
  )
}
