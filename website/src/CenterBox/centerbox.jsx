import React, { Component } from 'react';
import './centerbox.css';

import codebase from './codebase.PNG';
import binarytree from './binarytree.PNG';
import portal from './portal.PNG';
class CenterBox extends Component {


  
  render() {
    return (
     <div className = "centerbox">
    
            <button className = "image" id="abtme">about me</button>
            <div className = "image-content">Hello, my name is Andrew and I'm a second year at UC Berkeley studying computer science.</div>
            <button className = "image image2" id="exp">experience</button>
              <img src={codebase}></img>
            <div className = "image-content">Phasellus lobortis sem magna, nec venenatis est varius et. Morbi scelerisque, ante vitae commodo rhoncus, ipsum turpis elementum ipsum, et lacinia quam arcu quis risus. Sed ut luctus sapien, efficitur ultricies sapien. Duis ultricies imperdiet enim, accumsan varius turpis placerat id. Curabitur ut orci pretium, varius est eget, mattis libero. Vestibulum non nibh ante. Aliquam at dapibus quam. Curabitur sollicitudin nibh dolor, sed porttitor libero lacinia vitae.</div>
            <button className = "image image3" id="proj">projects</button>
              <img src={binarytree}></img>
            <div className = "image-content">Created an interactive binary search tree visualizer to teach students to understand algorithms.</div>
            <img src = {portal}></img>
            <div className = "image-content">Creating and implementing a student-teacher portal that tracks student's progress for Ygnacio Valley High School.</div>




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

