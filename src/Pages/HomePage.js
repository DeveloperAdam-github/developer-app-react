import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group'
import './HomePage.css'

const HomePage = () => {

const [titleShow, setTitleShow] = useState(true)
const [titleShowFully, setTitleShowFully] = useState(true)
const [messageShow, setMessageShow] = useState(false)
const [messageFullyShow, setMessageFullyShow] = useState(false)
const [buttonShow, setButtonShow] = useState(false)

useEffect(() => {
  setTimeout(() => {
   setTitleShow(false)
  }, 3600);
  setTimeout(() => {
    setTitleShowFully(false)
   }, 4000);
  setTimeout(() => {
    setMessageShow(true)
  }, 4500);
  setTimeout(() => {
    setMessageFullyShow(true)
  }, 6000);
  setTimeout(() => {
    setMessageShow(false)
  }, 8600);
  setTimeout(() => {
    setMessageFullyShow(false)
    setButtonShow(true)
  }, 9300);
}, []);

const duration = 1000;

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0.5 },
  exited:  { opacity: 0 },
};

  return (
    <div className='h-[90vh] justify-center dark:text-white text-black items-center pb-14 flex'>
 {titleShowFully && (
      <CSSTransition in={titleShow} timeout={duration} classNames="fade">
        <h1  className='font-boldHeadline text-xl' classNames="fade">DeveloperApp</h1>
      </CSSTransition>  
 )}
  {messageFullyShow && (
    <CSSTransition in={messageShow} timeout={duration} classNames="fade">
        <h1 className=' font-boldHeadline text-xl'>Let's get started</h1>
    </CSSTransition>
  )}

{buttonShow && (
    <CSSTransition in={buttonShow} timeout={duration} classNames="fade">
      <div className="flex flex-col">
       <button className="bg-blue-500 py-1 px-2 text-lg rounded-md m-2 font-boldHeadline">Sign In</button>
       <button className="bg-blue-500 py-1 px-2 text-lg rounded-md m-2 font-boldHeadline">Register</button>
      </div>
    </CSSTransition>
  )}
    </div>
  );
};

export default HomePage;
