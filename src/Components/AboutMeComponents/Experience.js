import React, { useRef, useState } from "react";
// import { Link } from 'react-router-dom'
import { ReactComponent as Office } from "../../Images/office.svg";
// import {ReactComponent as Book} from '../../Images/book.svg'
// import {ReactComponent as Microphone} from '../../Images/microphone.svg'
// import {ReactComponent as Socials} from '../../Images/socials.svg'
import { ReactComponent as Resume } from "../../Images/resume.svg";
// import {ReactComponent as Analysis} from '../../Images/analysis.svg'
// import {ReactComponent as FilesStack} from '../../Images/filesstack.svg'
import FileStackAnim from "./AnimatedIconsResume/FileStackAnim";
import LaptopAnim from "./AnimatedIconsResume/LaptopAnim";
import AnalysisAnim from "./AnimatedIconsResume/AnalysisAnim";

function Experience() {
  const educationIcon1 = useRef();
  const educationIcon2 = useRef();
  const educationIcon3 = useRef();
  const educationShadow1 = useRef();
  const educationShadow2 = useRef();
  const educationShadow3 = useRef();
  const [filler1, setFiller1] = useState("#dbe2f1");
  const [filler2, setFiller2] = useState("#dbe2f1");
  const [filler3, setFiller3] = useState("#dbe2f1");

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
          <Office className="projectCard-icon" />
          <span className="projectCard-chipText">Somecompany LLP</span>
        </div>
      </div>
      <div className="background-details-major">Associate</div>
      <div className="background-details">
        Otherplace, Somecountry | 3032 - 3036
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
              <FileStackAnim colorChange={filler1} />
            </div>
            <div ref={educationShadow1} className="centerstage-shadow"></div>
          </div>
          <div>
            Veniam laboris reprehenderit aliqua reprehenderit nostrud ex minim
            esse nulla cillum.
          </div>
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
              <LaptopAnim colorChange={filler2} />
            </div>
            <div ref={educationShadow2} className="centerstage-shadow"></div>
          </div>
          <div>
            Occaecat irure qui occaecat sit Lorem elit aliqua mollit ut.
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
              <AnalysisAnim colorChange={filler3} />
            </div>
            <div ref={educationShadow3} className="centerstage-shadow"></div>
          </div>
          <div>Proident anim elit voluptate sunt.</div>
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

export default Experience;
