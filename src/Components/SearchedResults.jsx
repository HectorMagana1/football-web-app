export default function SearchedResults({ results }) {
  // console.log(results);
  let data = results.data
  // console.log(data);
  return (
    <div>
      {data.map((player)=>{
        return(
          <div key={player.id}>
            <h1>{player.first_name} {player.last_name}</h1>
          </div>
        )
      })}
    </div>
  )
}
