import React from 'react'
import ContactMini from '../Components/ContactMini'
import Header2 from '../Components/Header2'
import {ReactComponent as CopyrightIcon} from '../Images/copyrighticon.svg'
import {ReactComponent as JSIcon} from '../Images/js.svg'
import {ReactComponent as HTMLIcon} from '../Images/html.svg'
import {ReactComponent as CSSIcon} from '../Images/css.svg'
import {ReactComponent as ReactIcon} from '../Images/react.svg'
import {ReactComponent as MongoIcon} from '../Images/mongodb.svg'
import {ReactComponent as ExpressIcon} from '../Images/expressjs.svg'
import {ReactComponent as Location} from '../Images/location.svg'
import {ReactComponent as Email} from '../Images/email.svg'
import {ReactComponent as Resume} from '../Images/resume.svg'
import {ReactComponent as LinkedInIcon} from '../Images/linkedinicon.svg'
import {ReactComponent as GithubIcon} from '../Images/githubicon.svg'
import {ReactComponent as MyAvatar} from '../Images/myavatar.svg'
import {ReactComponent as Office} from '../Images/office.svg'
import {ReactComponent as University} from '../Images/university.svg'
import {ReactComponent as School} from '../Images/school.svg'
import {ReactComponent as ApplicationIcon} from '../Images/application.svg'
import {ReactComponent as Projects} from '../Images/projects.svg'
import {ReactComponent as Book} from '../Images/book.svg'



function Attributions(props) {
  const icons = 
  [{"content":(<CopyrightIcon className='projectCard-2-icon'/>), "desc": "Icon by Anu Rocks on freeicons.io"}, 
  {"content":(<JSIcon className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"},  
  {"content":(<HTMLIcon className='projectCard-2-icon'/>), "desc": "Icon by Muhammad Haq on freeicons.io"}, 
  {"content":(<CSSIcon className='projectCard-2-icon'/>), "desc": "Icon by Anu Rocks on freeicons.io"}, 
  {"content":(<ReactIcon className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"}, 
  {"content":(<MongoIcon className='projectCard-2-icon'/>), "desc": "Icon by www.wishforge.games on freeicons.io"}, 
  {"content":(<ExpressIcon className='projectCard-2-icon'/>), "desc": "Icon by Fasil on freeicons.io"}, 
  {"content":(<Location className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"}, 
  {"content":(<Email className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"}, 
  {"content":(<Resume className='projectCard-2-icon'/>), "desc": "Icon by ColourCreatype on freeicons.io"}, 
  {"content":(<LinkedInIcon className='projectCard-2-icon'/>), "desc": "Icon by Muhammad Haq on freeicons.io"}, 
  {"content":(<GithubIcon className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"}, 
  {"content":(<MyAvatar className='projectCard-2-icon'/>), "desc": "Icon by Reda on freeicons.io"}, 
  {"content":(<Office className='projectCard-2-icon'/>), "desc": "Icon by icon king1 on freeicons.io"}, 
  {"content":(<University className='projectCard-2-icon'/>), "desc": "Icon by Hilmy Abiyyu Asad on freeicons.io"}, 
  {"content":(<Projects className='projectCard-2-icon'/>), "desc": "Icon by ColourCreatype on freeicons.io"}, 
  {"content":(<ApplicationIcon className='projectCard-2-icon'/>), "desc": "Icon by www.wishforge.games on freeicons.io"}, 
  {"content":(<Book className='projectCard-2-icon'/>), "desc": "Icon by Raj Dev on freeicons.io"}, 
  // {"content":(<School className='projectCard-2-icon'/>), "desc": "Icon by XXXXX on freeicons.io"}
]
  return (
    <>

    <Header2/>
    <div className='main-container'>
    <div>
    <div className='animated-content' style={{animationName:'content-visibility-animation-visible'}}>
    <div className='separator-big'></div>
    
    <div className='icon-prominent'><CopyrightIcon className='icon-prominent-image'/></div>
    <div className='icon-prominent-header'>Credits & Attributions</div>
    <h1>Icons</h1>
    
    <div className='icon-gallery'>
      {/* <div className='projectCard projectCard-2'><JSIcon className='projectCard-2-icon'/>Javascript Icon from</div> */}
      {icons.map((e) => (<div className='projectCard projectCard-2'>{e.content}<span>{e.desc}</span></div>))}
    </div>
    

    </div>
    </div>
    <ContactMini indicator='Attributions' emailPass1={props.emailPass1} emailPass2={props.emailPass2}/>
    </div>
    
    </>
    
  )
}

export default Attributions