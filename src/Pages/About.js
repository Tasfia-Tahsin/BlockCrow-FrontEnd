import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import projects from '../Components/DummyDataBlog';
import '../Styles/About.css'

function About() {
  const { projectId } = useParams();
  //const projectId = 111; 
  const navigate = useNavigate();
  console.log(projectId);

  const project = projects.find((project) => project.id === projectId);
  const handleButtonClick = () => {
    navigate("/investform");
  };
  return (
    <div className='landing-page'>
      <Navbar />
      <div className='center'>
        <div className='About'>
        <img className='image' src="https://c0.wallpaperflare.com/preview/154/907/657/paddy-field-paddy-crop-agriculture-paddy.jpg" alt='image'/>
        <div className='content'>
           <h3>Blockchain based crowdfunding platform for innovative food ventures</h3>
           <p className='text'>One major issue in Bangladesh and other South Asian countries is the lack of access to funding for farmers. Often, farmers face difficulty getting loans. Farmers also have to bear all the losses if the crops are destroyed in natural disasters. This adversely impacts the livelihood of farmers and exposes them to financial risks even though they are the backbone that feeds us and keeps us alive.

</p>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
