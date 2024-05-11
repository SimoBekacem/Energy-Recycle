import React from "react";
import "./First.css";
import logo from "../assets/logo.png"

const First =() =>{
return(
    <div>
        <div className="menu">
            <img src={logo}></img>
            <button >Why Us ?</button>
            <button >Sign Up</button>
            <button >Log In</button>
        </div>
        <div className="paragraph">
            <p>Make the
                difference and 
                live the challenge</p>
            <img src=""></img>
        </div>
    </div>

)

}

export default First;