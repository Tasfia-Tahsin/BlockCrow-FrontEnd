import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import projects from '../Components/DummyDataBlog';
import '../Styles/Blog.css'

function Blog() {
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
        <div className='Blog'>
        <img className='image' src="https://assets-global.website-files.com/60118ca1c2eab61d24bcf151/61b1eb37cbc2a4493e78fb60_xgTPOO6q4vd_3iJ1lK-jBs4f6mzgnm4M-05LDpZZj1kVFhHa0KnzL162aWeQAeu6-YMJgVfqj2jOzy8s_xf1Tto5yNmE12f0UXrE8SqEMioHsXe2jfJkzKNcicnG6JwkeHXNcIzy.png" alt='image'/>
        <div className='content'>
           <h3>Why build on Celo?</h3>
           <p className='text'>In the world of blockchain and cryptocurrency, there are many choices to consider before developers start working on a project. For our project, we decided to go with Celo, and we'd like to share with you why we made this choice.
Mobile-Friendly
One of the things we love about Celo is that it's designed with mobile phones in mind. In 2022 alone, 1.23bn smartphones were shipped with worldwide penetration reaching 68% of the global population. Celo promotes that they believe in making blockchain technology accessible to everyone, especially in places where traditional banking isn't easy to come by. We share the same goal and would like to contribute towards greater adoption of blockchain technology among mobile users.

</p>
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Blog;
