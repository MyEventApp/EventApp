import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Button } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import backbutton from '../images/back-button.png';
import Speakerphoto1 from '../images/photo1.png';
import Speakerphoto2 from '../images/download1.jpg';

const styles={
paper:{
   background: '#FFD93A ',
   height: '100%',
   border:'1px solid',
   marginTop: '4px',
   marginBottom: '2px',
   borderColor:'#BDC3C7 ',
 },
 heading:{
   marginLeft:"60px",
 }
};

class Speakers extends Component  {
render() {
return (
 <div className='col-xs-12 section'>
 <div className='row'>
 <div className='col-xs-2'>
 <Link to='/details'>
 <img src={backbutton} style={{width:'70%',marginTop:"5px"}}/>
 </Link>
 </div>
 <div className='col-xs-8'>
 <center><h4><b>Speakers</b></h4></center>
 </div>
 </div>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 ',}}>
   <Avatar src={Speakerphoto1} style={{marginTop:"6px"}}/>
 <p style={{marginTop:"-40px",marginLeft:"60px"}}>Speaker Name <br></br>
 Designation<br></br>
 Email id</p>
 </Paper>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 ',}}>
   <Avatar src={Speakerphoto2} style={{marginTop:"6px"}}/>
 <p style={{marginTop:"-40px",marginLeft:"60px"}}>Speaker Name <br></br>
 Designation<br></br>
 Email id</p>
 </Paper>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 ',}}>
   <Avatar src={Speakerphoto1} style={{marginTop:"6px"}}/>
 <p style={{marginTop:"-40px",marginLeft:"60px"}}>Speaker Name <br></br>
 Designation<br></br>
 Email id</p>
 </Paper>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 ',}}>
   <Avatar src={Speakerphoto2} style={{marginTop:"6px"}}/>
 <p style={{marginTop:"-40px",marginLeft:"60px"}}>Speaker Name <br></br>
 Designation<br></br>
 Email id</p>
 </Paper>
</div>
);
}
}
export default Speakers;
