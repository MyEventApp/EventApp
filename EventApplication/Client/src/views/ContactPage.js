import React,{Component} from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

class ContactPage extends React.Component{

	render(){
		return(
      <div>
			<Contact />
			<Layout/>
			</div>
			);
	}
};

export default ContactPage;
