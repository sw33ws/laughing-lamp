import React from 'react';
import img1 from '../../img/goldDevs.png';
import img2 from '../../img/zelda.jpg';
import img3 from '../../img/jade.png';
import img4 from '../../img/weatherApp.png';
import img5 from '../../img/logo.png.png'

export default function Portfolio() {
  return (
    <div className='backgroundColor'>
      <div className='row'>

        <div className='col'>
          <a href="https://protected-peak-08029.herokuapp.com/"><img alt='A freelance website for web designers' className='portfolioImage ' id="A image of me"src={img1}/></a>
          <a href="https://ydennekrf.github.io/Node-Aero/"><img alt='Zelda Travel Companion' className='portfolioImage ' id="A image of me"src={img2}/></a>
          <a href="https://gitcommitheroku.herokuapp.com/"><img alt='Zelda Travel Companion' className='portfolioImage ' id="A image of me"src={img5}/></a>
        </div>

        <div className='col'>
            <a href="https://mighty-hamlet-13053.herokuapp.com/"><img alt='A text editor that can be used at any time' className='portfolioImage ' id="A image of me"src={img3}/></a>
            <a href="https://sw33ws.github.io/jubilant-memory/"><img alt='A weather app' className='portfolioImage ' id="A image of me"src={img4}/></a>
        </div>

      </div>
    </div>
  );
}