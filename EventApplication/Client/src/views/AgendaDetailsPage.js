import React,{Component} from 'react';
import Layout from '../components/Layout';
import AgendaDetails from '../components/AgendaDetails';

class AgendaDetailsPage extends React.Component{

	render(){
		return(
      <div>
			<AgendaDetails />
			<Layout/>
			</div>
			);
	}
};

export default AgendaDetailsPage;
