import { useState, useEffect } from 'react';

function Slider() {
  <div classNameName=''>
    <template>
      <div className='flex justify-end items-center space-x-2'>
        <label
          for='toggle'
          className='w-10 h-6 flex items-center rounded-full p-1 cursor-pointer duration-300 ease-in-out'
          className={store.darkMode === false ? 'bg-gray-200' : 'bg-white'}
        >
          <div
            className='toggle-dot w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out flex items-center justify-center'
            className={store.darkMode === false ? '' : 'translate-x-3 bg-black'}
          >
            <i
              v-if='store.darkMode === false'
              className='fa-solid fa-sun text-yellow-200'
            ></i>
            <i
              v-if='store.darkMode === true'
              className='fa-solid fa-moon text-white'
            ></i>
          </div>
        </label>
        <input
          id='toggle'
          type='checkbox'
          className='hidden'
          onClick={toggleToggle}
        />
      </div>
    </template>
  </div>;
}

export default Slider;
