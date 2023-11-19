import React from "react";
import './upload.css';

export default function Upload(){
    return(
        <div className="container">
            <button className="btn btn-light btn-choosefile">
                CHOOSE FILE
            </button>
            <button className="btn btn-light btn-upload">
                UPLOAD
            </button>
        </div>
    )
}