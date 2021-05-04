import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { Link, withRouter } from "react-router-dom";
class Checkout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curTime : new Date().toLocaleDateString(),
            guestid:this.props.match.params.code,
            id: this.props.match.params.id,
            roomno:this.props.match.params.no,
            children:'',
            adults:'',
            checkin:this.props.match.params.check,
            name: '',
            checkout: '',
            days: '',
            totalprice:'',
            price:''
            
        }

        this.changeRoomNoHandler = this.changeRoomNoHandler.bind(this);
        this.changeChildrenHandler = this.changeChildrenHandler.bind(this);
        this.changeAdultsHandler = this.changeAdultsHandler.bind(this);
        this.changeCheckinHandler = this.changeCheckinHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDaysHandler = this.changeDaysHandler.bind(this);
        this.changeTotalPriceHandler = this.changeTotalPriceHandler.bind(this);
        this.changeCheckoutHandler = this.changeCheckoutHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
       
    }
   

    // step 3
    componentDidMount(){

    
            EmployeeService.getcheckinid(this.state.guestid).then( (res) =>{
                let roominfo = res.data;
                this.setState({id: roominfo.id,
                    roomno: roominfo.roomno,
                    name: roominfo.guestname,
                    checkin : roominfo.checkin,
                    adults : roominfo.adults,
                    children: roominfo.children
                });
            });

            EmployeeService.getroombyId(this.state.roomno).then( (res) =>{
                let roominfo = res.data;
                this.setState({roomno: roominfo.roomno,
                    type: roominfo.type,
                    availability : roominfo.availabilty,
                    price : roominfo.price,
                });
            });
            {
                var str2 = (this.state.checkin);
                var str2date= str2.split("-");
                var str2day = str2date[2];
                Number(str2day);     
                var str = this.state.curTime;
                var date = str.split("/");
                var day1 = date[0];
                Number(day1);
                var price = this.state.price;
                Number(price);
                var period = day1-str2day;
                Number(period);
             
                this.setState({days:period});
               
            }
           
            
        }
           
        
    
    
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let details = {roomno:this.state.roomno,guestname:this.state.name,children:this.state.children,adults:this.state.adults,checkin:this.state.checkin,checkout:this.state.curTime,days:this.state.days,totalprice:this.state.price*this.state.days};
        console.log('details => ' + JSON.stringify(details));
        EmployeeService.savereservation(details);
        let roominfo = {roomno: this.state.roomno, type: this.state.type, availability: true , price: this.state.price};
        console.log('roominfo => ' + JSON.stringify(roominfo));
        EmployeeService.deletecheckin(this.state.id);
        EmployeeService.updateRoom(roominfo).then(res =>{
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

    changeDaysHandler= (event) => {
        this.setState({days: event.target.value});
    }
    changeTotalPriceHandler(){
        this.setState({totalprice: this.state.price*this.state.days});
    }
    changeCheckoutHandler= (event) => {
        this.setState({checkout: event.target.value});
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
                                   
                                    <h1>Total Price: {this.state.price*this.state.days}</h1>
                                    
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Guest Name: </label>
                                            <input placeholder={this.state.name} name="employeename" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adults </label>
                                            <input placeholder={this.state.adults} name="Adults" className="form-control" 
                                                value={this.state.adults} onChange={this.changeAdultsHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> Children </label>
                                            <input placeholder={this.state.children}  name="Children" className="form-control" 
                                                value={this.state.children} onChange={this.changeChildrenHandler}/>
                                        </div> 
                                        <div className = "form-group">
                                            <label> RoomNo </label>
                                            <input placeholder={this.state.roomno} name="room no" className="form-control" 
                                                value={this.state.roomno} onChange={this.changeRoomNoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> checkin </label>
                                            <input type="date" placeholder={this.state.checkin} name="checkin" className="form-control" 
                                                value={this.state.checkin} onChange={this.changeCheckinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> checkout </label>
                                            <input placeholder={this.state.curTime} name="address" className="form-control" 
                                                value={this.state.curTime} onChange={this.changeCheckoutHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Total Price </label>
                                            <input placeholder={this.state.price*this.state.days} name="salary" className="form-control" 
                                                value={this.state.price*this.state.days} onChange={this.changeTotalPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Days </label>
                                            <input placeholder={this.state.days}  name="age" className="form-control" 
                                                value={this.state.days} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee.bind(this)}>Check-out</button>
                                      </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default withRouter(Checkout)