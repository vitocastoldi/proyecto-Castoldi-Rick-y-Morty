import "./Navegation.css"

function Navegation({itemMenu}) {
    return(
        <nav className="container-fluid bg-primary">
            <div className="row">
                <h1 className="col-4">Rick & Morty</h1>
                <ul className="col-8 d-flex gap-5">
                    <li><a>{itemMenu}</a></li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navegation