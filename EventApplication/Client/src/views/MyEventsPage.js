import React,{Component} from 'react';
import Layout from '../components/Layout';
import MyEvents from '../components/MyEvents';

class MyEventsPage extends React.Component{

	render(){
		return(
      <div>
			<MyEvents />
			<Layout/>
			</div>
			);
	}
};

export default MyEventsPage;
