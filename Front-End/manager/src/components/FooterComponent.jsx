import React, { Component } from 'react'

 class FooterComponent extends Component {
     constructor(props){
         super(props)
             this.state={
             }
         
     }
    render() {
        return (
            <div >
                <footer class="panel-footer navbar-bottom" id="footer" style={{background:"linear-gradient(#002147, black)",borderRadius:'100px 100px 3px 3px',boxShadow:" 0px 0px 20px 10px #d3d3d3",marginTop:'50%'}}>
                    <h1 style={{textAlign:'center',fontFamily:'cursive',color:'gold',fontSize:'20px'}}>L/Hotels . Pvt . Ltd</h1>
                </footer>
            </div>
        )
    }
}
export default FooterComponent