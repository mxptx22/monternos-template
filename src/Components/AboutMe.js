import React, { useState } from 'react'
import Education from './AboutMeComponents/Education'
import Experience from './AboutMeComponents/Experience'
import GeneralInfo from './AboutMeComponents/GeneralInfo'

function AboutMe(props) {

  const [generalClass, setGeneralClass] = useState('inline')
  const [educationClass, setEducationClass] = useState('inline-idle')
  const [professionalClass, setProfessionalClass] = useState('inline-idle')

  const setDisplay = (option) => {
    if (option === 'One') {setGeneralClass('inline'); setEducationClass('inline-idle'); setProfessionalClass('inline-idle')}
    if (option === 'Two') {setGeneralClass('inline-idle'); setEducationClass('inline'); setProfessionalClass('inline-idle')}
    if (option === 'Three') {setGeneralClass('inline-idle'); setEducationClass('inline-idle'); setProfessionalClass('inline')}
  }

  return (
    <>
    <div style={{padding:'5vh 0'}}>
        <div> <h1>More About Me</h1></div>
        <div className='animated-content' style={{animationName:props.animation,visibility:props.visibility}}>
        <h2 onClick={()=>{setDisplay('One')}} className={generalClass}>In General</h2> <h2 onClick={()=>{setDisplay('Two')}} className={educationClass}>Education-wise</h2> <h2 onClick={()=>{setDisplay('Three')}} className={professionalClass}>Profesionally</h2>
        <div style={{height:'3vh'}}></div>
        {generalClass === 'inline' && <GeneralInfo />}
        {educationClass === 'inline' && <Education />}
        {professionalClass === 'inline' && <Experience />}
        </div>
    </div>
    </>
  )
}

export default AboutMe