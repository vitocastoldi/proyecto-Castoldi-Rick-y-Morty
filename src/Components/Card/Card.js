import "./Card.css"

import "../InfoCard/InfoCard"
import InfoCard from "../InfoCard/InfoCard"
import { useState } from "react"
export default function Card({data}) { 
    const [show,setShow]= useState(false)

    const mostrarLista=()=>{
        setShow(true);

    }
    return(
        <div className="card w-25 bg-primary mb-3 p-2"> 
            <img src={data.image} alt="imagen-personaje"/>
            <h3>{data.name}</h3>
            <button className={show?"d-none":"d-block"} onClick={mostrarLista}>Know more..</button>
            {show === true? <InfoCard status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>: ''}
        </div>
    )
}