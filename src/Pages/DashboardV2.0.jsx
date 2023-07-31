import React, { useState } from 'react'
import SearchedResults from '../Components/SearchedResults';
import SearchBar from '../Components/SearchBar';
// import ComparedCard from '../Components/Comparedcard';

export default function DashboardV2_0() {

    const [results, setResults] = useState([])

  return (
    <div>
        <SearchBar setResults={setResults} />
        {/* {results.data.length > 0 ? <SearchedResults results={results} /> : <h1>search</h1>} */}
        {results.data && results.data.length>0 && <SearchedResults results={results} />}
    </div>
  )
}
