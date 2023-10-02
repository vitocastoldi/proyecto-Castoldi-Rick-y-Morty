import "./Filters.css"

export default function Filters({valorFiltro, idFiltro, handlerChange}) {
    return(
        
            <div className="form-check form-switch px-5 py-2">
                <input className="form-check-input" type="checkbox" role="switch" id={idFiltro} onChange={handlerChange}/>
                <label className="form-check-label fs-5" htmlFor={idFiltro}>{valorFiltro}</label>
            </div>
        
    )
}