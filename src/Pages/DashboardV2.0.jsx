import React, { useState } from 'react'
import SearchedResults from '../Components/SearchedResults';
import SearchBar from '../Components/SearchBar';
import PlayerCard from '../Components/PlayerCard';

export default function DashboardV2_0() {

    const [results, setResults] = useState([])
    const [input, setInput] = useState('')
    const [playerId, setPlayerId] = useState('')
    const [data,setData] = useState([]);

  return (
    <div>
        <SearchBar setResults={setResults} input={input} setInput={setInput} />
        {results.data && results.data.length>0 && <SearchedResults setPlayerId={setPlayerId} results={results} setResults={setResults} setInput={setInput} />}
        {playerId && <PlayerCard id={playerId} data={data} setData={setData} />}
    </div>
  )
}
