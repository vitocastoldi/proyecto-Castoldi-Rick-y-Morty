import "./Navegation.css"
import { Link } from "react-router-dom"


function Navegation({itemMenu}) {
    return(
        <header className="header bg-blue">
            <nav className="navbar navbar-expand-lg w-100 bg-blue">
                <div className="container-fluid justify-content-between align-items-center">
                    <h1 className=" navbar-brand cursor-p"><Link to="/" className="text-decoration-none">Rick & Morty</Link></h1>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-list"></i></button>
                    <div className="collapse navbar-collapse justify-content-end">
                        <ul className=" navbar-nav nav-pills p-4">
                            <li className="nav-item m-2"><Link to="/characters" className={itemMenu==="Characters"? "nav-link btn-active p-2":"nav-link btn p-2"}>Characters</Link></li>
                            <li className="nav-item m-2"><Link to="/contact" className={itemMenu==="Characters"? "nav-link btn p-2":"nav-link btn-active p-2"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navegation