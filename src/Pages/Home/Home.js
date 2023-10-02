
//import Navegation from "../../Components/Navegation/Navegation";
import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
    return(
            <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <h1 className="row justify-content-center">Proyect Rick & Morty</h1>
                        <h2 className=" text-center p-3">Welcome to Rick & Morty Proyect!</h2>
                    <p className=" text-center p-2">This proyect was made for practising React and to made a functional website</p>
                    <p className=" text-center">In this website you can know information of the characters of this animated series.<br/>
                    Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                    <h2 className=" text-center p-3">Lets go!</h2>
                    <div className="d-flex flex-row align-items-center">
                        <Link to="/characters" className="btn botones p-3 me-3">Characters</Link>
                        <Link to="/contact" className="btn botones p-3 me-2">Contact</Link>
                    </div>
            </div>
    )
}