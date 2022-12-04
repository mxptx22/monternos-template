import React, { useRef, useState } from "react";
import { ReactComponent as University } from "../../Images/university.svg";
// import {ReactComponent as School} from '../../Images/school.svg'
// import {ReactComponent as Book} from '../../Images/book.svg'
// import {ReactComponent as Microphone} from '../../Images/microphone.svg'
// import {ReactComponent as Socials} from '../../Images/socials.svg'
import { ReactComponent as Resume } from "../../Images/resume.svg";
// import { Link } from 'react-router-dom'
import LaptopAnim from "./AnimatedIconsResume/LaptopAnim";
import MicrophoneAnim from "./AnimatedIconsResume/MicrophoneAnim";
import BookAnim from "./AnimatedIconsResume/BookAnim";

function Education() {
  const [filler1, setFiller1] = useState("#dbe2f1");
  const [filler2, setFiller2] = useState("#dbe2f1");
  const [filler3, setFiller3] = useState("#dbe2f1");
  const educationIcon1 = useRef();
  const educationIcon2 = useRef();
  const educationIcon3 = useRef();
  const educationShadow1 = useRef();
  const educationShadow2 = useRef();
  const educationShadow3 = useRef();

  function shadowEffect(element) {
    if (element === 1) {
      setFiller1("#D9958F");
      educationIcon1.current.className =
        "centerstage-icon centerstage-icon-hover";
      educationShadow1.current.className =
        "centerstage-shadow centerstage-shadow-hover";
    }

    if (element === 2) {
      setFiller2("#D9958F");
      educationIcon2.current.className =
        "centerstage-icon centerstage-icon-hover";
      educationShadow2.current.className =
        "centerstage-shadow centerstage-shadow-hover";
    }

    if (element === 3) {
      setFiller3("#D9958F");
      educationIcon3.current.className =
        "centerstage-icon centerstage-icon-hover";
      educationShadow3.current.className =
        "centerstage-shadow centerstage-shadow-hover";
    }
  }

  function endshadowEffect() {
    setFiller1("#dbe2f1");
    setFiller2("#dbe2f1");
    setFiller3("#dbe2f1");
    educationIcon1.current.className = "centerstage-icon";
    educationShadow1.current.className = "centerstage-shadow";
    educationIcon2.current.className = "centerstage-icon";
    educationShadow2.current.className = "centerstage-shadow";
    educationIcon3.current.className = "centerstage-icon";
    educationShadow3.current.className = "centerstage-shadow";
  }

  return (
    <>
      <div className="background-infoChipContainer">
        <div className="background-infoChip">
          <University className="projectCard-icon" />
          <span className="projectCard-chipText">University of Someplace</span>
        </div>
      </div>
      <div className="background-details-major">
        MA in Inserting Lorem Ipsum
      </div>
      <div className="background-details">
        Someplace, Somecountry | 3028 - 3029
      </div>

      <div className="centerstage-container">
        <div
          className="item-container"
          onMouseEnter={() => {
            shadowEffect(1);
          }}
          onMouseLeave={() => {
            endshadowEffect();
          }}>
          <div>
            <div ref={educationIcon1} className="centerstage-icon">
              <BookAnim colorChange={filler1} />
            </div>
            <div ref={educationShadow1} className="centerstage-shadow"></div>
          </div>
          <div>Ea eiusmod est magna ad ipsum nostrud et eu ad.</div>
        </div>
        <div
          className="item-container"
          onMouseEnter={() => {
            shadowEffect(2);
          }}
          onMouseLeave={() => {
            endshadowEffect();
          }}>
          <div>
            <div ref={educationIcon2} className="centerstage-icon">
              <MicrophoneAnim colorChange={filler2} />
            </div>
            <div ref={educationShadow2} className="centerstage-shadow"></div>
          </div>
          <div>
            Quis proident et esse occaecat amet deserunt ullamco nisi ea velit
            laboris culpa velit culpa.
          </div>
        </div>
        <div
          className="item-container"
          onMouseEnter={() => {
            shadowEffect(3);
          }}
          onMouseLeave={() => {
            endshadowEffect();
          }}>
          <div>
            <div ref={educationIcon3} className="centerstage-icon">
              <LaptopAnim colorChange={filler3} />
            </div>
            <div ref={educationShadow3} className="centerstage-shadow"></div>
          </div>
          <div>Voluptate consectetur duis aliquip consectetur cillum.</div>
        </div>
      </div>
      <div className="separator-medium"></div>
      <div
        onClick={() => {
          window.location.href = "";
        }}
        className="detail-2">
        <Resume className="projectCard-icon-B" /> My Resumé{" "}
      </div>
    </>
  );
}

export default Education;
