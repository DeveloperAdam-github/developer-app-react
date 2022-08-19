import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  const [isDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')));
  useEffect(() => {}, []);
  return (
    <div className={`App h-screen w-screen ${isDarkMode === true ? 'dark' : ''} `} id='App'>
      <div className='h-full w-full dark:bg-black bg-white'>
        <Navbar />
        <Routes>
          <Route  path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
