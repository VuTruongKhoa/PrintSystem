import React from "react";
import './addnewprinter.css';

export default function AddNewPrinter(){
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
            <h1 className="header-name">ADD NEW PRINTER</h1>
            <div className="container-input">
                <div className="input-group mb-3 group-long">
                    <span className="input-group-text printid
                    ">Printer ID</span>
                    <input type="text" className="form-control printid" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Brand</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Printer model</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Campus</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Building</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Room</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-long">
                    <span className="input-group-text ">Discription</span>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
            </div>
            <button className="btn btn-light btn-save">ADD</button>
            <button className="btn btn-light btn-goback">GO BACK</button>
        </div>
    )
}