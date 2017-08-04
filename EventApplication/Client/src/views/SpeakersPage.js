import React,{Component} from 'react';
import Layout from '../components/Layout';
import Speakers from '../components/Speakers';

class SpeakersPage extends React.Component{

	render(){
		return(
      <div>
			<Speakers />
			<Layout/>
			</div>
			);
	}
};

export default SpeakersPage;
