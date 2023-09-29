export default function InfoCard({status,especie,origen,genero,setShow}){
    return(
        <div>
            <button onClick={()=>setShow(false)}>X</button>
            <ul className="list-group">
                <li className="list-group-item">
                    <h4>Character Status: </h4><p>{status}</p></li>
                <li className="list-group-item">
                    <h4>Species: </h4><p>{especie}</p></li>
                <li className="list-group-item">
                    <h4>Origin: </h4><p>{origen}</p></li>
                <li className="list-group-item">
                    <h4>Gender: </h4><p>{genero}</p></li>
            </ul>
        </div>
    )
}