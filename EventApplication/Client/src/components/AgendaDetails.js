import React, { Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import TinyMCE from 'react-tinymce';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import { Button } from 'react-bootstrap';
import Avatar from 'material-ui/Avatar';
import calendar from '../images/calender.png';
import location from '../images/location.png';
import backbutton from '../images/back-button.png';
import Leadphoto from '../images/photo1.png';
import Speakerphoto from '../images/download1.jpg';
import notes from '../images/notes.png';

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
   },
   time:{
     marginTop:"31px"
   },

 };
 class Editor extends Component {
   state = {
      open: true,
    };
  handleEditorChange = (e) => {
        console.log('Content was updated:', e.target.getContent());
      }
  handleClose = () => {
          this.setState({open: false});
        };

render() {
  return (
    <Dialog modal={false} open={this.state.open} onRequestClose={this.handleClose}>
    <TinyMCE
        content="<p>This is the initial content of the editor</p>"
        config={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
        }}
        onChange={this.handleEditorChange}

      />
      </Dialog>
  )};
};

class AgendaDetails extends Component  {
  constructor(props) {
    super(props);
    this.state={open:false};
  }

  handleClick = (e) => {
    e.preventDefault();
   this.setState({open: !this.state.open})
  }


 render() {
 return (
   <div className='col-xs-12 section'>
   <div className='row'>
   <div className='col-xs-2'>
   <Link to='/agendalist'>
   <img src={backbutton} style={{width:'70%',marginTop:"5px"}}/>
   </Link>
   </div>
   <div className='col-xs-8'>
   <center><h4><b>Agenda</b></h4></center>
   </div>
   <div className='col-xs-2'>
   <img src={notes} style={{width:'70%',marginTop:"5px",marginLeft:'8px'}} onClick={this.handleClick.bind(this)}/>
    {this.state.open && < Editor / >}
   </div>
   </div>

   <Paper zDepth={1} rounded={true} style={styles.paper} >
   <center><p style={styles.content}><strong>Activity Name</strong></p>
   <p style={{fontSize:"12px"}}><img src={calendar} style={{width:'8%'}}/>23/7/2017 @ 02:00 pm - 25/7/2017 @ 05:00 pm</p>
   <p style={{fontSize:"12px"}}><img src={location} style={{width:'8%'}}/>Centre Court,T-17,EC4</p> </center>
   </Paper>
   <center><p style={{color:'#424242'}}><b>+</b> Add to My Schedule</p></center>
   <Paper zDepth={1} rounded={true} style={{borderRadius:"7px"}}>
   <h5 style={{background:'#FFD93A ',borderRadius:"6px",padding:"6px"}}><strong>OverView</strong></h5>
   <p>Arrival of a significant point in time. In project management, an event marks the point in time when a task is completed. See also events.
   </p>
   </Paper>
   <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 '}}>
   <h5 style={{background:'#FFD93A ',borderRadius:"6px",padding:"6px"}}><strong>Lead</strong></h5>
   <Avatar src={Leadphoto} style={{marginLeft:'5px'}} />
   <p style={{marginTop:"-50px",marginLeft:"60px"}}>Leader Name <br></br>
    Designation<br></br>
    Email id</p>
   </Paper>
   <Paper zDepth={1} rounded={true} style={{borderRadius:"7px",background:'#E0E0E0 ',}}>
   <h5 style={{background:'#FFD93A ',borderRadius:"6px",padding:"6px"}}><strong>Speakers</strong></h5>
   <Avatar src={Speakerphoto} style={{marginTop:"6px"}}/>
   <p style={{marginTop:"-50px",marginLeft:"60px"}}>Speaker Name <br></br>
   Designation<br></br>
   Email id</p>
   </Paper>
</div>
 );
}
}
export default AgendaDetails;
