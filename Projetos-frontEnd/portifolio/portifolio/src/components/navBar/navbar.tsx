import React from 'react';

interface NavBarItem {
  label: string;
  url: string;
}

interface NavBarProps {
  items: NavBarItem[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <nav>
      <ul className='navBar-list'>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.url}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
