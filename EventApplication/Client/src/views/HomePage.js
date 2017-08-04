import React,{Component} from 'react';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';
import $ from 'jquery';

class HomePage extends React.Component{
	state={
		eventData:[]
	};

	getData = () => {
		$.ajax({
			url:'/home',
			type:'GET',
			datatype:'JSON',
			success:function(data)
			{
				this.setState({eventData:data});
				console.log(data);
			}.bind(this)
		});
	}
	componentDidMount = () =>{
		this.getData();
	}


	render(){
		return(
      <div>
			<LandingPage eventData={this.state.eventData}/>
			<Layout/>
			</div>
			);
	}
};

export default HomePage;
