import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom";
import './RHP.css';
import EmployeeService from '../../Services/EmployeeService';
class RecepHp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                guests: [],
                rooms:[]
                
        }
    }
    

    componentDidMount(){
        EmployeeService.checkin().then((res) => {
            this.setState({ guests: res.data});
        });
    


        EmployeeService.getavailrooms().then((res) => {
            this.setState({ rooms: res.data});
        });
    }
    checkin(){
        this.props.history.push('/check-in');
    }
    availroom(){
        this.props.history.push('/avail-room');

    }

    render() {
    
        return (
            <div>
              <div  style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'70px',border:" 3px  yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
                  <div onClick={this.checkin.bind(this)}style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total Guests Checked in Hotel</h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px',color:'ThreeDDarkShadow'}}>[{this.state.guests.length}]</h2>
                  </div>
               

                </div>
            <div style={{width: '400px', float:'left', height:'200px', background:"linear-gradient(white,silver)", margin:'70px',border:" 3px yellow",boxShadow:'0 5px 30px 0 white',borderRadius:'15px'}}>
            <div onClick={this.availroom.bind(this)}style={{backgroundColor:'g#004040',margin:'2px',borderRadius:'15px'}}>
                      <h1 style={{fontFamily:'cursive'}}>Total Rooms Available Today</h1>
                      <h2 style={{fontFamily:'cursive',fontSize:'50px' ,color:'ThreeDDarkShadow'}}>[{this.state.rooms.length}]</h2>
                  </div>
            </div>
            </div>
        )
    }
}
export default withRouter(RecepHp)