import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import backbutton from '../images/back-button.png';
import Img1 from '../images/eventt-image1.png';
import Img2 from '../images/eventt-image2.png';
import Img3 from '../images/eventt-image3.png';
import Img4 from '../images/eventt-image4.png';
import '../css/style.css';

class Gallery extends Component  {
  handleImg = () =>{
    var img = document.getElementById('myImg');
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

     modal.style.display = "block";
     modalImg.src = img.src;
     captionText.innerHTML = img.alt;
  };
  handleSpan = () =>{
    var span =document.getElementsByClassName("close")[0];
    span.style.display='none';
    document.getElementById('myModal').style.display='none';
  };

render() {
return (
  <div>
  <img id="myImg" src={Img1} alt="LogoLaunch" width="300" height="200" onClick={this.handleImg} />
<div id="myModal" className="modal">
 <span className="close" onClick={this.handleSpan} >&times;</span>
 <img className="modal-content" id="img01" />
 <div id="caption"></div>
</div>
</div>
);
}
}
export default Gallery;
