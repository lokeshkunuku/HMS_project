
import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import './LP.css';
import {Link} from "react-router-dom";
import App from '../App';
import Headercomponent from '../components/Headercomponent';
import Staff from "../components/managerComponents/StaffCRUD/Staff";
import CreateEmployeeComponent from "../components/managerComponents/StaffCRUD/CreateEmployeeComponent";
import Updatestaff from "../components/managerComponents/StaffCRUD/Updatestaff";

import { useHistory } from "react-router";
export default function Loginpage(props) {
    const history = useHistory();
    
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");
    const [role, setRole] = useState("");

    Axios.defaults.withCredentials = true;
    const register = () => {
        Axios.post("http://localhost:3001/register", {
          username: usernameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
      };
    
    const login = () => {
        Axios.post("http://localhost:3001/login", {
          username: username,
          password: password,
        }).then((response) => {
          if (response.data.message) {
            setLoginStatus(response.data.message);
          } else {
            setLoginStatus(response.data[0].username);
            setRole(response.data[0].role);
            localStorage.setItem("role", response.data[0].role);
            {localStorage.getItem("role") == "recep" && history.push("/RecepHp")||
            localStorage.getItem("role") == "admin" && history.push("/OwnerHp")||
            localStorage.getItem("role") == "mod" && history.push("/ManagerHp")}
          }       
        });
        
      };
    
      useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
            setRole(response.data.user[0].role);
          }
        });
      }, []);


      return (
        <div>
          
  
  <div style={{opacity:"100%",float:'left',marginTop:'100px',marginLeft:'300px',width:'500px'}}class="main" >
    
    <p class="sign" align="center">Log In</p>
    <form class="form1"style={{alignContent:'center'}}>
      <input class="un " type="text" align="center" placeholder="Username" style={{color:'black'}} onChange={(e) => {
              setUsername(e.target.value);
            }}/>
      <input class="pass" type="password" align="center" placeholder="Password"  onChange={(e) => {
              setPassword(e.target.value);
            }}/>
      <a class="submit" align="center" style={{color:'black',fontSize:'15px'}}onClick={login}>Sign in</a>   
      </form> 
      
      </div>         
  
   
      </div>
      );
    }