import React,{Component} from 'react';
import Layout from '../components/Layout';
import CreateEventt from '../components/CreateEventt';

class CreateEventtPage extends React.Component{

	render(){
		return(
      <div>
			<CreateEventt />
			<Layout/>
			</div>
			);
	}
};

export default CreateEventtPage;
