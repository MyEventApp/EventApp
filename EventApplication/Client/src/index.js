import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './views/HomePage';
import EventsPage from './views/EventsPage';
import AgendaPage from './views/AgendaPage';
import MyEventsPage from './views/MyEventsPage';
import AgendaDetailsPage from './views/AgendaDetailsPage';
import ContactPage from './views/ContactPage';
import InviteePage from './views/InviteePage';
import GalleryPage from './views/GalleryPage';
import MySchedulePage from './views/MySchedulePage';
import SponsorListPage from './views/SponsorListPage';
import ProfilePage from './views/ProfilePage';
import SpeakersPage from './views/SpeakersPage';
import CreateEventtPage from './views/CreateEventtPage';
import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import './css/style.css';
import Flex from '../node_modules/flexboxgrid/css/flexboxgrid.css';

class App extends React.Component{
 render(){
   return(<div>
     <MuiThemeProvider>
     <BrowserRouter>
       <div>
       <Route exact path='/' component={LoginPage}/>
         <Route path='/signup' component={SignUpPage}/>
         <Route path='/home' component={HomePage}/>
         <Route path='/details' component={EventsPage}/>
         <Route path='/agendalist' component={AgendaPage}/>
         <Route path='/myevents' component={MyEventsPage}/>
         <Route path='/agendadetails' component={AgendaDetailsPage}/>
         <Route path='/contact' component={ContactPage}/>
         <Route path='/inviteelist' component={InviteePage}/>
         <Route path='/gallery' component={GalleryPage}/>
         <Route path='/schedule' component={MySchedulePage}/>
         <Route path='/sponsorlist' component={SponsorListPage}/>
         <Route path='/profile' component={ProfilePage}/>
         <Route path='/speakers' component={SpeakersPage}/>
         <Route path='/createevent' component={CreateEventtPage}/>
         </div>
         </BrowserRouter>
      </MuiThemeProvider>
   </div>)
 }
};
ReactDOM.render(<App />
, document.getElementById('root'));
