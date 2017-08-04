import React,{Component} from 'react';
import Layout from '../components/Layout';
import InviteeList from '../components/InviteeList';

class InviteePage extends React.Component{

	render(){
		return(
      <div>
			<InviteeList />
			<Layout/>
			</div>
			);
	}
};

export default InviteePage;
