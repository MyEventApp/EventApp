import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import img1 from '../images/download1.jpg';
import calendar from '../images/calender.png';
import location from '../images/location.png';
import backbutton from '../images/back-button.png';
import rightarrow from '../images/RIght-arrow-Icons.png';
import clock from '../images/clock.png';
import '../css/style.css';
import $ from 'jquery';

const styles={

profilepaper:{
    background:'#424242 ',
     height: '100%',
     marginBottom:'2px',
},
paper1:{
    background:'#FFD93A ',
    height:'100%',
    border:'1px solid',
    borderColor:'#BDC3C7 ',
    borderRadius:'7px'

},
paper:{
    height: '100%',
    border:'1px solid',
    marginBottom:'2px',
    borderColor:'#BDC3C7 ',
    borderRadius:'7px'

  },
  content:{
    marginLeft:'6px',
  },
  heading:{
    marginLeft:"35px",
    color: '#FFFFFF '
  },
  time:{
    marginTop:"31px"
  },
  name:{
    color:'#FFFFFF '
  },

  floatingLabelFocusStyle:{
    color:'#FFD93A '
  },
  underlineFocusStyle:{
    borderColor:'#FFD93A '
  }
  };

class Profile extends Component  {

  constructor(props){
       super(props);
       this.state = {value:[]}
     };

  handleClick = () => {
      console.log("value");
      $.ajax({
          type : 'GET',
          url:'http://localhost:5050/eventProfile',
          dataType: 'jsonp',
           jsonpCallback: 'callback',
          // crossDomain: true
          jsonp: 'jsonp',
          success: function(res) {
            console.log("response");
            alert('success');
          },
          error: function(err){
            console.log("error",err);
            alert('failed');
          }
       });
  };

 render() {
return(
 <div className='col-xs-12 section'>
 <Paper zDepth={1} rounded={true} style={styles.profilepaper} >

 <div className='row'>
 <div className='col-xs-3'>
 <Link to='/'>
 <p><img src={backbutton} style={{width:'40%',marginTop:"5px"}} onClick={this.handleClick}/></p>
 </Link>
 </div>
 <div className='col-xs-9'>
 <h4 style={styles.heading}><b>Profile</b></h4>
 </div>
 </div>

 <div className='row'>
 <div className='col-xs-12'>
 <center>
 <Avatar src={img1} size={150}/>
 </center>
 </div>
 </div>

 <div className='row'>
 <div className='col-xs-12'>
 <center>
 <p style={styles.name}><strong>User Name:</strong></p>
 <p style={styles.name}>Designation</p>
 </center>
 </div>
 </div>
 </Paper>

 <div className='row'>
 <div className='col-xs-12'>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px"}}>
 <h5 style={{background:'#FFD93A ', borderRadius:'6px', padding:'6px'}}><strong>About</strong></h5>
 <div style={{margin:'6px'}}>
 <TextField defaultValue="Default Value"  floatingLabelText="Email" underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} style={{fontSize:'14px'}}/>
 <TextField defaultValue="Default Value"  floatingLabelText="AD ID" style={{fontSize:'14px'}} underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
 <TextField defaultValue="Default Value"  floatingLabelText="Phone No." style={{fontSize:'14px'}} underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
 </div>
 </Paper>
 </div>
 </div>

 <div className='row'>
 <div className='col-xs-12'>
 <Paper zDepth={1} rounded={true} style={{borderRadius:"7px"}}>
 <h5 style={{background:'#FFD93A ', borderRadius:'6px', padding:'6px'}}><strong>Address</strong></h5>
 <div style={{margin:'6px'}}>
 <TextField defaultValue="Default Value"  floatingLabelText="City" disabled={true} style={{fontSize:'14px',fontColor:'black'}} underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
 <TextField defaultValue="Default Value"  floatingLabelText="State"  style={{fontSize:'14px'}} underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
 <TextField defaultValue="Default Value" floatingLabelText="Country"  style={{fontSize:'14px'}} underlineFocusStyle={styles.underlineFocusStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
 </div>
 </Paper>
 </div>
 </div>
</div>
);
}
}

export default Profile;
