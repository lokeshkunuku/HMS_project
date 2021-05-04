import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { useHistory } from "react-router";
import { withRouter } from 'react-router-dom';
import Headercomponent from '../../Headercomponent';
class Staff extends Component {
    refresh = () => {
        // re-renders the component
        this.setState({});
      };
    
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee= this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }
    

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    deleteEmployee(code){   
        EmployeeService.deleteEmployee(code).then(res => {
            this.setState({employees: this.state.employees.filter(staffinfo => staffinfo.code !==code)});
    });
    }
    //     EmployeeService.deleteEmployee(code)//(res =>{
    //         //this.setState({employees:this.state.employees.filter(staffinfo=>staffinfo.code!= code)});
    //         this.props.history.push('/employee');
    //     }

    // }
    addEmployee(){
        this.props.history.push('/add-employee');
    }
    editEmployee(idcode){
        this.props.history.push(`/update-employee/${idcode}`);
    }

    render() {
        return (
            
        <>
        
    
        
           <div style={{width:'31cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'25px',boxShadow:'2px 5px 30px 2px white',fontFamily:'cursive',color:'b#002147',marginTop:'2cm'}}>
              
               
                 <h2  className="text-center"style={{backgroundColor:'whitesmoke',fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px',borderRadius:'10px'}} className="text-center">Employees List</h2>
                 <div className = "row">
                    <button style={{marginLeft:"80px",marginTop:'1cm',marginBottom:'10px',color:'white',background:"linear-gradient(skyblue, black)",boxShadow:'0 5px 20px 0 gray'}} className="btn btn-primary" onClick={this.addEmployee.bind(this)}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table style={{width:'30cm',marginLeft:'1cm',marginTop:'20px',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped table-bordered table-hover">

                            <thead>
                                <tr>
                                <th>id</th>
                            <th>Employee name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            
                            <th>Occupation</th>
                            <th>Email</th>
                            <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{fontFamily:'sans'}}>
                                {
                                    this.state.employees.map(
                                        staffinfo => 
                                        <tr key = {staffinfo.id}>
                                        <td>{staffinfo.code}</td>
                                        <td>{staffinfo.employeename}</td>
                                        <td>{staffinfo.address}</td>
                                        <td>{staffinfo.salary}</td>
                                        <td>{staffinfo.occupation}</td>
                                        <td>{staffinfo.email}</td>
                                        <td>
                                                 <button style={{marginLeft:"5px",color:'white',background:"linear-gradient(green, black)",boxShadow:'0 5px 20px 0 gray'}} onClick={ () => this.editEmployee(staffinfo.code)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft:"5px",color:'white',background:"linear-gradient(#ff6161, black)",boxShadow:'0 5px 20px 0 gray'}} onClick={ () => this.deleteEmployee(staffinfo.code)} className="btn btn-info">delete </button>
                                                
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

export default withRouter(Staff)