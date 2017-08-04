import React,{Component} from 'react';
import Layout from '../components/Layout';
import MySchedule from '../components/MySchedule';

class MySchedulePage extends React.Component{

	render(){
		return(
      <div>
			<MySchedule />
			<Layout/>
			</div>
			);
	}
};

export default MySchedulePage;
