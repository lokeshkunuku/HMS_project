import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router";
import Headercomponent from '../../Headercomponent';
class Rooms extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
                rooms: []
        }
        this.addRoom = this.addRoom.bind(this);
       this.deleteRoom=this.deleteRoom.bind(this);
    }
    

    componentDidMount(){
        EmployeeService.getrooms().then((res) => {
            this.setState({ rooms: res.data});
        });
    }
    deleteRoom(roomno){   
        EmployeeService.deleteRoom(roomno).then(res => {
            this.setState({rooms: this.state.rooms.filter(room=> room.roomno !==roomno)});
            alert("Delete Room NO:"+roomno);    
    });
    }
    //     EmployeeService.deleteEmployee(code)//(res =>{
    //         //this.setState({employees:this.state.employees.filter(staffinfo=>staffinfo.code!= code)});
    //         this.props.history.push('/employee');
    //     }

    // }
    addRoom(){
        this.props.history.push('/add-room');
    }
    render() {
        return (
            
        
    
           <div style={{backgroundColor:"whitesmoke",borderRadius:'10px',boxShadow:'0 5px 30px 0 whitesmoke',fontFamily:'cursive',fontSize:'25px'}} >
              
               
                 <h2 style={{fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px'}}className="text-center">L/Hotels Rooms List</h2>
                 <div className = "row">
                    <button  style={{marginLeft:'2cm',marginTop:'1cm',color:'white',background:"linear-gradient(#002147, black)",boxShadow:'0 5px 20px 0 gray',fontSize:'20px'}} className="btn btn-primary" onClick={this.addRoom.bind(this)}> Add Room</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table style={{width:'25cm',marginLeft:'2cm',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped ">

                            <thead>
                                <tr>
                        
                            <th>Room NO</th>
                            <th>Type</th>
                            <th>Availability</th>
                            
                            <th>Price</th>
                            
                            <th style={{color:'red'}}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key = {room.id}>
                                        <td>{room.roomno}</td>
                                        <td>{room.type}</td>
                                        <td>{room.availability==false && "Booked"||room.availability==true && "NotBooked"}</td>
                                        <td>{room.price}</td>
                                        <td>
                                                   <button style={{marginLeft:"10px",color:'white',background:"linear-gradient(#ff6161, black)",boxShadow:'0 5px 20px 0 gray'}} onClick={ () => this.deleteRoom(room.roomno)} className="btn btn-info">deleteRoom </button>
                                               
                                             </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
} 

export default withRouter(Rooms)