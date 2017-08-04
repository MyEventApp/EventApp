import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import calendar from '../images/calender.png';
import location from '../images/location.png';
import backbutton from '../images/back-button.png';
import rightarrow from '../images/RIght-arrow-Icons.png';
import clock from '../images/clock.png';
import '../css/style.css';
const styles={
 paper:{
     background: '#FFD93A ',
     height: '100%',
     border:'1px solid',
     marginBottom:'11px',
     borderColor:'#BDC3C7 ',
   },
   content:{
     marginLeft:'6px',
   },
   heading:{
     marginLeft:"35px",
   },
   time:{
     marginTop:"31px"
   }
   };
   class MySchedule extends Component  {
 render() {
 return (
   <div className='col-xs-12 section'>
   <div className='row'>
   <div className='col-xs-3'>
   <Link to='/'>
   <p><img src={backbutton} style={{width:'40%',marginTop:"5px"}}/></p>
   </Link>
   </div>
   <div className='col-xs-9'>
   <h4 style={styles.heading}><b>My Schedule</b></h4>
   </div>
   </div>
   <Paper zDepth={1} rounded={true} style={styles.paper} >
   <div className='row'>
   <div className='col-xs-6'>
   <p style={styles.content}><strong>Activity Name</strong></p>
   <p><img src={calendar} style={{width:'12%'}}/>Date</p>
   <p><img src={location} style={{width:'12%'}}/>Venue</p>
   </div>
   <div className='col-xs-4'>
   <p style={styles.time}><img src={clock} style={{width:'15%'}}/>Time </p>
   </div>
   <div className='col-xs-2'>

   <p><img src={rightarrow} style={{width:'50%',marginTop:"5px"}}/></p>
</div>
  </div>
  </Paper>
  <Paper zDepth={1} rounded={true} style={styles.paper} >
  <div className='row'>
  <div className='col-xs-6'>
  <p style={styles.content}><strong>Activity Name</strong></p>
  <p><img src={calendar} style={{width:'12%'}}/>Date</p>
  <p><img src={location} style={{width:'12%'}}/>Venue</p>
  </div>
  <div className='col-xs-4'>
  <p style={styles.time}><img src={clock} style={{width:'15%'}}/>Time </p>
  </div>
  <div className='col-xs-2'>

  <p><img src={rightarrow} style={{width:'50%',marginTop:"5px"}}/></p>
</div>
 </div>
 </Paper>
 <Paper zDepth={1} rounded={true} style={styles.paper} >
 <div className='row'>
 <div className='col-xs-6'>
 <p style={styles.content}><strong>Activity Name</strong></p>
 <p><img src={calendar} style={{width:'12%'}}/>Date</p>
 <p><img src={location} style={{width:'12%'}}/>Venue</p>
 </div>
 <div className='col-xs-4'>
 <p style={styles.time}><img src={clock} style={{width:'15%'}}/>Time </p>
 </div>
 <div className='col-xs-2'>

 <p><img src={rightarrow} style={{width:'50%',marginTop:"5px"}}/></p>
</div>
</div>
</Paper>
<Paper zDepth={1} rounded={true} style={styles.paper} >
<div className='row'>
<div className='col-xs-6'>
<p style={styles.content}><strong>Activity Name</strong></p>
<p><img src={calendar} style={{width:'12%'}}/>Date</p>
<p><img src={location} style={{width:'12%'}}/>Venue</p>
</div>
<div className='col-xs-4'>
<p style={styles.time}><img src={clock} style={{width:'15%'}}/>Time </p>
</div>
<div className='col-xs-2'>

<p><img src={rightarrow} style={{width:'50%',marginTop:"5px"}}/></p>
</div>
</div>
</Paper>
  </div>
 );
}
}
export default MySchedule;
