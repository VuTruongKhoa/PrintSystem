import React from "react";
import './specify.css';

export default function Specify(){
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
            <h1 className="header-name">VIEW AND EDIT</h1>
            <div className="container-input">
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Double/One-sided</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Double</option>
                        <option value="2">One-sided</option>
                    </select>
                </div>
                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Paper-size</label>                    
                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">A1</option>
                        <option value="2">A2</option>
                        <option value="3">A3</option>
                        <option value="3">A4</option>
                        <option value="3">A5</option>

                    </select>
                </div>

                <div className="input-group mb-3 group-long">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Paper-size</label> 

                    <div className="print-range">                     
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" for="flexRadioDefault1">
                                All pages
                            </label>
                        </div>
                        <div className="form-check">
                            <div className="page">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Pages
                                </label>
                            </div>
                            <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        </div>
                    </div>                   
                </div>


                <div className="input-group mb-3 group-short">
                    <label className="input-group-text same-input" for="inputGroupSelect01">Number of coppy</label>                    <select className="form-select same-input" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <button className="btn btn-light btn-save">SAVE</button>
            <button className="btn btn-light btn-goback">GO BACK</button>
        </div>
    )
}