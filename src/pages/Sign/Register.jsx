import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"
import './Sign.css';


export default function Register() {
    // State variables to store form data and validation
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    });
    const [passwordError, setPasswordError] = useState('');

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        // Here you can perform any action you want with the form data, like sending it to a server
        console.log(formData);
        // Reset the form after submission
        setFormData({
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        });
        setPasswordError('');
    };

    return (
        <div className="core">
            
            <div className='overlay'></div>
            
            <img src={logo}></img>
                

            <form onSubmit={handleSubmit} className='Formul'>
                <label htmlFor="username">Username:</label>
                <input className='Input'
                    type="text" 
                    id="username" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />

                <label htmlFor="email">Email:</label>
                <input className='Input'
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <label htmlFor="password">Password:</label>
                <input className='Input'
                    type="password" 
                    id="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    required 
                /><br /><br />
                
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input className='Input'
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    value={formData.confirmPassword} 
                    onChange={handleInputChange} 
                    required 
                />
                {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}<br /><br />
            </form>
            <button type="submit" className='Sign'>Register</button>
            <Link to="/SignIn">Already have an account?</Link><br></br>
        </div>
    );
}


