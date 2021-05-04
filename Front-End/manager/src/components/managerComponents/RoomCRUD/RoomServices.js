import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { useHistory } from "react-router";
import Headercomponent from '../../Headercomponent';
class RoomServices extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
                roomservice : []
        }
        this.addRoomService = this.addRoomService.bind(this);
        this.deleteRoomService=this.deleteRoomService.bind(this);
    }
    

    componentDidMount(){
        EmployeeService.getroomservice().then((res) => {
            this.setState({ roomservice: res.data});
        });
    }
    deleteRoomService(id){   
        EmployeeService.deleteRoomService(id).then(res => {
            this.setState({roomservice: this.state.roomservice.filter(room=> room.id !==id)});
    });
    }
    //     EmployeeService.deleteEmployee(code)//(res =>{
    //         //this.setState({employees:this.state.employees.filter(staffinfo=>staffinfo.code!= code)});
    //         this.props.history.push('/employee');
    //     }

    // }
    addRoomService(){
        this.props.history.push('/add-roomservice');
    }
    render() {
        return (
            
        
    
           <div >
              
               
                 <h2 style={{fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px'}}className="text-center">Inventory List</h2>
                 <div className = "row">
                    <button style={{marginLeft:'2cm',marginTop:'1cm',color:'white',background:"linear-gradient(#002147, black)",boxShadow:'0 5px 20px 0 gray',fontSize:'20px'}} className="btn btn-primary" onClick={this.addRoomService.bind(this)}> Add Items</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table  style={{width:'25cm',marginLeft:'2cm',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                               
                                <th>Inventory Item</th>
                                <th>Number</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.roomservice.map(
                                        room => 
                                        <tr key = {room.id}>
                                        
                                        <td>{room.roomservice}</td>
                                        <td>{room.number}</td>
                                        <td>
                                                 <button style={{marginLeft:"10px",color:'white',background:"linear-gradient(#ff6161, black)",boxShadow:'0 5px 20px 0 gray'}}   onClick={ () => this.deleteRoomService(room.id)} className="btn btn-info">delete Item </button>
                                               
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

export default RoomServices