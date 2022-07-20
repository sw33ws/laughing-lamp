import React from 'react';
import img from '../../img/LinkedIn_Picture.jpg';
import css from '../../css/styles.css'

export default function About() {
  return (
    <div className='row backgroundColor'>

    <div className='col'>
      <img className='ProfileImage' id="A image of me"src={img}/>
    </div>
    <div className='col'>
      <h1 className='fs-1 fw-bold AboutMe-padding AboutMe-text'>Hello! <br></br> I'm Sebastian.</h1>
      <p className='AboutMe-text'>
      I'm a beginner programer from the univserity of toronto.<br></br> I've spend three months learning verious programing skills including <br></br>HTML, Css, Javascript, Node Js, Express, Mysql, MongoDb and react.
      </p>
    </div>

    </div>
  );
}