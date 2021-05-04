import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { useHistory } from "react-router";
import { Link, withRouter } from "react-router-dom";
import Headercomponent from '../../Headercomponent';
class Checkin extends Component {
    refresh = () => {
        // re-renders the component
        this.setState({});
      };
    
    constructor(props) {
        super(props)

        this.state = {
                guests: []
        }
        this.checkout= this.checkout.bind(this);
    }
    

    componentDidMount(){
        EmployeeService.checkin().then((res) => {
            this.setState({ guests: res.data});
        });
    }
   
        //     EmployeeService.deleteEmployee(code)//(res =>{
    //         //this.setState({employees:this.state.employees.filter(staffinfo=>staffinfo.code!= code)});
    //         this.props.history.push('/employee');
    //     }

    checkout(code,check,no){
        this.props.history.push(`/check-out/${code}/${check}/${no}`);
    }

    render() {
        return (
            
        <>
        
    
        
           <div style={{width:'30cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'25px',boxShadow:'2px 5px 30px 2px white',fontFamily:'cursive',color:'b#002147',marginTop:'2cm'}} >
              
               
                 <h2 className="text-center"style={{backgroundColor:'whitesmoke',fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px',borderRadius:'10px'}}className="text-center">Guest List</h2>
                 
                 <div className = "row">
                   </div>
                 <br></br>
                 <div className = "row">
                        <table style={{width:'28cm',marginLeft:'1cm',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>id</th>
                            <th>Room No</th>
                            <th>Guest Name</th>
                            <th>No of adults</th>
                            <th>No of children</th>
                            <th>Checkin date</th>
                            <th>actions</th>
                                </tr>
                            </thead>
                            <tbody style={{fontFamily:'serif'}}>
                                {
                                    this.state.guests.map(
                                        guestinfo => 
                                        <tr key = {guestinfo.id}>
                                        <td>{guestinfo.id}</td>
                                        <td>{guestinfo.roomno}</td>
                                        <td>{guestinfo.guestname}</td>
                                        <td>{guestinfo.children}</td>
                                        <td>{guestinfo.adults}</td>
                                        <td>{guestinfo.checkin}</td>
                                        <td>
                                                 <button style={{color:'white',background:"linear-gradient(#002147, black)",boxShadow:'0 5px 20px 0 gray',fontSize:'20px'}} onClick={ () => this.checkout(guestinfo.id,guestinfo.checkin,guestinfo.roomno)} className="btn btn-info">checkout </button>
                                                
                                             </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
            </>
        )
    }
}

export default withRouter(Checkin)