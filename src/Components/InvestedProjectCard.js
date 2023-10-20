
import React from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../Styles/InvestedProjectCard.css';
import {Link} from 'react-router-dom';

function InvestedProjectCard({ project }) {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    console.log(project.id);
    navigate(`/investedprojectdetails/${project.id}`);
  };

  return (
    <div className='projectCard2'>
      <img src={project.image} alt="Project Image" /> 
      <div className='user_handle'>{project.name}</div>
      <div className='projectCategory'>{project.category}</div>
      <div className='projectGoal'>{project.goal}</div>
      <div className='extradiv'>
        <button className='button' onClick={() => handleButtonClick()}>
          View Project Details
        </button>
      </div>
    </div>
  );
}

export default InvestedProjectCard;