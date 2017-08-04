import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui-next/styles/MuiThemeProvider';
import {LabelRadio,RadioGroup} from 'material-ui-next/Radio';
import {Button, Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import { withStyles, createStyleSheet } from 'material-ui-next/styles';
import MobileStepper from 'material-ui-next/MobileStepper';
import Paper from 'material-ui-next/Paper';
import Typography from 'material-ui-next/Typography';
import Icon from 'material-ui-next/Icon';
import IconButton from 'material-ui-next/IconButton';
import SwipeableViews from 'react-swipeable-views';

const styleSheet = createStyleSheet('CreateEvent1', theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    background:'#FFD93A',
  },

  paper:{
      background:'#E0E0E0',
      height: '100%',
      width: '100%',
      border: '1px solid',
      marginTop: '11px',
      marginBottom: '11px',
      borderRadius: '13px',
      borderColor:'#BDC3C7',
  }
}));

const styles={
  FormGroup:{
    margin:'0px',
    marginBottom:'10px',
    marginTop:'10px'
  },
  addbutton:{
    float:'right'
  },
  button:{
   background: '#FFD93A',
   float:'right',
   marginLeft:'2px'
 },
};

class CreateEvent1 extends Component {
  state = {
    activeStep: 0,
    selectedValue: undefined,
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };
    handleChange = (value) => {
    this.setState({
      activeStep: value,
    });
  };
  handleRadio =(event,value1) => {
    this.setState({selectedValue: value1});
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
      <MuiThemeProvider>
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header} >
          <Typography>
            Step {this.state.activeStep + 1} of 8
          </Typography>
        </Paper>
        <SwipeableViews
          index={this.state.activeStep}
          onChangeIndex={this.handleChange}>

    <div className='col-xs-12' value={0}>
     <Paper className={classes.paper}>
     <Form horizontal style={{fontSize: '12px'}}>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
         Event Name
       </Col>
       <Col xs={8}>
         <FormControl type="text" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
         Owner
       </Col>
       <Col xs={8}>
         <FormControl type="text"/>
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
        Company
       </Col>
       <Col xs={8}>
         <FormControl type="text"/>
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
         Location
       </Col>
       <Col xs={8}>
         <FormControl type="text" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
         Start Date & Time
       </Col>
       <Col xs={8}>
         <FormControl type="date"  />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail" bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
         End Date & Time
       </Col>
       <Col xs={8}>
         <FormControl type="date" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail"  bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
       <Col componentClass={ControlLabel} xs={4}>
        TimeZone
       </Col>
       <Col xs={8}>
         <FormControl type="date" />
       </Col>
     </FormGroup>
     <FormGroup controlId="formHorizontalEmail"  bsSize='small' style={{margin:'0px',marginTop:'10px',marginBottom:'10px'}}>
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
   <div className='col-xs-12' value={1}>
 <Paper className={classes.paper}>
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
   <Button bsSize='small' style={styles.button} >Browse</Button>
   </Col>
 </FormGroup>
 </Form>
</Paper>
<Button bsSize='small' style={styles.button}>Add More</Button>
</div>
<div className='col-xs-12'  value={2}>
<Paper className={classes.paper}>
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
<div className='col-xs-12' value={3}>
<Paper className={classes.paper}>
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
<div className='col-xs-12' value={4}>
<Paper className={classes.paper}>
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
</Paper>
<Button bsSize='small' style={styles.button}>Upload</Button>
</div>
<div className='col-xs-12' value={5}>
<Paper className={classes.paper}>
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
</Paper>
<Button bsSize='small' style={styles.button}>Upload</Button>
</div>
<div className='col-xs-12' value={6}>
<Paper className={classes.paper}>
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

<div className='col-xs-12' value={7}>
<Paper className={classes.paper}>
<Form horizontal style={{fontSize:'12px'}}>
<FormGroup controlId="formHorizontalEmail" bsSize='small' style={styles.FormGroup}>
  <Col componentClass={ControlLabel} xs={4}>
    Event Type
  </Col>
  <Col xs={8}>
  <RadioGroup name="shipSpeed" selectedValue={this.state.selectedValue} onChange={this.handleRadio}>
      <LabelRadio
        value="open"
        label="Open"

      />
      <LabelRadio
        value="inviteonly"
        label="Invite Only"

      />
  </RadioGroup>
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
  </Paper>
  <Button bsSize='small' style={styles.button}>Send</Button>
</div>
        </SwipeableViews>
        <MobileStepper
          type="text"
          steps={8}
          position="static"
          activeStep={this.state.activeStep}
          className={classes.mobileStepper}
          value={this.state.activeStep}
          onBack={this.handleBack}
          onNext={this.handleNext}
          disableBack={this.state.activeStep === 0}
          disableNext={this.state.activeStep === 7}
        />
      </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

CreateEvent1.propTypes ={
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CreateEvent1);
