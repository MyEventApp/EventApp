import React, { Component} from 'react';
import backbutton from '../images/back-button.png';
import Paper from 'material-ui/Paper';

import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const styles={
  stepbutton:{
    color: '#FFEB3B',
    fill: '#FFEB3B',
    editable:true,
  },
  paper:{
      background:'#E0E0E0',
      height: '100%',
      width: '100%',
      border:'1px solid',
      marginTop:'11px',
      marginBottom:'11px',
      borderRadius: '13px',
      borderColor:'#BDC3C7',
  },
  FormGroup:{
    margin: '0px',
    marginTop: '10px',
    marginBottom: '10px'
  },
};
class CreateEvent4 extends Component  {
  state = {
   stepIndex: 0,
 };

 handleNext = () => {
   const {stepIndex} = this.state;
   if (stepIndex < 2) {
     this.setState({stepIndex: stepIndex + 1});
   }
 };

 handlePrev = () => {
   const {stepIndex} = this.state;
   if (stepIndex > 0) {
     this.setState({stepIndex: stepIndex - 1});
   }
 };
 getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return '';
    case 1:
      return '';
    case 2:
      return '';
    default:
      return '';
  }
}

render() {
  const {stepIndex} = this.state;
  const contentStyle = {margin: '0 16px'};
return (
<div>
<div className='row'>
<div className='col-xs-2'>
<p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
</div>
<div className='col-xs-8'>
<center><h4><b>Create Event</b></h4></center>
</div>
</div>
<div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
       <Stepper linear={false} activeStep={stepIndex}>
         <Step >
           <StepButton  onClick={() => this.setState({stepIndex: 0})} style={styles.stepbutton} >
            Contact Person Details

           </StepButton>
         </Step>
         <Step>
           <StepButton onClick={() => this.setState({stepIndex: 1})} style={{color:"#F44336"}}>
           Documents/Notice

           </StepButton>
         </Step>
         <Step>
           <StepButton onClick={() => this.setState({stepIndex: 2})}>
           Images
           </StepButton>
         </Step>
       </Stepper>
       <div className='col-xs-12'>
       <Paper style={styles.paper}>
     <Form horizontal style={{fontSize:'12px'}}>
       <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
           Person Name
         </Col>
         <Col xs={8}>
           <FormControl type="text" />
         </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
           Email ID
         </Col>
         <Col xs={8}>
           <FormControl type="email"/>
         </Col>
       </FormGroup>
       <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
         <Col componentClass={ControlLabel} xs={4}>
        Contact
         </Col>
         <Col xs={8}>
           <FormControl type="number"/>
         </Col>
       </FormGroup>
       </Form>
      </Paper>
     </div>
       <div style={contentStyle}>
         <p>{this.getStepContent(stepIndex)}</p>
         <div style={{marginTop: 12}}>
           <FlatButton
             label="Back"
             disabled={stepIndex === 0}
             onTouchTap={this.handlePrev}
             style={{marginRight: 12}}
           />
           <RaisedButton
             label="Save and Next"
             disabled={stepIndex === 2}
             primary={true}
             onTouchTap={this.handleNext}
           />
         </div>
       </div>
     </div>
     </div>
   );
 }
}export default CreateEvent4;
