import React, { Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { withRouter } from 'react-router-dom';
class Updatestaff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            idcode: this.props.match.params.idcode ,
            code:'',
            employeename: '',
            address: '',
            salary: '',
            age:'',
            occupation:'',
            email:''
        }
        this.changeCodeHandler=this.changeCodeHandler.bind(this);
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeOccupationHandler=this.changeOccupationHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
   componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.idcode).then( (res) =>{
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
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {code:this.state.idcode, employeename: this.state.employeename, address: this.state.address,salary: this.state.salary,age: this.state.age,occupation: this.state.occupation,  email: this.state.email};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee).then(res =>{
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

    changeCodeHandler=(event)=>{
        this.setState({code:event.target.value});
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
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div style={{width:'31cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'35px',boxShadow:'2px 5px 30px 2px white',fontFamily:'serif',color:'b#002147',marginTop:'1cm'}}>
                <br></br>
                   <div  className='container'>
                        <div >
                            <div >
                                <h1 style={{fontSize:'20px'}}>(<span style={{color:'red'}}>*</span> Required)</h1>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>code </label>
                                            <input placeholder={this.state.idcode} name="employeename" className="form-control" 
                                                value={this.state.code} onChange={this.changeCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Employee Name: </label>
                                            <input placeholder="Employee name" name="employeename" className="form-control" 
                                                value={this.state.employeename} onChange={this.changeEmployeeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Address: </label>
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
                                            <input placeholder="age" name="age" className="form-control" 
                                                value={this.state.age} onChange={this.changeAgeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Occupation: </label>
                                            <input placeholder="occupation" name="occupation" className="form-control" 
                                                value={this.state.occupation} onChange={this.changeOccupationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <span style={{color:'red'}}>*</span>Email: </label>
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

export default withRouter(Updatestaff)