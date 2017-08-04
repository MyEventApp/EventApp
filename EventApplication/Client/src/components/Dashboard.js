  import React, { Component} from 'react';
  import {Link} from 'react-router-dom';
  import {Card, CardMedia, CardText} from 'material-ui/Card';
  import Paper from 'material-ui/Paper';
  import IconButton from 'material-ui/IconButton';
  import img1 from '../images/bg-slide-01.jpg';
  import img2 from '../images/eventt-image2.png';
  import img3 from '../images/eventt-image3.png';
  import img4 from '../images/eventt-image4.png';
  import img5 from '../images/download.jpg';
  import calendar from '../images/calender.png';
  import location from '../images/location.png';
  import '../css/style.css';

  const styles={
    paper:{
        background:'#E0E0E0',
        height: '100%',
        border:'1px solid',
        //marginTop:'11px',
        marginBottom:'11px',
        // borderRadius: '13px',
        borderColor:'#BDC3C7',
    },
    content:{
      marginLeft:'6px',
    },
    dashboard:{
      marginTop: '70px',
    }
  };

  class Dashboard extends Component  {
    render() {

    return (
    <div className='col-xs-12' style={styles.dashboard}>
    <Link to='/details'>
    <div>
    <Paper zDepth={1} rounded={true} style={styles.paper}>
    <div className='row'>
    <div className='col-xs-8'>
    <p style={styles.content}><strong>Name</strong></p>
    <p><img src={calendar} style={{width:'12%'}}/>Date</p>
    <p><img src={location} style={{width:'12%'}}/>id</p>
    </div>
    <div className='col-xs-4'>
     <img src={img2} alt="image not found" style={{height:'100%',width:'100%', padding:'2px'}}/>
   </div>
   </div>
   </Paper>
   </div>

</Link>

   </div>
  );
  }
  }
  export default Dashboard;
