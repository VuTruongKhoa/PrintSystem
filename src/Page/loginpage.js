import React from "react";
import './loginpage.css';
import {Link} from 'react-router-dom'


export default function LoginPage(){
    return(
        <div className="loginpage">
            <Link to = "/SpsoHome">
                <button className="btn btn-outline-primary btn-spso">
                    <a>SPSO LOGIN</a>
                </button>
            </Link>
            
            <button className="btn btn-outline-primary btn-hcmut">
                <a>HCMUT-STUDENT LOGIN</a>
            </button>
        </div>
    )
}