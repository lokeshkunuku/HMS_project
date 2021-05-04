
import React, { useState,useEffect } from 'react';
import Axios from 'axios';

import { useHistory } from "react-router";
export default function AddUsers() {
    const history = useHistory();
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [roleReg, setroleReg] = useState("");

    
    Axios.defaults.withCredentials = true;
    const register = () => {
        Axios.post("http://localhost:3001/register", {
          username: usernameReg,
          password: passwordReg,
          role : roleReg,

        }).then((response) => {
          console.log(response);
        });
       
      };
    
    
      return (
          
        <div style={{width:'30cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'25px',boxShadow:'2px 5px 30px 2px white',fontFamily:'cursive',color:'b#002147',marginTop:'2cm'}}  className="container">

        <div style={{margin:'20px'}}className = "card-body">
          <h1>Registration</h1><br></br>
          <label>Username: </label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          /><br></br>
          <label>Password: </label>
          <input
            type="text"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          /><br></br>
           <label>Role: </label>
          <input
            type="text"
            onChange={(e) => {
              setroleReg(e.target.value);
            }}
          /><br></br>
       
          <button onClick={register}> Register </button>
        </div>
        </div>
  
       

     
    
    
          
      );
    }