import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Button } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import Speakerphoto1 from '../images/photo1.png';
import Speakerphoto2 from '../images/download1.jpg';
import backbutton from '../images/back-button.png';
import rightarrow from '../images/RIght-arrow-Icons.png';
const styles={
  paper:{
      background: '#FFD93A',
      borderRadius:"7px",
      height: '100%',
      marginBottom:'11px',
      borderColor:'#BDC3C7',
    },
  };

class SponsorList extends Component  {
render() {
return (
  <div className='col-xs-12 section'>
  <div className='row'>
  <div className='col-xs-2'>
  <Link to='/details'>
  <p><img src={backbutton} style={{width:'70%',marginTop:"5px"}}/></p>
  </Link>
  </div>
  <div className='col-xs-8'>
  <center><h4><b>Sponsors</b></h4></center>
  </div>
  </div>
  <Paper zDepth={2} rounded={true} style={styles.paper}>
     <div className='row'>
  <div className='col-xs-2'>
<Avatar src={Speakerphoto1} style={{marginTop:"6px",marginLeft:"5px"}}/>
</div>
<div className='col-xs-8'>
<p>Sponsor Name<br></br>
Email Id</p>
</div>
<div className='col-xs-2'>
<p><img src={rightarrow} style={{width:'50%',marginTop:"15px"}}/></p>
</div>
</div>
  </Paper>
<Paper zDepth={2} rounded={true} style={styles.paper}>
<div className='row'>
<div className='col-xs-2'>
<Avatar src={Speakerphoto2} style={{marginTop:"4px",marginLeft:"5px"}}/>
</div>
<div className='col-xs-8'>
<p>Sponsor Name <br></br>
Email Id</p>
</div>
<div className='col-xs-2'>
<p><img src={rightarrow} style={{width:'50%',marginTop:"15px"}}/></p>
</div>
</div>
  </Paper>
  </div>
);
}
}
export default SponsorList;
