import { useState, useEffect, Fragment} from "react";
import Card from "../../Components/Card/Card";
import Navegation from "../../Components/Navegation/Navegation";

export default function Characters(){
    let [itemMenu]=useState("Characters");
    let [personajes,setPersonajes]=useState([]);

    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un error: "+ err));

        return dato
    }

   
    useEffect(()=>{
            let guardarPersonajes=async()=>{
            let info=await traerPersonajes();
            //console.log (info.results)
            let listaPersonajes=info.results;

            setPersonajes(listaPersonajes)
            
        }
        
            guardarPersonajes()
    },[])
    
    
    return(
        <Fragment>
            <Navegation itemMenu={itemMenu}/>
            <section>
                <h2>Filters</h2>
                <p>Aca irian los filtros...</p>
            </section>
           
            <section>
                {personajes.map((personaje)=>{
                    return <Card key={personaje.id} data={personaje}/>
                })}
                    
            </section>
        </Fragment>
    )
}