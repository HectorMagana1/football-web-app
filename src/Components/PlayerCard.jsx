import React, { useEffect, useState } from 'react'

export default function PlayerCard({ id,data,setData }) {


    async function getPlayerInfo(){
        let url = `https://www.balldontlie.io/api/v1/players/${id}`;
        let response = await fetch(url);
        let playerData = await response.json();
        setData(playerData);
    }

    useEffect(()=>{
        getPlayerInfo()
    },[])

return (
    <div>
        <h1>{data.first_name}</h1>
        <h2>{data.last_name}</h2>
        <h2>{data.height_feet}</h2>
        <h2>{data.height_inches}</h2>
        <h3>team</h3>
    </div>
  )
}
