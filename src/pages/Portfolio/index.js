import React from 'react';
import ProjectList from '../../components/Projects';


function Portfolio(props) {
  const { currentTab } = props;
  return (
    <section>
    <div className='card'>
      <h1>Project List</h1>
      
     <p >Project {currentTab.url} </p>
   
      <ProjectList project={currentTab.name} />
    </div>   
    </section>
  );
}
export default Portfolio;