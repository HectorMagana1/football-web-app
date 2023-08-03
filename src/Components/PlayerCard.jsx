import { useEffect, useState } from 'react'

export default function PlayerCard({ season,id }) {

    const [player,setPlayer] = useState(null);
    const [playerData,setPlayerData] = useState(null);

    async function getPlayerInfo(){
        let url = `https://www.balldontlie.io/api/v1/season_averages?season=${season}&player_ids[]=${id}`
        const response = await fetch(url)
        const playerData = await response.json()
        // console.log(playerData)
        setPlayer(playerData)
    }

    async function getPlayerData(){
        let url1 = `https://www.balldontlie.io/api/v1/players/${id}`
        const response1 = await fetch(url1)
        const playerData1 = await response1.json()
        setPlayerData(playerData1)
    }

    useEffect(()=>{
        getPlayerInfo()
        getPlayerData()
    },[])

return (
    <div>
        {player && playerData && 
            <div id='player-card'>
                <h1>{playerData.first_name} {playerData.last_name}</h1>
                <h2>stat averages for {season}-{Number(season)+1}</h2>
                <div>
                    <h1>Games Played:</h1>
                    <h1>{player.data[0].games_played}</h1>
                </div>
                <div>
                    <h1>Points:</h1>
                    <h1>{player.data[0].pts}</h1>
                </div>
                <div>
                    <h1>Assists:</h1>
                    <h1>{player.data[0].ast}</h1>
                </div>
                <div>
                    <h1>Steals:</h1>
                    <h1>{player.data[0].stl}</h1>
                </div>
                <div>
                    <h1>Blocks:</h1>
                    <h1>{player.data[0].blk}</h1>
                </div>
                <div>
                    <h1>Rebounds:</h1>
                    <h1>{player.data[0].reb}</h1>
                </div>
            </div>}
    </div>

    // <div>
    //     <h1>{player.data[0].pts}</h1>
    // </div>
  )
}
