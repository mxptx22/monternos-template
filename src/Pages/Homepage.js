import React, { useRef, useEffect, useState } from 'react'
import AboutMe from '../Components/AboutMe';
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact';


function Homepage(props) {
    const mainRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();

    const [navVisibility, setNavVisibility] = useState('hidden')
    const [navAnimation, setNavAnimation] = useState('')
    const [sec1, setSec1] = useState('navStick-linksStyling navStick-linksStyling-active')
    const [sec2, setSec2] = useState('navStick-linksStyling')
    const [sec3, setSec3] = useState('navStick-linksStyling')
    const [sec4, setSec4] = useState('navStick-linksStyling')
    const [decorParallax, setParallax] = useState()
    const [aboutAnimation, setAboutAnimation] = useState(['hidden',''])
    const [projectsAnimation, setProjectsAnimation] = useState(['hidden',''])
    const [contactAnimation, setContactAnimation] = useState(['hidden',''])

    useEffect(() => {
        
      const halvedWelcome = mainRef.current.offsetTop / 1.75
      const welcomeHeight = mainRef.current.clientHeight
      setParallax(mainRef.current.offsetTop/10)
      const handleScroll = event => {
        if (window.scrollY < welcomeHeight) {
            setParallax((mainRef.current.offsetTop/10) + (window.scrollY*0.7))
          }
          if (window.scrollY > halvedWelcome)
            {setNavVisibility('visible'); setNavAnimation('nav-visibility-animation-visible')} 
          if (window.scrollY < halvedWelcome) {
              setNavVisibility('hidden'); 
              setNavAnimation('nav-visibility-animation-hidden');
              setSec1('navStick-linksStyling navStick-linksStyling-active')
              setSec2('navStick-linksStyling')
              setSec3('navStick-linksStyling')
              setSec4('navStick-linksStyling')
            };

          if (window.scrollY >= (aboutRef.current.offsetTop/1.25)) {
            setSec1('navStick-linksStyling'); 
            setSec2('navStick-linksStyling navStick-linksStyling-active'); 
            setAboutAnimation(['visible','nav-visibility-animation-visible']); 
            setSec3('navStick-linksStyling')
            setSec4('navStick-linksStyling')
        }; 
        
            if (window.scrollY >= (projectsRef.current.offsetTop/1.25))
            {
            setSec1('navStick-linksStyling'); 
            setSec2('navStick-linksStyling'); 
            setSec3('navStick-linksStyling navStick-linksStyling-active')
            setProjectsAnimation(['visible','nav-visibility-animation-visible']); 
            setSec4('navStick-linksStyling'); 
        } 

        if (window.scrollY >= (contactRef.current.offsetTop/1.25))
            {
            setSec1('navStick-linksStyling'); 
            setSec2('navStick-linksStyling'); 
            setSec3('navStick-linksStyling')
            setSec4('navStick-linksStyling navStick-linksStyling-active'); 
            setContactAnimation(['visible','nav-visibility-animation-visible']); 
        } 

        };


    
        window.addEventListener('scroll', handleScroll);
    
        // return () => {
        //   window.removeEventListener('scroll', handleScroll);
        // };
      }, []);

  return (
    <>
    <div id='welcomeRef'> 
    <Welcome parallaxEffect={decorParallax} />
    <Header  visibility={navVisibility} animation={navAnimation} sec1H={sec1} sec2H={sec2} sec3H={sec3} sec4H={sec4}/>
    <div ref ={mainRef} className='main-container'>
    <div id='aboutRef' ref ={aboutRef}>
    <AboutMe visibility={aboutAnimation[0]} animation={aboutAnimation[1]}/>
    </div>
    <div id='projectsRef' ref ={projectsRef}>
    <Projects visibility={projectsAnimation[0]} animation={projectsAnimation[1]}/>
    </div>
    <div id='contactRef'  ref ={contactRef}>
    <Contact visibility={contactAnimation[0]} animation={contactAnimation[1]} authorValue={props.authorValue} authorEmailValue={props.authorEmailValue} />
    </div>
    <div id='end'></div>
    </div>
    </div>
    </>
  )
}

export default Homepage