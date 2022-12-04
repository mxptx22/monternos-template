import React from "react";
import { ReactComponent as JSIcon } from "../../Images/js.svg";
import { ReactComponent as HTMLIcon } from "../../Images/html.svg";
import { ReactComponent as CSSIcon } from "../../Images/css.svg";
import { ReactComponent as ReactIcon } from "../../Images/react.svg";

import { ReactComponent as Resume } from "../../Images/resume.svg";

import AnimatedMe from "./AnimatedMe";

function GeneralInfo() {
  return (
    <>
      <div className="flex-container">
        <div className="column-left-3" style={{ textAlign: "justify" }}>
          <div className="accentuated-header">Hi there!</div>
          <p>My name is John Doe and I'm a talented individual.</p>
          <p>
            My experience irure incididunt dolore ut officia consequat
            reprehenderit elit sunt amet.
          </p>
          <p>
            Officia commodo reprehenderit dolore laboris ut{" "}
            <span className="accentuated-text-2">some text</span>,{" "}
            <span className="accentuated-text-2">
              longer-than-previous-text text
            </span>{" "}
            and <span className="accentuated-text-2">some other text</span>{" "}
            ipsum consequat officia aute sint consequat qui ullamco elit commodo
            exercitation adipisicing eiusmod.{" "}
          </p>
          <div
            onClick={() => {
              window.location.href = "";
            }}
            className="detail-2">
            <Resume className="projectCard-icon-B" /> My Resumé{" "}
          </div>
          <div className="accentuated-header">
            This template was written with
          </div>
          <div className="aboutMe-infoChipContainer">
            <div className="aboutMe-infoChip">
              <HTMLIcon className="projectCard-icon" />
              <span className="projectCard-chipText">HTML</span>
            </div>
            <div className="aboutMe-infoChip">
              <CSSIcon className="projectCard-icon" />
              <span className="projectCard-chipText">CSS</span>
            </div>
            <div className="aboutMe-infoChip">
              <JSIcon className="projectCard-icon" />
              <span className="projectCard-chipText">Javascript</span>
            </div>
            <div className="aboutMe-infoChip">
              <ReactIcon className="projectCard-icon" />
              <span className="projectCard-chipText">React</span>
            </div>
          </div>
        </div>
        <div
          className="column-right-3"
          style={{
            alignSelf: "baseline",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <AnimatedMe />
        </div>
      </div>
    </>
  );
}

export default GeneralInfo;
