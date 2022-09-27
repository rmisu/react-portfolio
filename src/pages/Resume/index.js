import React from 'react';
import resumeLink from "../../assets/resume/Resume.pdf";

function Resume() {
    return(
        <section className='card'>
            <span className='icon'> List of Proficiencies <a href={resumeLink} download> </a> </span>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>MySql</li>
                <li>MongoDb</li>
                <li>NoSql</li>
            </ul>
            <br/>
            <span className='icon'> Resume <a href={resumeLink} download> Download </a> </span>
        </section>
    );
}


export default Resume;