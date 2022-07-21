import React from 'react';
import img1 from '../img/GitHub-Mark.png';

function Footer() {
    return (
      <div className='backgroundColor'>
        <a href="https://github.com/sw33ws"><img alt='Github logo' className='FooterLogo' src={img1}/></a>
      </div>
    );
  }

export default Footer;