import React from 'react';
import img from '../../img/LinkedIn_Picture.jpg';
// when I remove this css tag, css stops working
import css from '../../css/styles.css'

export default function About() {
  return (
    <div className='row backgroundColor'>

    <div className='col'>
      <img alt='A image of me"' className='ProfileImage' id="A image of me"src={img}/>
    </div>
    <div className='col'>
      <h1 className='fs-1 fw-bold AboutMe-padding AboutMe-text'>Hello! <br></br> I'm Sebastian.</h1>
      <p className='AboutMe-text'>
        I'm a beginner programer from the Univserity of Toronto, <br></br>
        with a certificate in full stack webdesign from the univserity of toronto.<br></br>
        During my time  at the  University of Toronto I learned a large arry of programming skills,<br></br>
        including HTML, Css, Javascript, Node Js, Express, Mysql, MongoDb and react.
      </p>
    </div>

    </div>
  );
}