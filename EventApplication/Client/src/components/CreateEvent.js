import React, { Component} from 'react';
import backbutton from '../images/back-button.png';
import Paper from 'material-ui/Paper';
import {
 Step,
 Stepper,
 StepButton,
 StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Button,DropdownButton,MenuItem} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import { Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';

const styles={
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
 button1:{
   background: '#FFD93A ',
   float:'right'
 },
 addbutton:{
   marginRight:'10px',
   float:'right'
 },
 uploadbutton:{
   marginRight:'10px',
   float:'right'
 },
 radioButton: {
   marginBottom: '16px',
 },
};
class CreateEvent extends Component {
state = {
  stepIndex: 0,
 };
 handleNext = () => {
  const {stepIndex} = this.state;
  if (stepIndex < 7) {
   this.setState({stepIndex: stepIndex + 1});
  }
 };
 handlePrev = () => {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
   this.setState({stepIndex: stepIndex - 1});
  }
 };
 renderStepActions(step) {
  return (
   <div style={{margin: '12px 0'}}>
    <RaisedButton
     label="Next"
     disableTouchRipple={true}
     disableFocusRipple={true}
     primary={true}
     onTouchTap={this.handleNext}
     style={{marginRight: 12}}
    />
    {step > 0 && (
     <FlatButton
      label="Back"
      disableTouchRipple={true}
      disableFocusRipple={true}
      onTouchTap={this.handlePrev}
     />
    )}
   </div>
  );
 }
 render() {
  const {stepIndex} = this.state;
  return (
   <div className='col-xs-12 section'>

   <div className='row' style={{position:'fixed'}}>
   <div className='col-xs-2'>
   <p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
   </div>
   <div className='col-xs-8'>
   <center><h4><b>Create Event</b></h4></center>
   </div>
   </div>

   <div style={{maxWidth: '100%', maxHeight: 400, margin: 'auto'}}>
    <Stepper activeStep={stepIndex} linear={false} orientation="vertical">
     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 0})} >
       Add Event
      </StepButton>
      <StepContent>
      <div className='col-xs-12'>
      <Paper style={styles.paper}>
     <Form horizontal style={{fontSize:'12px'}}>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Event Name
       </Col>
       <Col xs={8}>
        <FormControl type="text" />
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Owner
       </Col>
       <Col xs={8}>
        <FormControl type="text"/>
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Company
       </Col>
       <Col xs={8}>
        <FormControl type="text"/>
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Location
       </Col>
       <Col xs={8}>
        <FormControl type="text" />
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Start Date & Time
       </Col>
       <Col xs={8}>
        <FormControl type="date" />
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        End Date & Time
       </Col>
       <Col xs={8}>
        <FormControl type="date" />
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       TimeZone
       </Col>
       <Col xs={8}>
        <FormControl type="date" />
       </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
       Description
       </Col>
       <Col xs={8}>
        <FormControl type="text" placeholder="NA"/>
       </Col>
      </FormGroup>
      </Form>
     </Paper>
     </div>
      {this.renderStepActions(0)}
     </StepContent>
    </Step>

    <Step>
     <StepButton onClick={() => this.setState({stepIndex: 1})} style={styles.stepbutton}>
      Add Agenda
     </StepButton>
     <StepContent>
     <div className='col-xs-12'>
 <Paper style={styles.paper}>
<Form horizontal style={{fontSize:'12px'}}>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     Agenda Name
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     Date
   </Col>
   <Col xs={8}>
     <FormControl type="date"/>
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Start Time
   </Col>
   <Col xs={8}>
     <FormControl type="time"/>
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     End Time
   </Col>
   <Col xs={8}>
     <FormControl type="time" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     Venue
   </Col>
   <Col xs={8}>
     <FormControl type="text"  />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     Description
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Event Lead Details
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Lead Name
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Email ID
   </Col>
   <Col xs={8}>
     <FormControl type="email" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Designation
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail"  bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Profile Photo
   </Col>
   <Col xs={5}>
     <FormControl type="text" />
   </Col>
   <Col xs={3}>
   <Button bsSize='small' style={styles.button1} >Browse</Button>
   </Col>
 </FormGroup>
 </Form>
