import React, { useEffect, useState } from 'react'

export default function SearchBar({ setResults,setInput,input }) {

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
