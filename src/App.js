import { useState } from 'react';

function App() {
  // const [darkMode, setDarkMode] = useState(
  //   JSON.parse(localStorage.getItem)('darkMode')
  // );

  // const setDarkModeToggle = () => {
  //   if (darkMode === true) {
  //    setDarkMode(true)
  //   }
  //   if (darkMode === false) {
  //     setDarkMode = false;
  //   }
  // };
  return (
    <div className='App h-screen w-screen'>
      <div className={darkMode === true ? 'dark' : ''}></div>
    </div>
  );
}

export default App;
