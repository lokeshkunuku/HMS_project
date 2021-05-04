import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import EmployeeService from '../../Services/EmployeeService';
 class OwnerHp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                guests: [],
                rooms:[],
                trooms:[],
                employees:[],
                price:'',
                tpr:''
                
        }
    }
    

    componentDidMount(){
        EmployeeService.checkin().then((res) => {
            this.setState({ guests: res.data});
        });
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
        EmployeeService.getrooms().then((res) => {
            this.setState({ trooms: res.data});

               
        });
        EmployeeService.getroomservice().then((res) => {
            this.setState({ rooms: res.data});
        });
    }

    render() {
        return (
            <div>
                
            <div style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'60px',border:" 3px yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
            <div style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total Inventory Items{this.state.tpr}</h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px' ,color:'ThreeDDarkShadow'}}>[{this.state.rooms.length}]</h2>
                  </div>
            </div>
            <div  style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'60px',border:" 3px  yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
                  <div style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total No of Employees </h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px',color:'ThreeDDarkShadow'}}>[{this.state.employees.length}]</h2>
                  </div>
               

                </div> <div  style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'60px',border:" 3px  yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
                  <div style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total Guests Checked in Hotel</h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px',color:'ThreeDDarkShadow'}}>[{this.state.guests.length}]</h2>
                  </div>
               

                </div>
                <div  style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'60px',border:" 3px  yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
                  <div style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total No of Rooms </h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px',color:'ThreeDDarkShadow'}}>[{this.state.trooms.length}]</h2>
                  </div>
               

                </div>    
                
            </div>

        )
    }
}
export default withRouter(OwnerHp)