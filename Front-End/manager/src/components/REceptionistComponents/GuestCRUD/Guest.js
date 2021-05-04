import React, {Component } from 'react';
import EmployeeService from '../../../Services/EmployeeService';
import { useHistory } from "react-router";
import Headercomponent from '../../Headercomponent';
import { withRouter } from 'react-router-dom';
class Guest extends Component {
    refresh = () => {
        // re-renders the component
        this.setState({});
      };
    
    constructor(props) {
        super(props)

        this.state = {
                guests: []
        }
        this.addGuest = this.addGuest.bind(this);
        this.editGuest= this.editGuest.bind(this);
        this.deleteGuest=this.deleteGuest.bind(this);
    }
    

    componentDidMount(){
        EmployeeService.getGuest().then((res) => {
            this.setState({ guests: res.data});
        });
    }
    deleteGuest(memcode){   
        EmployeeService.deleteGuest(memcode).then(res => {
            this.setState({guests: this.state.guests.filter(guestinfo => guestinfo.memcode !==memcode)});
    });
    }
    //     EmployeeService.deleteEmployee(code)//(res =>{
    //         //this.setState({employees:this.state.employees.filter(staffinfo=>staffinfo.code!= code)});
    //         this.props.history.push('/employee');
    //     }

    // }
    addGuest(){
        this.props.history.push('/add-guest');
    }
    editGuest(code){
        this.props.history.push(`/update-guest/${code}`);
    }

    render() {
        return (
            
        <>
        
    
        
           <div style={{width:'30cm',backgroundColor:'whitesmoke',borderRadius:"10px",fontSize:'25px',boxShadow:'2px 5px 30px 2px white',fontFamily:'cursive',color:'b#002147',marginTop:'2cm'}}>
              
               
                 <h2 className="text-center"style={{backgroundColor:'whitesmoke',fontWeight:'bolder',boxShadow:'0 5px 30px 0 gray',fontSize:'40px',borderRadius:'10px'}}className="text-center" >Guest List</h2>
                 <div className = "row">
                    
                     </div>
                 <br></br>
                 <div className = "row">
                        <table style={{width:'2cm',marginLeft:'1cm',borderRadius:'15px',boxShadow:'0 5px 20px 0 gray'}} className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>id</th>
                            <th>Guest name</th>
                            <th>Number</th>
                            <th>address</th>
                            <th>company</th>
                            <th>email</th>
                            <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{fontFamily:'serif'}}>
                                {
                                    this.state.guests.map(
                                        guestinfo => 
                                        <tr key = {guestinfo.id}>
                                        <td>{guestinfo.memcode}</td>
                                        <td>{guestinfo.name}</td>
                                        <td>{guestinfo.phonenumber}</td>
                                        <td>{guestinfo.address}</td>
                                        <td>{guestinfo.company}</td>
                                        <td>{guestinfo.email}</td>
                                        <td>
                                                <button style={{marginLeft:"10px",color:'white',background:"linear-gradient(#ff6161, black)",boxShadow:'0 5px 20px 0 gray'}} onClick={ () => this.deleteGuest(guestinfo.memcode)} className="btn btn-info">delete Guest </button>
                                                
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

export default withRouter(Guest)