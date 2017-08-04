import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import {Button, Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import $ from 'jquery';

const styles={
 paper:{
     background: '#FFD93A ',
     height: '100%',
     border:'1px solid',
     marginBottom:'11px',
     borderColor:'#BDC3C7 ',
   },
 };

class SignUp extends Component  {
  constructor(props) {
      super(props);
      this.state = {
        data1:[],
      };
  }

  handleSubmit = () => {
     this.setState({data1: []});
    let x = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      occupation: document.getElementById('occupation').value,
      dept: document.getElementById('dept').value,
      email: document.getElementById('email').value,
      adId: document.getElementById('adId').value,
      mobile: document.getElementById('mobile').value,
      location: document.getElementById('location').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      country: document.getElementById('country').value,
    };
   // On submit of the form, send a POST request with the data to the server.
   $.ajax({
        type : 'GET',
        url:"http://localhost:5000/signup",
        dataType: 'json',
        success: function(res) {

         this.setState({data1: res});
         console.log(res);
        }.bind(this),
        error: function(err){
         console.log(err);
        }.bind(this)
      });

 }

render() {
return (<center>
 <div className='col-xs-12' style={{marginTop:'4px'}}>
 <Paper style={styles.paper}>
 <h4>SignUp</h4>
 <Form horizontal style={{fontSize: '12px'}} method='post' action='/signup'>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    First Name
   </Col>
   <Col xs={8} >
     <FormControl type="text" id="firstName"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Last Name
   </Col>
   <Col xs={8}>
   <FormControl type="text" id="lastName"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Occupation
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="occupation"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
   Department
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="dept"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    EmailId
   </Col>
   <Col xs={8}>
     <FormControl type="email" id="email"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Ad Id
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="adId"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Mobile No.
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="mobile"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Location
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="location"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    City
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="city"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    State
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="state"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Country
   </Col>
   <Col xs={8}>
     <FormControl type="text" id="country"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Password
   </Col>
   <Col xs={8}>
     <FormControl type="password" id="password"/>
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
 <Col xs={12}>

  <Button bsSize='xs' style={{float:'right'}} id='submit' onClick={this.handleSubmit}>Submit</Button>
  <Link to='/'>
  <Button bsSize='xs' style={{float:'right',marginRight:'3px'}} >Cancel</Button>
  </Link>
</Col></FormGroup>
 </Form>
 </Paper>
 </div></center>
)}
};

export default SignUp;
