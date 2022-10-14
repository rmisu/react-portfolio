import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    tabs = [],
    setCurrentTab,
    currentTab,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentTab.name);
  }, [currentTab]);

  return (
    <header className="flex-row px-1">  
      <a href="https://rmisu.github.io/react-portfolio/" className="">Home</a>
      <nav>
        <ul className="flex-row">
          {tabs.map((tab) => (
            <li className={`mx-1 ${currentTab.name === tab.name && `navActive`}`}
              key={tab.name}>
              <span onClick={() => {
                setCurrentTab(tab);
              }}
              >
                {capitalizeFirstLetter(tab.name)}
              </span>
          </li>
          ))}
        </ul>
    </nav>
  </header>
)}

export default Nav;
