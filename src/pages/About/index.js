import React from 'react';
import coverPicture from "../../assets/cover/cover.jpg";
function About() {
  return (
    <section className="my-5">
      <div className="card">
      <img src={coverPicture} className="my-2" style={{ width: "15%" }} alt="cover" />
      <h1 className="my-2">About Me</h1>
        <p>
          Welcome to my online portfolio! My name is Ryan Rogers and I am a junior developer capable in full stack development. 
          A shortlist of the skills I have are at my disposal are: javascript, MySQL, Nodejs, Express, Bootstrap, React, and more. This
          list is ever growing, for a holistic list please check the porfolio section!
        </p>
      </div>
    </section>
  );
}

export default About;
