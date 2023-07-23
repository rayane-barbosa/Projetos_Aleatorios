import React from 'react';
import NavBar from './components/navBar/navbar';

function App() {
  const navItems = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    {label: 'Tech Stack', url: '/techstack'},
    {label: 'Projects', url: '/projects'},
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar items={navItems} />
    </div>
  );
}

export default App;
