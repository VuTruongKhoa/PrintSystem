import React from "react";
import './printdoc.css';


export default function PrintDoc(){
    return(
        <div className="cover">
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
            <h1 className="header-name">PRINT DOCUMENT</h1>
            <div className="group-btn">
                <button className="btn btn-outline-light btn-big font">UPLOAD FILE</button>
                <button className="btn btn-outline-light btn-big font">SPECIFY PROPERTIES</button>
                <button className="btn btn-outline-light btn-big font">CHOOSE PRINTER</button>
            </div>
            <button className="btn btn-light btn-print">PRINT</button>
            <button className="btn btn-light btn-goback">GO BACK</button>
        </div>
    )
}