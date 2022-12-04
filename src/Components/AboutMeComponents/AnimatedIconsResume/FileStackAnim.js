import React, { useEffect, useRef } from 'react'
import './AnimationResume.css'

function FileStackAnim(props) {

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
        <g id="Filestack">
        <g id="BackSquares">
        <path id="BackSquares1" d="M18.141 36V0H36.282V36H18.141ZM0 72V36H18.141V72H0Z" fill="#191a2c"/>
        <path id="BackSquares2" d="M54.4229 36V0H72.5638V36H54.4229ZM36.2819 72V36H54.4229V72H36.2819Z" fill="#191a2c"/>
        </g>
        <g id="Layer 100">

        <path ref={RelevantIconRef} id="Vector" fill="" stroke={props.colorChange} strokeWidth={2} d="M76.3172 17.3934H69.4976V10.5738C69.4976 9.70466 68.7931 9 67.9238 9H31.5738C30.7044 9 30 9.70466 30 10.5738V63.0328C30 63.9019 30.7044 64.6066 31.5738 64.6066H38.3934V71.4262C38.3934 72.2953 39.0979 73 39.9672 73H76.317C77.1864 73 77.8908 72.2953 77.8908 71.4262V18.9672C77.891 18.0981 77.1866 17.3934 76.3172 17.3934ZM33.1475 61.459V12.1475H66.3498C66.3498 13.8995 66.3498 59.6379 66.3498 61.459C65.1837 61.459 35.3044 61.459 33.1475 61.459ZM74.7435 69.8525H41.541V64.6066H67.9236C68.7929 64.6066 69.4974 63.9019 69.4974 63.0328V20.541H74.7433L74.7435 69.8525Z"/>
        </g>
        </g>
        </svg>
        
          </div>
      </>
  )
}

export default FileStackAnim