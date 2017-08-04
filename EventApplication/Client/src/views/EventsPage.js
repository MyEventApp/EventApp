import React,{Component} from 'react';
import Layout from '../components/Layout';
import EventDetails from '../components/EventDetails';

class EventsPage extends React.Component{

	render(){
		return(
      <div>
			<EventDetails />
			<Layout/>
			</div>

			);
	}
};

export default EventsPage;
