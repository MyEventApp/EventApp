import React,{Component} from 'react';
import Layout from '../components/Layout';
import CreateEvent from '../components/CreateEvent';

class CreateEventPage extends React.Component{

	render(){
		return(
      <div>
			<CreateEvent />
			<Layout/>
			</div>
			);
	}
};

export default CreateEventPage;
