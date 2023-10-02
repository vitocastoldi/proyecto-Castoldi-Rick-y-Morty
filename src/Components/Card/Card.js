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
        <div className="card m-2 p-2 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center"> 
                <img src={data.image} alt="imagen-personaje"/>
                <h2 className="size-name text-center name-card">{data.name}</h2>
                <button className={show?"d-none":"d-block btn btn-active align-self-end more"} onClick={mostrarLista}>Know more..</button>
            </div>
                {show === true? <InfoCard status={data.status} genero={data.gender} especie={data.species} origen={data.origin.name} setShow={setShow}/>: ''}
        </div>
    )
}