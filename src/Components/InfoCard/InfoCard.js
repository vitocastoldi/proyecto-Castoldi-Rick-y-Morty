import "./InfoCard.css"

export default function InfoCard({status,especie,origen,genero,setShow}){
    return(
        <div className=" d-flex p-5 flex-column align-items-center more-info-section">
            <button className="btn btn-active d-flex align-self-end m-2 btn-x-md" onClick={()=>setShow(false)}><i className="bi bi-x-lg d-flex align-self-end m-2"></i></button>
            <ul className="list-group">
                <li className="list-group-item p-3 d-flex flex-column ">
                    <h4>Character Status: </h4><p className="fw-bold">{status}</p></li>
                <li className="list-group-item p-3 d-flex flex-column ">
                    <h4>Species: </h4><p className="fw-bold">{especie}</p></li>
                <li className="list-group-item p-3 d-flex flex-column ">
                    <h4>Origin: </h4><p className="fw-bold">{origen}</p></li>
                <li className="list-group-item p-3 d-flex flex-column ">
                    <h4>Gender: </h4><p className="fw-bold">{genero}</p></li>
            </ul>
        </div>
    )
}