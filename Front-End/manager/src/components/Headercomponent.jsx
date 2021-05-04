import React from "react";
import { Link, withRouter } from "react-router-dom";

function Headercomponent() {

  const logout = () => {
    localStorage.removeItem("role");
  };


  return (
    <div>
      <header>
        <nav style={{background:"linear-gradient(#002147, black)",borderRadius:'3px 3px 100px 100px',boxShadow:" 0 5px 30px 0 #d3d3d3"}}className="navbar navbar-expand-lg ">
        <div class="container-fluid">
        <a class="navbar-brand" href="/login">
          <h1 style={{fontFamily:'cursive',color:'#f0cc00' }}>L/Hotels </h1>
        </a>
            <div style={{fontFamily:'cursive',color:'#f0cc00' }} className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {localStorage.getItem("role") === "recep" ? (
                
                <ul className="navbar-nav ml-auto">  
                <h1 style={{marginRight:'12cm',marginTop:'20px',fontSize:'20px'}}>(Receptionist Board)</h1>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/recephp"}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/avail-room"}>
                      Avail room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/Guest"}>
                      Guest
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/check-in"}>
                      check-in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/check-out"}>
                      check-out
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}onClick={logout} className="nav-link" to={"/login"}>
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : null}
              {
              localStorage.getItem("role") === "admin" ? (
                <ul className="navbar-nav ml-auto">
                  <h1 style={{marginRight:'12cm',marginTop:'20px',fontSize:'20px'}}>(Owner Board)</h1>
                  <li className="nav-item">
                    <Link  style={{color:'#f0cc00',fontSize:'20px' }}className="nav-link" to={"/Ownerhp"}>
                      ~Dash~ 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }}className="nav-link" to={"/avail-room"}>
                      Avail room
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }}className="nav-link" to={"/Guest"}>
                      Guest
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }}className="nav-link" to={"/check-in"}>
                      check-in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }} className="nav-link" to={"/employee"}>
                      Manage employee
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }} className="nav-link" to={"/add-user"}>
                      Add user
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'20px' }} onClick={logout} className="nav-link" to={"/login"}>
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : null}
               {localStorage.getItem("role") === "mod" ? (
                <ul className="navbar-nav ml-auto">
                  <h1 style={{marginRight:'11cm',marginTop:'20px',fontSize:'20px'}}>(Manager Board)</h1>
                  
                  <li className="nav-item">
                    <Link  style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/Managerhp"}>
                      ~Dash~ 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/employee"}>
                      ~Employee~ 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/room"}>
                      ~RoomList~
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link  style={{color:'#f0cc00',fontSize:'25px' }}className="nav-link" to={"/add-room"}>
                      ~Addrooms~
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link style={{color:'#f0cc00',fontSize:'25px' }}onClick={logout} className="nav-link" to={"/login"}>
                      *Logout*
                    </Link>
                  </li>
                </ul>
              ) : null}
              {localStorage.getItem("role") === null ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link style={{fontFamily:'cursive',color:'#f0cc00',marginRight:'2cm',fontSize:'25px'}}className="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  
                </ul>
              ) : null}
              
              
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default withRouter(Headercomponent);