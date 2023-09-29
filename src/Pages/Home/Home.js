
import Navegation from "../../Components/Navegation/Navegation";
import "./Home.css";

export default function Home() {
    return(
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
                 <h2 className="fw-semibold text-center p-3">Welcome to Rick & Morty Proyect!</h2>
                    <p className="fw-semibold text-center p-2">This proyect was made for practising React and to made a functional website</p>
                    <p className="fw-semibold text-center p-2">In this website you can know information of the characters of this animated series.<br/>
                    Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                    <h2 className="fw-semibold text-center p-3">Lets go!</h2>
                    <button className="btn btn-primary p-2 me-2">Characters</button>
                    <button className="btn btn-primary p-2 me-2">Contact</button>
                    
            </div>
    )
}