import React from "react";
import './SelectionMode.css'

export default function SelectionMode(){
    return(
        <div className="full">
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
            
            <div className="container-search">
                <input className="search-input p-3" placeholder="Enter Printer ID..." type="text"></input>
                <button className="btn-search">Search</button>
            </div>
            <div className="container-btn">
                <button className="btn btn-light">Campus</button>
                <button className="btn btn-light">Building</button>
                <button className="btn btn-light">Room</button>
                <button className="btn btn-light">Filter</button>
                <button className="btn btn-light btn-select">SELECT</button>
            </div>
            <div>
                <div className="row container-print">
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>   
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>   
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>
                </div>

                <div className="row container-print">
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>   
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>   
                    <div className="printer col-xl-3">
                        <div className="hascheck">
                            <img src="./imgplace.jpg" className="img"/>
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="check"/>
                        </div>
                        <p className="ID">ID: CANON3050_H1</p>
                        <button className="btn btn-light btn-more">MORE</button>
                    </div>
                </div>

            </div>
            <div className="group-btn">
                <button className="btn-goback btn btn-light">
                    Go Back
                </button>
                <button className="btn-enable btn btn-light">
                    ENABLE
                </button>
                <button className="btn-desable btn btn-light">
                    DESABLE
                </button>
                <button className="btn-delete btn btn-light">
                    DELETE
                </button>
                <button className="btn-cancel btn btn-light">
                    CANCEL
                </button>
            </div>
        </div>
    )
}