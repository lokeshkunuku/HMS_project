import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';

class CreateRoomService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            roomnservice:'',
            id: '',
            number:''
           
        }
        this.changeRoomServiceHandler = this.changeRoomServiceHandler.bind(this);
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changenumberHandler = this.changenumberHandler.bind(this);
       }

  
  
    saveOrUpdateRoomService=(e) => {
        e.preventDefault();
        let employee = {id: this.state.id, roomservice: this.state.roomnservice,number:this.state.number};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createRoomService(employee).then(res =>{
            this.props.history.push('/room-service');
        });
    }

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
    
    
    changeRoomServiceHandler= (event) => {
        this.setState({roomnservice: event.target.value});
    }

    changeIdHandler= (event) => {
        this.setState({id : event.target.value});
    }
    changenumberHandler= (event) => {
        this.setState({number : event.target.value});
    }
    
    cancel(){
        this.props.history.push('/room-service');
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h1>Add Room Service</h1>
                                
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Id </label>
                                            <input placeholder="id" name="id" className="form-control" 
                                                value={this.state.id} onChange={this.changeIdHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Item Name: </label>
                                            <input placeholder="roomservice" name="roomservice" className="form-control" 
                                                value={this.state.roomnservice} onChange={this.changeRoomServiceHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label>No of items: </label>
                                            <input placeholder="Number of items" name="Number" className="form-control" 
                                                value={this.state.number} onChange={this.changenumberHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateRoomService.bind(this)}>Save</button>
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

export default CreateRoomService