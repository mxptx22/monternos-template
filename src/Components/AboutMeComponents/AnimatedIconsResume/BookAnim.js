import React, { useEffect, useRef } from 'react'
import './AnimationResume.css'

function BookAnim(props) {

  const RelevantIconRef = useRef('')

    useEffect(() => {
        let length = RelevantIconRef.current.getTotalLength()
        console.log(length)
        // Clear any previous transition
        RelevantIconRef.current.style.transition = 'none';
        // Set up the starting positions
        RelevantIconRef.current.style.strokeDasharray = length + ' ' + length;
        RelevantIconRef.current.style.strokeDashoffset = length;
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        RelevantIconRef.current.getBoundingClientRect();
        // Define our transition
        RelevantIconRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out';
        // Go!
        RelevantIconRef.current.style.strokeDashoffset = '0';

    }, [])

  return (
      <>
          <div className='animation-container'>
            <svg width="100%" height="" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Book">
            <g id="BackSquares">
            <path id="BackSquares1" d="M18.141 36V0H36.282V36H18.141ZM0 72V36H18.141V72H0Z" fill="#191a2c"/>
            <path id="BackSquares2" d="M54.4229 36V0H72.5638V36H54.4229ZM36.2819 72V36H54.4229V72H36.2819Z" fill="#191a2c"/>
            </g>
            <path ref={RelevantIconRef} id="RelevantIcon" fill="" stroke={props.colorChange} strokeWidth={2} fill-rule="evenodd" clip-rule="evenodd" d="M81 11.6678C81 10.2031 79.8995 9 78.5598 9H40.39C35.1507 9 31 13.5378 31 19.1349C31 19.1349 31 64.8398 31 64.866C31 69.4038 34.4091 73 38.5598 73H78.4402C79.421 73 80.39 72.3331 80.7608 71.2607C81.1316 70.1884 80.8804 68.9984 80.0311 68.3314C77.866 66.8275 77.7344 63.5321 79.6603 62.0674C80.067 61.6228 80.988 60.7074 80.9163 59.3997C80.9761 59.1904 81 11.6678 81 11.6678ZM35.8804 64.866C35.8804 63.2705 37.1005 62.0674 38.5598 62.0674H73.6914C72.6148 64.029 72.8421 66.3306 73.6914 67.6645H38.5598C37.1005 67.6645 35.8804 66.4745 35.8804 64.866ZM76.1316 56.7319H38.5718C37.6268 56.7319 36.7297 56.9281 35.8923 57.2812V19.1349C35.8923 16.4671 37.9617 14.3355 40.4019 14.3355H76.1435V56.7319H76.1316Z"/>
            </g>
            </svg>
          </div>
      </>
  )
}

export default BookAnim