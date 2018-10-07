import React, { Component } from 'react';
import './centerbox.css';
import toysrus from './toysrus.png';
import livewell from './LiveWell.png';
import biomass from './biomass.png';
class CenterBox extends Component {


  
  render() {
    return (
     <div className = "centerbox">
    
            <button className = "image" id="abtme">about me</button>
            <div className = "image-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend placerat porttitor. Donec fermentum fringilla mauris vel interdum. Proin fringilla eleifend sodales. Phasellus lobortis sem magna, nec venenatis est varius et. Morbi scelerisque, ante vitae commodo rhoncus, ipsum turpis elementum ipsum, et lacinia quam arcu quis risus. Sed ut luctus sapien, efficitur ultricies sapien. Duis ultricies imperdiet enim, accumsan varius turpis placerat id. Curabitur ut orci pretium, varius est eget, mattis libero. Vestibulum non nibh ante. Aliquam at dapibus quam. Curabitur sollicitudin nibh dolor, sed porttitor libero lacinia vitae.</div>
            <button className = "image image2" id="exp">experience</button>
              <img src={toysrus}></img>
            <div className = "image-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend placerat porttitor. Donec fermentum fringilla mauris vel interdum. Proin fringilla eleifend sodales. Phasellus lobortis sem magna, nec venenatis est varius et. Morbi scelerisque, ante vitae commodo rhoncus, ipsum turpis elementum ipsum, et lacinia quam arcu quis risus. Sed ut luctus sapien, efficitur ultricies sapien. Duis ultricies imperdiet enim, accumsan varius turpis placerat id. Curabitur ut orci pretium, varius est eget, mattis libero. Vestibulum non nibh ante. Aliquam at dapibus quam. Curabitur sollicitudin nibh dolor, sed porttitor libero lacinia vitae.</div>
            <button className = "image image3" id="proj">projects</button>
              <img src={livewell}></img>

            <div className = "image-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend placerat porttitor. Donec fermentum fringilla mauris vel interdum. Proin fringilla eleifend sodales. Phasellus lobortis sem magna, nec venenatis est varius et. Morbi scelerisque, ante vitae commodo rhoncus, ipsum turpis elementum ipsum, et lacinia quam arcu quis risus. Sed ut luctus sapien, efficitur ultricies sapien. Duis ultricies imperdiet enim, accumsan varius turpis placerat id. Curabitur ut orci pretium, varius est eget, mattis libero. Vestibulum non nibh ante. Aliquam at dapibus quam. Curabitur sollicitudin nibh dolor, sed porttitor libero lacinia vitae.</div>
            <button className = "image image4" id='mis'>misc</button>
              <img src = {biomass}></img>
            <div className = "image-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend placerat porttitor. Donec fermentum fringilla mauris vel interdum. Proin fringilla eleifend sodales. Phasellus lobortis sem magna, nec venenatis est varius et. Morbi scelerisque, ante vitae commodo rhoncus, ipsum turpis elementum ipsum, et lacinia quam arcu quis risus. Sed ut luctus sapien, efficitur ultricies sapien. Duis ultricies imperdiet enim, accumsan varius turpis placerat id. Curabitur ut orci pretium, varius est eget, mattis libero. Vestibulum non nibh ante. Aliquam at dapibus quam. Curabitur sollicitudin nibh dolor, sed porttitor libero lacinia vitae.</div>




     </div>

    )
    }




}
var accordion = document.getElementsByClassName("image")

for (var i = 0; i < accordion.length;i++){
  accordion[i].onclick = function () {
    console.log("click");
    var contents = this.nextElementSibling;
    if (contents.style.maxHeight) {
      contents.style.maxHeight = null;
    } else {
      contents.style.maxHeight = contents.scrollHeight + "px";
    }
  }
}





export default CenterBox;

