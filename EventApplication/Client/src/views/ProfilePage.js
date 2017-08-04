import React,{Component} from 'react';
import Layout from '../components/Layout';
import Profile from '../components/Profile';

class ProfilePage extends React.Component{
	render(){
		return(
      <div>
			<Profile />
			<Layout/>
			</div>
			);
	}
};

export default ProfilePage;
