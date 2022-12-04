import React, { useEffect, useRef } from 'react'
import './AnimationResume.css'

function MicrophoneAnim(props) {

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
                <g id="Microphone">
                <g id="BackSquares">
                <path id="BackSquares1" d="M18.141 36V0H36.282V36H18.141ZM0 72V36H18.141V72H0Z" fill="#191a2c"/>
                <path id="BackSquares2" d="M54.4229 36V0H72.5638V36H54.4229ZM36.2819 72V36H54.4229V72H36.2819Z" fill="#191a2c"/>
                </g>
                <path ref={RelevantIconRef} id="RelevantIcon" fill="" stroke={props.colorChange} strokeWidth={2} d="M56.0065 9C45.5335 9 37 17.6073 37 28.2V41.3004C37 50.9788 44.1242 59.0114 53.3559 60.3045V67.671H47.7445C46.2834 67.671 45.1068 68.8596 45.1068 70.3355C45.1068 71.8114 46.2834 73 47.7445 73H64.2555C65.7166 73 66.8932 71.8114 66.8932 70.3355C66.8932 68.8596 65.7166 67.671 64.2555 67.671H58.6441V60.3045C67.8758 58.9984 75 50.9788 75 41.3004V28.2C75.0129 17.6073 66.4794 9 56.0065 9ZM56.0065 55.1584C50.4855 55.1584 45.7145 51.8539 43.5424 47.0865H49.3736C50.8346 47.0865 52.0112 45.898 52.0112 44.422C52.0112 42.9461 50.8346 41.7575 49.3736 41.7575H42.2882C42.2882 41.6008 42.2753 37.4082 42.2753 37.4082H49.3607C50.8217 37.4082 51.9983 36.2196 51.9983 34.7437C51.9983 33.2678 50.8217 32.0792 49.3607 32.0792H42.2753C42.2753 32.0792 42.2753 27.8865 42.2882 27.7298H49.3736C50.8346 27.7298 52.0112 26.5412 52.0112 25.0653C52.0112 23.5894 50.8346 22.4008 49.3736 22.4008H43.5424C45.7145 17.6465 50.4855 14.329 56.0065 14.329C61.5274 14.329 66.2984 17.6335 68.4706 22.4008H62.6393C61.1783 22.4008 60.0017 23.5894 60.0017 25.0653C60.0017 26.5412 61.1783 27.7298 62.6393 27.7298H69.7247C69.7247 27.8865 69.7377 32.0792 69.7377 32.0792H62.6523C61.1912 32.0792 60.0146 33.2678 60.0146 34.7437C60.0146 36.2196 61.1912 37.4082 62.6523 37.4082H69.7377C69.7377 37.4082 69.7377 41.6008 69.7247 41.7575H62.6393C61.1783 41.7575 60.0017 42.9461 60.0017 44.422C60.0017 45.898 61.1783 47.0865 62.6393 47.0865H68.4706C66.2984 51.8539 61.5274 55.1584 56.0065 55.1584V55.1584Z"/>
                </g>
                </svg>
          </div>
      </>
  )
}

export default MicrophoneAnim