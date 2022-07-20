import React from 'react';
import img1 from '../../img/goldDevs.png';
import img2 from '../../img/zelda.jpg'
import img3 from '../../img/jade.png'

export default function Portfolio() {
  return (
    <div className='backgroundColor'>
      <div className='row'>

        <div className='col'>
          <a href="https://protected-peak-08029.herokuapp.com/"><img className='portfolioImage ' id="A image of me"src={img1}/></a>
          <a href="https://ydennekrf.github.io/Node-Aero/"><img className='portfolioImage ' id="A image of me"src={img2}/></a>
        </div>

        <div className='col'>
            <a href="https://mighty-hamlet-13053.herokuapp.com/"><img className='portfolioImage ' id="A image of me"src={img3}/></a>
            
        </div>

      </div>
    </div>
  );
}