</Paper>
<Button bsSize='sm' style={styles.addbutton}>Add More</Button>
</div>
       {this.renderStepActions(1)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 2})}>
       Add Speakers
      </StepButton>
      <StepContent>
      <DropdownButton bsStyle='default' value='Select Agenda'  id='ii'>
     <MenuItem eventKey="1">Action</MenuItem>
     <MenuItem eventKey="2">Another action</MenuItem>
     <MenuItem eventKey="3" active>Active Item</MenuItem>
      </DropdownButton>
     <div className='col-xs-12'>
     <Paper style={styles.paper}>
   <Form horizontal style={{fontSize:'12px'}}>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
      Speaker Name
       </Col>
       <Col xs={8}>
         <FormControl type="text" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Image
       </Col>
       <Col xs={8}>
         <FormControl type="URL"/>
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Speaker Email ID
       </Col>
       <Col xs={8}>
         <FormControl type="email"/>
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
       <Col componentClass={ControlLabel} xs={4}>
        Designation
       </Col>
       <Col xs={8}>
         <FormControl type="text" />
       </Col>
     </FormGroup>
     </Form>
    </Paper>
   </div>
       {this.renderStepActions(2)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 3})}>
       Contact Person Detail
      </StepButton>
      <StepContent>
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
       {this.renderStepActions(3)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 4})}>
       Documents/Notice
      </StepButton>
      <StepContent>
      <div className='col-xs-12'>
<Form horizontal style={{fontSize:'12px'}}>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={12}>
     Document
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
   <Col xs={4}>
   <Button bsSize='small' style={styles.button} >Browse</Button>
   </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
     <Col componentClass={ControlLabel} xs={12}>
       Notice/Message
     </Col>
     <Col xs={12}>
     <FormControl componentClass="textarea"/>
     </Col>
   </FormGroup>
</Form>
<Button bsSize='sm' style={styles.uploadbutton}>Upload</Button>
</div>
       {this.renderStepActions(4)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 5})}>
       Images
      </StepButton>
      <StepContent>
<div className='col-xs-12'>
<Form horizontal style={{fontSize:'12px'}}>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={12}>
     Document
   </Col>
   <Col xs={8}>
     <FormControl type="text" />
   </Col>
   <Col xs={4}>
   <Button bsSize='small' style={styles.button} >Browse</Button>
   </Col>
   </FormGroup>
   <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
     <Col componentClass={ControlLabel} xs={12}>
     <Button bsSize='small' style={styles.button} >Add More</Button>
     </Col>
   </FormGroup>
</Form>
<Button bsSize='sm' style={styles.uploadbutton}>Upload</Button>
</div>
       {this.renderStepActions(5)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 6})}>
       Add Sponsors
      </StepButton>
      <StepContent>
      <div className='col-xs-12'>
      <Paper style={styles.paper}>
    <Form horizontal style={{fontSize:'12px'}}>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
          Sponsors Name
        </Col>
        <Col xs={8}>
          <FormControl type="text" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
          Company Logo
        </Col>
        <Col xs={8}>
          <FormControl type="text"/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
         Email ID
        </Col>
        <Col xs={8}>
          <FormControl type="email"/>
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
          Contact Number
        </Col>
        <Col xs={8}>
          <FormControl type="number" />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
          Description
        </Col>
        <Col xs={8}>
          <FormControl type="text"  />
        </Col>
      </FormGroup>
      <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
        <Col componentClass={ControlLabel} xs={4}>
     Website URL
        </Col>
        <Col xs={8}>
          <FormControl type="URL" />
        </Col>
      </FormGroup>
      </Form>
     </Paper>
    </div>
       {this.renderStepActions(6)}
      </StepContent>
     </Step>

     <Step>
      <StepButton onTouchTap={() => this.setState({stepIndex: 7})}>
       Send Invites
      </StepButton>
      <StepContent>
      <div className='col-xs-12'>
<Form horizontal style={{fontSize:'12px'}}>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
 <Col componentClass={ControlLabel} xs={4}>
   Event Type
 </Col>
 <Col xs={8}>
 <RadioButtonGroup name="shipSpeed" defaultSelected="light">
      <RadioButton
        value="light"
        label="Open"
        style={styles.radioButton}
      />
      <RadioButton
        value="not_light"
        label="Invite Only"
        style={styles.radioButton}
      />
  </RadioButtonGroup>
 </Col>
</FormGroup>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
 <Col componentClass={ControlLabel} xs={4}>
   Number Of Invitees
 </Col>
 <Col xs={8}>
   <FormControl type="text" />
 </Col>
</FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
     Invitee Name
   </Col>
   <Col xs={6}>
     <FormControl type="text"/>
   </Col>
   <Col xs={2}>
   </Col>
 </FormGroup>
 <FormGroup controlId="formHorizontalEmail" bsSize='small'style={styles.FormGroup}>
   <Col componentClass={ControlLabel} xs={4}>
    Invitee List
   </Col>
   <Col xs={8}>
     <FormControl type="text"/>
   </Col>
 </FormGroup>
 </Form>
 <Button bsSize='sm' style={styles.button}>Send</Button>
</div>
       {this.renderStepActions(7)}
      </StepContent>
     </Step>
    </Stepper>
   </div>
   </div>
  );
 }
}
export default CreateEvent;
