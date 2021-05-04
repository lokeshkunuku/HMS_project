import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { withRouter } from 'react-router-dom';
class CreateRoom extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roomno:'',
            type: '',
            availability: true,
            price: ''
        }
        this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
       }

    // step 3
    /*componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({employeename: employee.employeename,
                    address: employee.address,
                    salary : employee.salary,
                    age : employee.age,
                    occupation : employee.occupation,
                    email : employee.email
                    
                });
            });
        }        
    }*/
    saveOrUpdateRoom = (e) => {
        e.preventDefault();
        let employee = {roomno: this.state.roomno, type: this.state.type, availability: this.state.availability, price: this.state.price};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createRoom(employee).then(res =>{
            this.props.history.push('/room');
        });

        // step 5
       /* if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employee');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employee');
            });
        }*/
    }
    
    changeRoomNoHandler= (event) => {
        this.setState({roomno: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type : event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    cancel(){
        this.props.history.push('/room');
    }


    render() {
        return (
            <div style={{width:'31cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'35px',boxShadow:'2px 5px 30px 2px white',fontFamily:'serif',color:'b#002147',marginTop:'1cm'}} >
              
                   <div className = "container" >
                        <div >
                            <div >
                                <h1 >Add Room</h1>
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label><span style={{color:'red'}}>*</span> Room No: </label>
                                            <input type="number" placeholder="roomno" name="room" className="form-control" 
                                                value={this.state.roomno} onChange={this.changeRoomNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label><span style={{color:'red'}}>*</span> Type : </label>
                                            <select placeholder="type" name="type" className="form-control" 
                                               value={this.state.type} onChange={this.changeTypeHandler}>
                                                   <option>Choose Room Type</option>
                                                    <option value='VIP'  >VIP</option>
                                                    <option value='VVIP' >VVIP</option>
                                                    <option value='Suite'>Suite</option>
                                                    <option value='Delux'>Delux</option>
                                            </select>        
                                        </div>
                                        <div className = "form-group">
                                            <label><span style={{color:'red'}}>*</span> Price : </label>
                                            <input  type="number" placeholder="price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateRoom.bind(this)}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(CreateRoom)