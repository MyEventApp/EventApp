import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Button } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Speakerphoto1 from '../images/photo1.png';
import Speakerphoto2 from '../images/download1.jpg';
import backbutton from '../images/back-button.png';
import rightarrow from '../images/RIght-arrow-Icons.png';
import Dialog from 'material-ui/Dialog';
import Modal from './Modal';

const styles={
 paper:{
     background: '#E0E0E0',
     borderRadius:"7px",
     border: '1px solid',
     height: '100%',
     marginBottom:'7px',
     borderColor:'#BDC3C7 ',
   },
   button:{
     background: '#FFD93A',
     marginRight:'5px',
   },
 };
 class InviteeList extends Component  {
   constructor(props) {
     super(props);
     this.state = {open: false};
   };

   handleOpen = () => this.setState({open: true});

   handleClose = () => this.setState({open: false});

render() {
     const actions = [
       <Button active bsSize='small' style={styles.button} onTouchTap={this.handleClose}>Cancel</Button>,
       <Button active bsSize='small'>Send</Button>]
return (
 <div className='col-xs-12 section'>
 <div className='row'>
 <div className='col-xs-2'>
 <Link to='/myevents'>
 <p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
 </Link></div>
 <div className='col-xs-8'>
 <center><h4><b>Invitee List</b></h4></center>
 </div>
 </div>
 <div className='row' style={{marginBottom:'7px'}}>
   <div className='col-xs-4'>
     <Button block active bsSize='small'>Invitees</Button>
   </div>
   <div className='col-xs-4'>
     <Button block active bsSize='small' style={styles.button}>Accepted</Button>
   </div>
   <div className='col-xs-4'>
     <Button block active bsSize='small'>Declined</Button>
   </div>
 </div>
 <Paper zDepth={1} rounded={true} style={styles.paper}>
 <div className='row'>
 <div className='col-xs-3'>
<Avatar src={Speakerphoto1} size={50}style={{margin:"15%"}} />
</div>
<div className='col-xs-7'>
<p>Person Name <br></br>
Email Id<br></br>
Contact Number</p>
</div>
<div className='col-xs-2'>
 <p><img src={rightarrow} style={{width:'70%',marginTop:"5px"}} onTouchTap={this.handleOpen}/></p>
</div>
</div>
 </Paper>
 <Paper zDepth={1} rounded={true} style={styles.paper}>
 <div className='row'>
 <div className='col-xs-3'>
<Avatar src={Speakerphoto2} size={50} style={{margin:"15%"}} />
</div>
<div className='col-xs-7'>
<p>Person Name <br></br>
Email Id<br></br>
Contact Number</p>
</div>
<div className='col-xs-2'>
 <p><img src={rightarrow} style={{width:'70%',marginTop:"5px"}}  onTouchTap={this.handleOpen}/></p>
</div>
</div>
 </Paper>
 <Paper zDepth={1} rounded={true} style={styles.paper}>
 <div className='row'>
 <div className='col-xs-3'>
<Avatar src={Speakerphoto2} size={50}style={{margin:"15%"}} />
</div>
<div className='col-xs-7'>
<p>Person Name <br></br>
Email Id<br></br>
Contact Number</p>
</div>
<div className='col-xs-2'>
 <p><img src={rightarrow} style={{width:'70%',marginTop:"5px"}} onTouchTap={this.handleOpen}/></p>
</div>
</div>
 </Paper>

 <Dialog modal={false} open={this.state.open} actions={actions} onRequestClose={this.handleClose}>
    <Modal/>
 </Dialog>
 </div>
);
}
}
export default InviteeList;
