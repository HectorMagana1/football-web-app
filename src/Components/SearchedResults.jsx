export default function SearchedResults({ results,setPlayerId,setInput,setResults}) {

  let data = results.data

  function clickPlayer(event){
    setPlayerId(event.target.id);
    setResults([]);
    setInput('');
  }



  return (
    <div>
      {data.map((player)=>{
        return(
            <div onClick={clickPlayer} key={player.id}>
              <h1 id={player.id}>{player.first_name} {player.last_name}</h1>
            </div>
        )
      })}
    </div>
  )
}
