import React from 'react';
import ProjectList from '../../components/Projects';


function Portfolio(props) {
  const { currentSection } = props;
  return (
    <section>
    <div className='card'>
      <h1>Project List</h1>
      
     <p >{currentSection.url} </p>
   
     
      <ProjectList project={currentSection.name} />
    </div>   
    </section>
  );
}
export default Portfolio;