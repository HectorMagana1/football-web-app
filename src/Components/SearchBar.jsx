export default function SearchBar({ season,setResults,setInput,input,playerId }) {


    async function searchPlayer(event){
        setInput(event.target.value)
        let url = `https://www.balldontlie.io/api/v1/players?search=${input}`
        const response = await fetch(url);
        const searchedResult = await response.json();
        setResults(searchedResult);
    }

    // async function handleClick(){
    //   let url = `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${playerId}`
    //   const response = await fetch(url)
    //   const result = await response.json()
    //   console.log(result)
    // }

  return (
    <div>
      <input type="text" placeholder='Search player' value={input} onChange={searchPlayer}/>
      {/* <button onClick={handleClick}>data</button> */}
    </div>
  )
}
