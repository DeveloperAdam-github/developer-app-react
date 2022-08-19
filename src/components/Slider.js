import { useState } from 'react';

function Slider() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(
      localStorage.getItem('darkMode') !== null
        ? JSON.parse(localStorage.getItem('darkMode'))
        : false
    )
  );

  const setDarkModeToggle = () => {
    if (darkMode === true) {
      setDarkMode(localStorage.setItem('darkMode', false));
      document.getElementById('App').classList.remove('dark');
      setDarkMode(false);
    }
    if (darkMode === false) {
      setDarkMode(localStorage.setItem('darkMode', true));
      document.getElementById('App').classList.add('dark');
      setDarkMode(true);
    }
  };

  return (
    <div className='flex justify-end items-center space-x-2'>
      <label
        htmlFor='checkbox'
        className={`w-12 h-7 flex items-center rounded-full p-1 cursor-pointer duration-300 ease-in-out ${
          darkMode === false ? 'bg-gray-200' : 'bg-white'
        }`}
      >
        <div
          className={`toggle-dot w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center ${
            darkMode === false ? '' : 'translate-x-5 bg-black'
          }
          `}
        >
          <p className={darkMode === false ? 'block text-xl' : 'hidden'}>☀️</p>
          <p className={darkMode === true ? 'block text-xl' : 'hidden'}>🌑</p>
        </div>
      </label>
      <input
        id='checkbox'
        type='checkbox'
        className='hidden'
        onClick={setDarkModeToggle}
        value={darkMode}
      />
    </div>
  );
}

export default Slider;
