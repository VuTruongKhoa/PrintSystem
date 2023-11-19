import React from "react";
import './manageprinter.css';

export default function ManagePrinter(){
    return(
        <div className="manageprinter">
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
            <div className="container">
                <h2 className="header">MANAGE PRINTERS</h2>
                <div>
                    <button className="btn btn-outline-light btn-big font btn-manage">
                        MANAGE CURRENT PRINTER
                    </button>
                    <button className="btn btn-outline-light btn-big font btn-add-new">
                        ADD NEW PRINTER
                    </button>
                </div>
                <button className="btn-goback">
                    Go Back
                </button>
            </div>
        </div>
    )
}