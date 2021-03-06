import React from 'react';
import { BsGithub, BsLinkedin,BsWhatsapp} from 'react-icons/bs';
import { FaMailBulk } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social" style={{position:'fixed',bottom: '5%',left: '0',zIndex:2}}>
    <a href='https://wa.link/h2atj2' target={'_blank'} rel="noopener noreferrer">
      <div>
        <BsWhatsapp />
      </div>
     </a>
     <a href="mailto:henriquebritos@hotmail.com" target={'_blank'} rel="noopener noreferrer">
      <div>
        <FaMailBulk />
      </div>
     </a>
    <a href='https://github.com/henriquemeca' target={'_blank'} rel="noopener noreferrer">
      <div>
        <BsGithub />
      </div>
     </a>
    <a href='https://www.linkedin.com/in/henriquebritosilva/' target={'_blank'} rel="noopener noreferrer">
      <div>
       <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
