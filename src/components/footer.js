import React from 'react';
import img1 from '../img/GitHub-Mark.png';
import img2 from '../img/linkedin_Mark.png';

function Footer() {
    return (
      <div className='backgroundColor'>
        <a href="https://github.com/sw33ws"><img alt='Github logo' className='FooterLogo FooterGithub' src={img1}/></a>
        <a href="www.linkedin.com/in/sebastian-gillis-995696239"><img alt='Github logo' className='FooterLogo FooterLinkedin' src={img2}/></a>
      </div>
    );
  }

export default Footer;