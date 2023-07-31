
export default function SearchedPlayer({ player }) {
    let data = player.data
    console.log(data);
  return (
    <div>
        {data.map((player)=>{return(<h1>{player.first_name}</h1>)})}
    </div>
  )
}
