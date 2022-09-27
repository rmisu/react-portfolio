import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.name);
  }, [currentSection]);

  return (
    <header className="flex-row px-1">  
      <a href="/" className="">Home</a>
      <nav>
        <ul className="flex-row">
          {sections.map((section) => (
            <li className={`mx-1 ${currentSection.name === section.name && `navActive`}`}
              key={section.name}>
              <span onClick={() => {
                setCurrentSection(section);
              }}
              >
                {capitalizeFirstLetter(section.name)}
              </span>
          </li>
          ))}
        </ul>
    </nav>
  </header>
)}

export default Nav;
