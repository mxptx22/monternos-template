import React, { useRef, useState } from "react";
import { ReactComponent as LinkedInIcon } from "../Images/linkedinicon.svg";
import { ReactComponent as GithubIcon } from "../Images/githubicon.svg";

function Header(props) {
  const [activeSection, setActiveSection] = useState("");

  const welcomeRefNav = useRef();
  const aboutRefNav = useRef();
  const projectsRefNav = useRef();
  const contactRefNav = useRef();
  const additionalRefNav1 = useRef();
  const additionalRefNav2 = useRef();

  const getActiveandFocus = () => {
    if (
      welcomeRefNav.current.className ===
      "navStick-linksStyling navStick-linksStyling-active"
    ) {
      setActiveSection("welcomeRefNav");
    }
    if (
      aboutRefNav.current.className ===
      "navStick-linksStyling navStick-linksStyling-active"
    ) {
      setActiveSection("aboutRefNav");
    }
    if (
      projectsRefNav.current.className ===
      "navStick-linksStyling navStick-linksStyling-active"
    ) {
      setActiveSection("projectsRefNav");
    }
    if (
      contactRefNav.current.className ===
      "navStick-linksStyling navStick-linksStyling-active"
    ) {
      setActiveSection("contactRefNav");
    }
    focusAll();
  };

  const focusAll = () => {
    welcomeRefNav.current.className =
      "navStick-linksStyling navStick-linksStyling-hover";
    aboutRefNav.current.className =
      "navStick-linksStyling navStick-linksStyling-hover";
    projectsRefNav.current.className =
      "navStick-linksStyling navStick-linksStyling-hover";
    contactRefNav.current.className =
      "navStick-linksStyling navStick-linksStyling-hover";
    additionalRefNav1.current.className =
      "navStick-linksStyling-2 navStick-linksStyling-2-hover";
    additionalRefNav2.current.className =
      "navStick-linksStyling-2 navStick-linksStyling-2-hover";
    // additionalRefNav.current.className = 'navStick-linksStyling-2 navStick-linksStyling-2-hover'
  };

  const focusNone = () => {
    console.log(activeSection);
    if (activeSection === "welcomeRefNav") {
      welcomeRefNav.current.className =
        "navStick-linksStyling navStick-linksStyling-active";
    } else {
      welcomeRefNav.current.className = "navStick-linksStyling";
    }
    if (activeSection === "aboutRefNav") {
      aboutRefNav.current.className =
        "navStick-linksStyling navStick-linksStyling-active";
    } else {
      aboutRefNav.current.className = "navStick-linksStyling";
    }
    if (activeSection === "projectsRefNav") {
      projectsRefNav.current.className =
        "navStick-linksStyling navStick-linksStyling-active";
    } else {
      projectsRefNav.current.className = "navStick-linksStyling";
    }
    if (activeSection === "contactRefNav") {
      contactRefNav.current.className =
        "navStick-linksStyling navStick-linksStyling-active";
    } else {
      contactRefNav.current.className = "navStick-linksStyling";
    }
    additionalRefNav1.current.className = "navStick-linksStyling-2";
    additionalRefNav2.current.className = "navStick-linksStyling-2";
    // additionalRefNav.current.className = 'navStick-linksStyling-2'
  };

  return (
    <div
      style={{ visibility: props.visibility, animationName: props.animation }}
      onMouseEnter={() => {
        getActiveandFocus();
      }}
      onMouseLeave={() => {
        focusNone();
      }}
      id="navStickTop"
      class="navStick">
      <a
        href="#welcomeRef"
        onClick={() => {
          setActiveSection("welcomeRefNav");
        }}
        className={props.sec1H}
        ref={welcomeRefNav}>
        Welcome
      </a>
      <a
        href="#aboutRef"
        onClick={() => {
          setActiveSection("aboutRefNav");
        }}
        className={props.sec2H}
        ref={aboutRefNav}>
        Me
      </a>
      <a
        href="#projectsRef"
        onClick={() => {
          setActiveSection("projectsRefNav");
        }}
        ref={projectsRefNav}
        className={props.sec3H}>
        Projects
      </a>
      <a
        href="#contactRef"
        onClick={() => {
          setActiveSection("contactRefNav");
        }}
        ref={contactRefNav}
        className={props.sec4H}>
        Contact
      </a>
      <div className="separator-medium"></div>
      <a ref={additionalRefNav1} href="/" className="navStick-linksStyling-2">
        <LinkedInIcon className="navStick-linksStyling-2-image" />
      </a>
      <a ref={additionalRefNav2} href="/" className="navStick-linksStyling-2">
        <GithubIcon className="navStick-linksStyling-2-image" />
      </a>
    </div>
  );
}

export default Header;
