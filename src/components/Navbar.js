import { useState } from 'react';

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem)('darkMode')
  );

  const setDarkModeToggle = () => {
    if (darkMode === true) {
      setDarkMode(localStorage.setItem('darkMode', true));
    }
    if (darkMode === false) {
      setDarkMode(localStorage.setItem('darkMode', false));
    }
  };
  return (
    <div className='Navbar h-screen w-screen'>
      <div className={darkMode === true ? 'dark' : ''}></div>
    </div>
  );
}

export default Navbar;
