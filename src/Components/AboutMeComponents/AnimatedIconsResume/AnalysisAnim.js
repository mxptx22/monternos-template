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
        RelevantIconRef.current.style.transition = 'stroke-dashoffset 1.6s ease-in-out';
        // Go!
        RelevantIconRef.current.style.strokeDashoffset = '0';

    }, [])

  return (
      <>
          <div className='animation-container'>
            <svg width="100%" height="" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Analysis">
            <g id="BackSquares">
            <path id="BackSquares1" d="M18.141 36V0H36.282V36H18.141ZM0 72V36H18.141V72H0Z" fill="#191a2c"/>
            <path id="BackSquares2" d="M54.4229 36V0H72.5638V36H54.4229ZM36.2819 72V36H54.4229V72H36.2819Z" fill="#191a2c"/>
            </g>
            <path ref={RelevantIconRef} id="RelevantIcon" fill="" stroke={props.colorChange} strokeWidth={2} d="M87.054 25.0341C86.7567 24.7064 86.403 24.4463 86.0132 24.2689C85.6235 24.0914 85.2055 24 84.7833 24C84.3611 24 83.9431 24.0914 83.5534 24.2689C83.1637 24.4463 82.8099 24.7064 82.5126 25.0341L62.3963 47.0586L48.6762 32.026C48.3789 31.6983 48.0252 31.4382 47.6355 31.2608C47.2458 31.0833 46.8278 30.9919 46.4056 30.9919C45.9834 30.9919 45.5654 31.0833 45.1756 31.2608C44.7859 31.4382 44.4322 31.6983 44.1349 32.026L24.946 53.0017C24.6462 53.3267 24.4083 53.7133 24.246 54.1393C24.0836 54.5653 24 55.0223 24 55.4838C24 55.9453 24.0836 56.4022 24.246 56.8282C24.4083 57.2543 24.6462 57.6409 24.946 57.9659C25.2433 58.2936 25.597 58.5537 25.9868 58.7311C26.3765 58.9086 26.7945 59 27.2167 59C27.6389 59 28.0569 58.9086 28.4466 58.7311C28.8363 58.5537 29.1901 58.2936 29.4874 57.9659L46.4056 39.4374L60.1256 54.47C60.4229 54.7976 60.7766 55.0577 61.1664 55.2352C61.5561 55.4127 61.9741 55.5041 62.3963 55.5041C62.8185 55.5041 63.2365 55.4127 63.6262 55.2352C64.0159 55.0577 64.3697 54.7976 64.667 54.47L87.054 29.9983C87.3537 29.6733 87.5917 29.2867 87.754 28.8607C87.9164 28.4347 88 27.9777 88 27.5162C88 27.0547 87.9164 26.5978 87.754 26.1718C87.5917 25.7457 87.3537 25.3591 87.054 25.0341V25.0341Z"/>
            </g>
            </svg>
          </div>
      </>
  )
}

export default BookAnim