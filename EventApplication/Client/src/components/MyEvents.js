import React, { Component} from 'react';
import { Button,Form,FormGroup,FormControl,Col,ControlLabel } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Card,CardHeader, CardText} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import backbutton from '../images/back-button.png';
import Modal from './Modal';

const styles = {
  button:{
    background: '#FFD84A',
    marginRight: '5px',
  },
  card:{
    padding:'8px',
    border:'1px solid',
    marginTop:'7px',
    borderRadius: '7px',
    borderColor:'#BDC4C7',
    background:'#FFD84A',
  },
};

class MyEvents extends Component {
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
  <Link to='/'>
  <p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
  </Link>
  </div>
  <div className='col-xs-8'>
  <center><h4><b>MyEvents</b></h4></center>
  </div></div>
  <div className='row' >
    <div className='col-xs-6'>
      <Button block active bsSize='small'>Accepted</Button>
    </div>
    <div className='col-xs-6'>
      <Button block active bsSize='small' style={styles.button}>Created</Button>
    </div>
  </div>
  <Card style={{borderRadius:'7px'}}>

   <CardHeader title="Event Name" actAsExpander={true} showExpandableButton={true} style={styles.card} />
   <CardText expandable={true}  style={{color:'#424242',fontSize:'83%',marginLeft:'-10px'}}>
   <div className='col-xs-4'><center>Update Event</center></div>
   <div className='col-xs-4'><center> <Link to='/inviteelist'>Invitee List</Link></center></div>
   <div className='col-xs-4'><center>Announcements</center></div>
   </CardText>
 </Card>

 <Card style={{borderRadius:'7px'}}>
  <CardHeader title="Event Name" showExpandableButton={true} onTouchTap={this.handleOpen} style={styles.card} />
  </Card>
   <Dialog
         modal={true}
         open={this.state.open}
         actions={actions}
         onRequestClose={this.handleClose}
       >
<Modal/>
       </Dialog>


  </div>
);
}
}
export default MyEvents;
