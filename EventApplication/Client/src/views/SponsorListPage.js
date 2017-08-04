import React,{Component} from 'react';
import Layout from '../components/Layout';
import SponsorList from '../components/SponsorList';

class SponsorListPage extends React.Component{

	render(){
		return(
      <div>
			<SponsorList />
			<Layout/>
			</div>
			);
	}
};

export default SponsorListPage;
