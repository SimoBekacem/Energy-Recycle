import React from "react";
import "./First.css";
import logo from "../assets/logo.png"
import vector from "../assets/Vector.svg"
import logo2 from "../assets/CardImage1.png"
import electrician from "../assets/electrician.png"

const First =() =>{
return(
    <div className="body">
        <div class="overlay"></div>
        <div className="menu">
            <img src={logo} className="logo"></img>
            <button >Why Us ?</button>
            <button >Sign Up</button>
            <button >Log In</button>
        </div>
        <div className="paragraph">
            <p>Make the
                difference 
                and live the challenge</p>
            <img src={vector}></img>
        </div>
        <div className="card">
            <div className="part1">
                <img src={logo2}></img>
                <p>Share your<br/> <b>Energy</b> and<br/> gain <b>money</b></p>
                <button>Start</button>
            </div>
            <div className="part2">
                <img src={electrician}></img>
            </div>
        </div>
        <div className="menu2">
            <img src={logo} className="logo"></img>
            <button >Why Us ?</button>
            <button >Sign Up</button>
            <button >Log In</button>
        </div>
    </div>

)

}

export default First;