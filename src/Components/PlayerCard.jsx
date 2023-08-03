import React, { useEffect, useState } from 'react'

export default function PlayerCard({ id,season }) {

    const [player,setPlayer] = useState([]);
    console.log(id);
    console.log(season);

    async function getPlayerInfo(){
        let url = `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${id}`
        const response = await fetch(url)
        const result = await response.json()
        setPlayer(result)
    }

    useEffect(()=>{
        getPlayerInfo()
    },[])

    console.log(player.data[0]);

return (
    <div>
        <h1>{player.data[0].pts}</h1>
    </div>
  )
}
