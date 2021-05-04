import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { withRouter } from 'react-router-dom';
class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '',
            employeename: '',
            address: '',
            salary: '',
            age:'',
            occupation:'',
            email:'',
            input: {},
            errors: {}
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeOccupationHandler=this.changeOccupationHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
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
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {employeename: this.state.employeename, address: this.state.address,salary: this.state.salary,age: this.state.age,occupation: this.state.occupation,  email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employee');
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
    
    changeEmployeeNameHandler= (event) => {
        this.setState({employeename: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeOccupationHandler= (event) => {
        this.setState({occupation: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/employee');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Add Employee</h3>
        }
    }
    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
    
        if (!input["name"]) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }
    
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Please enter your email Address.";
        }
    
        if (typeof input["email"] !== "undefined") {
            
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(input["email"])) {
            isValid = false;
            errors["email"] = "Please enter valid email address.";
          }
        }
    
        if (!input["comment"]) {
          isValid = false;
          errors["comment"] = "Please enter your comment.";
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }
    render() {
        return (
            <div style={{width:'31cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'35px',boxShadow:'2px 5px 30px 2px white',fontFamily:'serif',color:'b#002147',marginTop:'1cm'}}>
               
                   <div className = "container">
                        <div >
                            <div><h1 style={{alignContent:'center',textAlign:'center'}}> Add Employee<span style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span>Required)</span></h1>
                                <div className = "card-body">
                                    <form>
                                        <div >
                                            <label> <span style={{color:'red'}}>*</span>Employee Name: </label>
                                            <input id="name"placeholder="Employee name" name="name" className="form-control" 
                                                value={this.state.employeename} onChange={this.changeEmployeeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label><span style={{color:'red'}}>*</span> Address: </label>
                                            <input placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Salary: </label>
                                            <input placeholder="Salary" name="salary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Age: </label>
                                            <input  placeholder="age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Occupation: </label>
                                            <input placeholder="occupation" name="occupation" className="form-control" 
                                                value={this.state.occupation} onChange={this.changeOccupationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Email: </label>
                                            <input id="email" type='email' placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                                 <div className="text-danger">{this.state.errors.email}</div>
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

export default withRouter(CreateEmployeeComponent);