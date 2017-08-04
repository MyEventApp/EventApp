import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import Menu,{MenuItem} from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Home from '../images/Home.png';
import Notifications from '../images/Notification.png';
import Profile from '../images/Profile.png';
import '../css/style.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles=
{
    header:{
        background: 'black',
        textAlign: 'center',
        marginTop: '-10px',
        height: '57px',
    },
    footer:{
      background: '#424242',
      textAlign: 'center',
      height: '50px',
    },
    menus:{
      color:'#c5c6c7',
    }
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
   render() {
   return (
     <div>
     <header className="header">
       <AppBar style={styles.header} title="AppName" onLeftIconButtonTouchTap={this.handleToggle}>
       </AppBar>
     </header>
     <footer className="footer">
      <AppBar style={styles.footer} title={<Link to ='/profile'><img src={Profile}
      style={{width:'45px',marginBottom:'16px'}} /></Link>}
      iconElementLeft={<Link to ='/'><img src={Home} style={{width:'45px',marginTop:'-5px'}} /></Link>}
      iconElementRight={<img src={Notifications}  style={{width:'45px',marginTop:'-5px'}} />}>
      </AppBar>
     </footer>
     <div >
      <Drawer
         docked={false}
         width={200}
         open={this.state.open}
         onRequestChange={(open) => this.setState({open})}
         containerStyle={{backgroundColor:'#333132'}} >
         <Menu>
         <Link to='/'>
         <MenuItem onTouchTap={this.handleClose} style={styles.menus}>Home</MenuItem><Divider style={{backgroundColor:'black'}}/>
         </Link>
         <Link to='/createevent'>
         <MenuItem onTouchTap={this.handleClose} style={styles.menus}>Create Event</MenuItem><Divider style={{backgroundColor:'black'}} />
         </Link>
         <Link to='/myevents'>
         <MenuItem onTouchTap={this.handleClose} style={styles.menus}>My Events</MenuItem><Divider style={{backgroundColor:'black'}} />
         </Link>
         <Link to='/schedule'>
         <MenuItem onTouchTap={this.handleClose} style={styles.menus}>My Schedules</MenuItem><Divider style={{backgroundColor:'black'}} />
         </Link>
         <MenuItem onTouchTap={this.handleClose} style={styles.menus}>My Notes</MenuItem><Divider style={{backgroundColor:'black'}} />
         </Menu>
      </Drawer>
     </div>
     </div>
      );
 }
}
export default Layout;
