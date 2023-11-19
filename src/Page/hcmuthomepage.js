import React from "react";
import './hcmuthomepage.css';

export default function HcmutHomePage(){
    return(
        <div className="spsohomepage">
            <header>
                <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                    <div className="bg-dark p-4">
                        <h5 className="text-body-emphasis h4">Collapsed content</h5>
                        <span className="text-body-secondary">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <button className="btn btn-light btn-logout">LOGOUT</button>
                    </div>
                </nav>
            </header>
            <div>
                <h2 className="header">HOME</h2>
                <div class="container">
                    <div class="row">
                        <button class="col-xl-3 btn btn-light btn-big m-3 font">
                        PRINT DOCUMENT
                        </button>
                        <button class="col-xl-3 btn btn-light btn-big m-3 font">
                        VIEW PRINTING LOGS
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}