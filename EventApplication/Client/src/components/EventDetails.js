import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import img1 from '../images/bg-slide-01.jpg';
import img2 from '../images/eventt-image2.png';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import calendar from '../images/calender.png';
import location from '../images/location.png';
import imgagenda from '../images/Agenda.png';
import imgattendee from '../images/Attendee.png';
import backbutton from '../images/back-button.png';
import imgdiscussion from '../images/Discussion.png';
import imgspeaker from '../images/Profile-2.png';
import imgmyschedule from '../images/My-Schedule.png';
import imgsponsors from '../images/Sponsors.png';
import imggallery from '../images/Gallery.png';

const styles = {
  cm:
   {
     width:'100%',
     height:'120px',
   },
  heading:{
     marginLeft:"25px",
   }
   }

class EventDetails extends Component  {
 render() {
 return (
  <div className="col-xs-12 section">
  <div className='row'>
  <div className='col-xs-3'>
  <Link to='/'>
  <p><img src={backbutton} style={{width:'40%',marginTop:"5px"}}/></p>
  </Link>
  </div>
  <div className='col-xs-9'>
  <h4 style={styles.heading}><b>EventName</b></h4>
  </div></div>
  <div>
  <Paper zDepth={2} rounded={true} style={{width:'100%',height:'100%'}}>
    <img src={img2} style={styles.cm}  alt="image not found" />
  </Paper>

  <Paper rounded={true} style={{marginTop:'5px',background:'#FFD93A'}}>
    <img src={calendar} style={{width:'12%'}}/>Date
    <p><img src={location} style={{width:'12%'}}/>Location</p>
  </Paper>

  <Paper rounded={true} style={{background:'#E6E7E8'}}>
    <div className="row" style={{textAlign:'center'}}>
    <div className="col-xs-4" >
    <Link to='/agendalist'>
    <img src={imgagenda} style={{width:'45%',marginTop:'3px'}} />
    <p>Agenda</p></Link></div>

    <div className="col-xs-4" >
    <Link to='/speakers'>
    <img src={imgspeaker} style={{width:'45%',marginTop:'3px'}} />
    <p>Speakers</p></Link></div>
    <div className="col-xs-4" >
    <img src={imgattendee} style={{width:'45%',marginTop:'3px'}} />
    <p>Attendees</p></div>
    </div>

    <div className="row" style={{textAlign:'center'}}>
    <div className="col-xs-4" >
    <Link to='/contact'>
    <img src={imgdiscussion} style={{width:'45%',marginTop:'3px'}} />
    <p>Contact</p></Link></div>
    <div className="col-xs-4" >
    <Link to='/sponsorlist'>
    <img src={imgsponsors} style={{width:'45%',marginTop:'3px'}} />
    <p>Sponsors</p></Link></div>
    <div className="col-xs-4" >
    <Link to='/gallery'>
    <img src={imggallery} style={{width:'45%',marginTop:'3px'}} />
    <p>Gallery</p></Link></div>
    </div>
 </Paper>

 <Paper zDepth={2} rounded={true} style={{borderRadius:"7px"}}>
 <h5 style={{background:'#FFD93A ', borderRadius:'6px', padding:'6px'}}><strong>Updates</strong></h5>
 <p>Arrival of a significant point in time. In project management, an event marks the point in time when a task is completed. See also events.
 </p>
 </Paper>
 </div>
 </div>
 );
}
}
export default EventDetails;
