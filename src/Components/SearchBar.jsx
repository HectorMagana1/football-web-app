import React, { useEffect, useState } from 'react'

export default function SearchBar({ setResults }) {

    const [input, setInput] = useState('');

    // function handleChange(event){
    //     setInput(event.target.value);
    // }

    async function searchPlayer(event){
        setInput(event.target.value)
        let url = `https://www.balldontlie.io/api/v1/players?search=${input}`
        const response = await fetch(url);
        const searchedResult = await response.json();
        setResults(searchedResult);
    }

  return (
    <div>
        <input type="text" placeholder='Search player' value={input} onChange={searchPlayer}/>
    </div>
  )
}
