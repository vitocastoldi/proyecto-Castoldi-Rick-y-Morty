import { useState, useEffect, Fragment} from "react";
import "./Characters.css"

import Card from "../../Components/Card/Card";
import Navegation from "../../Components/Navegation/Navegation";
import Filters from "../../Components/Filters/Filters";

export default function Characters(){
    let [itemMenu]=useState("Characters");
    let [listaCompleta,setListaCompleta]=useState([]);
    let [personajes,setPersonajes]=useState([]);
    let [filtros]=useState([
        {nombre:"Alive",
        filtro:"Character Alive"
    },{
        nombre:"Dead",
        filtro:"Character Dead"
    },{
        nombre:"Female",
        filtro:"Female"
    },{
        nombre:"Male",
        filtro:"Male"
    },{
        nombre:"unknown",
        filtro:"Origin Unknow"
    }]);
    let [filtrosAplicados,setFiltrosAplicados]=useState([])

    let traerPersonajes=async()=>{
        let dato= await fetch("https://rickandmortyapi.com/api/character")
        .then(resp=>resp.json())
        .catch(err=>console.log("Hubo un error: "+ err));

        return dato
    }

    let filtrar=(filtroNombre)=>{
        let resultado;
        if(filtroNombre === "Alive" || filtroNombre === "Dead"){
             resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
            }

            if(filtroNombre === "Female" || filtroNombre === "Male"){
                 resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                }
            
            if(filtroNombre === "unknown"){
                 resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                }
            setPersonajes(resultado)

    }

    let aplicarFiltros=(event)=>{
        let nombreCheckbox=event.target.id;
        
        if(event.target.checked === true){
            console.log("Aplicar filtro")
            setFiltrosAplicados([...filtrosAplicados,nombreCheckbox])
            
            
        }else{
            console.log("Sacar filtro")
            
            let filtrosRestantes=filtrosAplicados.filter((el)=>el !== nombreCheckbox)
            setFiltrosAplicados(filtrosRestantes)
            
            setPersonajes(listaCompleta)
        }
        console.log(filtrosAplicados)
    }
   
    useEffect(()=>{
            let guardarPersonajes=async()=>{
            let info=await traerPersonajes();
            
            let listaPersonajes=info.results;

            setPersonajes(listaPersonajes)
            setListaCompleta(listaPersonajes)
            
        }
        
            guardarPersonajes()
    },[])

    useEffect( ()=>{
        filtrosAplicados.forEach((filtroNombre)=>{
            let resultado;
            if(filtroNombre === "Alive" || filtroNombre === "Dead"){
                 resultado=personajes.filter((personaje)=> personaje.status === filtroNombre)
                }
    
                if(filtroNombre === "Female" || filtroNombre === "Male"){
                     resultado=personajes.filter((personaje)=> personaje.gender === filtroNombre)
                    }
                
                if(filtroNombre === "unknown"){
                     resultado=personajes.filter((personaje)=> personaje.origin.name === filtroNombre)
                    }
                setPersonajes(resultado)
    
        })
    },[filtrosAplicados])
    
    
    return(
        <Fragment>
            
                <Navegation itemMenu={itemMenu}/>
            
            
            <main className="container-fluid">
                <section className="row section-filters py-5">
                    <div className="filters-area d-flex  m-2 align-items-center">
                        <h2>Filters</h2>
                        <a className="btn btn-filters" data-bs-toggle="collapse" href="#collapseFilters" role="button" aria-expanded="false" aria-controls="collapseFilters"><i className="bi bi-list-ul"></i></a>
                    </div>
                    <form className="collapse filters justify-content-between flex-wrap" id="collapseFilters">
                        {filtros.map((item)=>{ return <Filters key={item.nombre} valorFiltro={item.filtro} idFiltro={item.nombre} handlerChange={aplicarFiltros}/>})}
                    </form>
                </section>
            
                <section className="row cards-section justify-content-center">
                    <div className="row justify-content-center">
                        {personajes.length>0?
                        personajes.map((personaje)=>{
                        return <Card key={personaje.id} data={personaje}/>
                        }):
                        <div className="alert d-flex gap-2 w-100" role="alert">
                            <i className="bi bi-exclamation-triangle-fill"></i>
                            <p className="d-flex align-items-center">Sorry! There are no characters width all those properties</p>
                        </div>
                        }
                    </div>   
                </section>
                
            </main>
        </Fragment>
    )
}