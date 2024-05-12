import React from "react";
import './Settings.css';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.svg'

const Settings=() =>{
    return(
        <div className="Settings">
            <img src={logo}></img>

            <label className="top">Settings</label>
            <div className="cardS">
                <div className="part1">
                    <label>Edit User Name</label>
                    <input className="input"></input>

                    <label>Edit Email</label>
                    <input className="input"></input>

                    <label>Adress</label>
                    <input className="input"></input>

                    <label id="permission">Permissons</label>
                </div>
                
                <div className="part2">
                        <img src={profile}></img>
                        <div>
                        <label className="id" >id</label>
                        <label className="#" >#</label>
                        <label>1255694987</label>
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Settings;