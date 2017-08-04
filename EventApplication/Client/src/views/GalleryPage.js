import React,{Component} from 'react';
import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

class GalleryPage extends React.Component{

	render(){
		return(
      <div>
			<Gallery />
			<Layout/>
			</div>
			);
	}
};

export default GalleryPage;
