import React, { useEffect, useRef } from 'react'
import './AnimationResume.css'

function LaptopAnim(props) {

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
            <g id="Laptop">
            <g id="BackSquares">
            <path id="BackSquares1" d="M18.141 36V0H36.282V36H18.141ZM0 72V36H18.141V72H0Z" fill="#191a2c"/>
            <path id="BackSquares2" d="M54.4229 36V0H72.5638V36H54.4229ZM36.2819 72V36H54.4229V72H36.2819Z" fill="#191a2c"/>
            </g>
            <path ref={RelevantIconRef} id="RelevantIcon" fill="" stroke={props.colorChange} strokeWidth={2} d="M83 56.7274V22.464C83 20.5543 81.4301 19 79.5 19H32.5C30.5699 19 29 20.5543 29 22.464V56.7275H24V58.819L27.2 63H84.8L88 58.819V56.7275H83V56.7274ZM33 22.9478H78.9999V56.7274H33V22.9478Z"/>
            </g>
            </svg>
          </div>
      </>
  )
}

export default LaptopAnim