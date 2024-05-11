import React from "react";
import "./First.css";
import logo from "../assets/logo.png"
import vector from "../assets/Vector.svg"

const First =() =>{
return(
    <div className="body">
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
            <img src={vector}></img>
        </div>
    </div>

)

}

export default First;