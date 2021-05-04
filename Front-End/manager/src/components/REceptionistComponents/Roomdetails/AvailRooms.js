import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { useHistory } from "react-router";
import Headercomponent from '../../Headercomponent';
import { Link, withRouter } from "react-router-dom";
class AvailRooms extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
                rooms: []
        }
      
        this.bookRoom= this.bookRoom.bind(this);
      }
      

      
    

    componentDidMount(){
        EmployeeService.getavailrooms().then((res) => {
            this.setState({ rooms: res.data});
        });
    }
    bookRoom(memcode){
        this.props.history.push(`/book-room/${memcode}`);
    }
    render() {
        return (
            
        
    
           <div style={{backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'25px',boxShadow:'2px 5px 30px 2px white',fontFamily:'cursive',color:'b#002147',marginTop:'2cm'}} className='container' >
               
                              <h2 className="text-center"style={{backgroundColor:'whitesmoke',fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px',borderRadius:'10px'}}>Available Rooms</h2>
                 <div className = "row">
                    </div>
                 <br></br>
                 <div className = "row">
                        <table  style={{width:'25cm',marginLeft:'2cm',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                        
                            <th>Room NO</th>
                            <th>Type</th>
                            <th>Availability</th>
                            
                            <th>Price</th>
                            <th>book</th>
                                </tr>
                            </thead>
                            <tbody style={{fontFamily:'serif',textAlign:'center'}}>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key = {room.id}>
                                        <td>{room.roomno}</td>
                                        <td>{room.type}</td>
                                        <td>{room.availability==false && "Booked"||room.availability==true && "NotBooked"}</td>
                                        <td>{room.price}</td>
                                        <button style={{color:'white',background:"linear-gradient(#002147, black)",margin:'0.3cm',boxShadow:'0 5px 30px 0 skyblue'}} onClick={ () => this.bookRoom(room.roomno)} className="btn btn-info">Book Room </button>
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

export default withRouter(AvailRooms);