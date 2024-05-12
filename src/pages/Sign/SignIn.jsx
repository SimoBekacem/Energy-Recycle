import React, { useState } from 'react';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';



export default function SignIn() {
    // State variables to store form data
    const [formData, setFormData] = useState({
        usernameOrEmail: '',
        password: ''
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any action you want with the form data, like sending it to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            usernameOrEmail: '',
            password: ''
        });
    };

    return (
        <div className="Body">
            <div className='overlay'></div>
                <img src={logo}></img>
                
            <form onSubmit={handleSubmit} className='Form'>
                <label htmlFor="usernameOrEmail">Username or Email:</label>
                <input 
                    type="text" 
                    id="usernameOrEmail" 
                    name="usernameOrEmail" 
                    value={formData.usernameOrEmail} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <button type="submit">Sign In</button>
            </form>
            <br></br>
            <Link to="/Register">Create an Account</Link><br></br>
            <Link to="/Register">Password Forgotten?</Link>
        </div>
    );
}


