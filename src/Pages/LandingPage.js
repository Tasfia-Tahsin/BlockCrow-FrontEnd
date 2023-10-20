import React from 'react';
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.css'
import Logo from '../Illustrations/food crowd.png';

function LandingPage() {
  return (
    <div className='landing-page'>
      <Navbar/>
      <div className='asd'>
        <img className='imagediv' src='https://www.thestatesman.com/wp-content/uploads/2020/05/farmer.jpg' alt='image'/>
        <div className='projectName'>
          <img className='imagediv2' src={Logo} alt='image'/>
        </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
