import React,{Component} from 'react';
import Layout from '../components/Layout';
import AgendaList from '../components/AgendaList';
class AgendaPage extends React.Component{

	render(){
		return(
      <div>
			<AgendaList />
			<Layout/>
			</div>
			);
	}
};

export default AgendaPage;
