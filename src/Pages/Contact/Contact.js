import Navegation from "../../Components/Navegation/Navegation"
import { Fragment } from 'react';

import "./Contact.css"

export default function Contact(){
    return(
        <Fragment>
            
                <Navegation itemMenu={"Contact"}/>
            
            
            <main className="container-fluid">
                <div className=" main-contact-div d-flex flex-column justify-content-center align-items-center m-auto mt-5 w-75 h-75 ">
                    <h2 className="row colorAzul py-5">Contact</h2>
                    <h3 className="row colorAzul subtitle">Leave us your information so we can contact you</h3>
                    <form className="row colorAzul g-3 p-4" action="" method="post">
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control p-2" id="name" name="name" required/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control p-2" id="email" name="email" required/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-control p-4" required>

                            </textarea>
                        </div>
                        <div className="col-12">
                            <input type="submit" className="btn botones colorBoton" value="Send"/>
                        </div>
                    </form>
                </div>
            </main>

        </Fragment>
    )
}