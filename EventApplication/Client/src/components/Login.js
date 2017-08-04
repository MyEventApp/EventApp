import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Button, Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import SignUp from './SignUp';
import '../css/style.css';

const styles={
 paper:{
     background: '#FFD93A ',
     height: '100%',
     border:'1px solid',
     marginBottom:'11px',
     borderColor:'#BDC3C7 ',
   },
 };

class Login extends Component  {
render() {
return (<center>
 <div className='col-xs-12' style={{marginTop:'160px'}}>
 <Paper style={styles.paper}>
 <h4>Login</h4>
 <Form horizontal style={{fontSize: '12px'}}>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Username
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={4}>
    Password
   </Col>
   <Col xs={8}>
     <FormControl type="password" />
   </Col>
 </FormGroup>
 <FormGroup bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
   <Col componentClass={ControlLabel} xs={6}>
  New User?<Link to='/signup'>Sign Up</Link>
   </Col>
   <Col xs={6}>
   <Link to='/home'>
  <Button bsSize='xs' style={{float:'right'}} >Submit</Button></Link>
   </Col>
 </FormGroup>
 </Form>
 </Paper>
 </div></center>
)}
};

export default Login;
