import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { Link, withRouter } from "react-router-dom";

class RoomBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            roomno:this.props.match.params.memcode,
            children:'',
            adults:'',
            checkin:'',
            name: '',
            address: '',
            phonenumber: '',
            gender:'',
            company:'',
            email:''
        }

        this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
        this.changeChildrenHandler = this.changeChildrenHandler.bind(this);
        this.changeAdultsHandler = this.changeAdultsHandler.bind(this);
        this.changeCheckinHandler = this.changeCheckinHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeCompanyHandler=this.changeCompanyHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

    
            EmployeeService.getroombyId(this.state.roomno).then( (res) =>{
                let roominfo = res.data;
                this.setState({roomno: roominfo.roomno,
                   type: roominfo.type,
                    availability : roominfo.availabilty,
                    price : roominfo.price
                });
            });
        }        
      
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {name: this.state.name, address: this.state.address,phonenumber: this.state.phonenumber,gender: this.state.gender,company: this.state.company,  email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.createGuest(employee);
        let roominfo = {roomno: this.state.roomno, type: this.state.type, availability: false , price: this.state.price};
        console.log('roominfo => ' + JSON.stringify(roominfo));
        EmployeeService.updateRoom(roominfo);
        let checkindetails = {guestname: this.state.name, roomno:this.state.roomno,adults:this.state.adults,children:this.state.children,checkin:this.state.checkin} ; 
        console.log('checkindetails => ' + JSON.stringify(checkindetails));
        EmployeeService.addCheckin(checkindetails).then(res =>{
            this.props.history.push('/avail-room'); 
         
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
    changeChildrenHandler= (event) => {
        this.setState({children: event.target.value});
    } 
    changeAdultsHandler= (event) => {
        this.setState({adults: event.target.value});
    }
     changeCheckinHandler= (event) => {
        this.setState({checkin: event.target.value});
    }
     changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changePhoneNumberHandler= (event) => {
        this.setState({phonenumber: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeCompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/avail-room');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    <h1>Checking-inn</h1>
                                }
                                <div className = "card-body">
                                    <form>  
                                        <div className = "form-group">
                                            <label> Guest Name: </label>
                                            <input required placeholder="Name" name="employeename" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div >
                                            <label> Adults </label>
                                            <input placeholder="No.of.Adults" name="Adults" className="form-control" 
                                                value={this.state.adults} onChange={this.changeAdultsHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> Children </label>
                                            <input placeholder="Children" name="Children" className="form-control" 
                                                value={this.state.children} onChange={this.changeChildrenHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> RoomNo </label>
                                            <input placeholder={this.state.roomno} name="room no" className="form-control" 
                                                value={this.state.roomno} onChange={this.changeRoomNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> checkin </label>
                                            <input type="date" name="checkin" className="form-control" 
                                                value={this.state.checkin} onChange={this.changeCheckinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Phonenumber </label>
                                            <input id="phone" name="phone" placeholder="123-45-6789-0"  required className="form-control" 
                                                value={this.state.phonenumber} onChange={this.changePhoneNumberHandler}required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender </label>
                                            <input  placeholder="Gender" name="age" className="form-control" 
                                                value={this.state.gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Occupation: </label>
                                            <input placeholder="occupation" name="occupation" className="form-control" 
                                                value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee.bind(this)}>Save</button>
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

export default withRouter(RoomBook)