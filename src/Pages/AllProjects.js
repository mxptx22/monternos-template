import React from "react";
import ContactMini from "../Components/ContactMini";
import Header2 from "../Components/Header2";
import { ReactComponent as JSIcon } from "../Images/js.svg";
import { ReactComponent as HTMLIcon } from "../Images/html.svg";
import { ReactComponent as CSSIcon } from "../Images/css.svg";
import { ReactComponent as ReactIcon } from "../Images/react.svg";
import { ReactComponent as Projects } from "../Images/projects.svg";
import { useNavigate } from "react-router-dom";

function AllProjects(props) {
  let navigate = useNavigate();
  return (
    <>
      <Header2 />
      <div className="main-container">
        <div>
          <div className="separator-big"></div>
          <div
            className="animated-content"
            style={{ animationName: "content-visibility-animation-visible" }}>
            <div className="icon-prominent">
              <Projects className="icon-prominent-image" />
            </div>
            <div className="icon-prominent-header">All My Projects</div>
            <h1>3033</h1>
            <div className="app-gallery">
              {/* begins */}

              <div
                onClick={() => {
                  navigate("/allprojects/one");
                }}
                className="projectCard">
                <div className="projectCard-info">April 3033</div>
                <div className="projectCard-header">Project 1</div>
                <div className="projectCard-infoChipContainer">
                  <div className="projectCard-infoChip">
                    <HTMLIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">HTML</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <CSSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">CSS</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <JSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">Javascript</span>
                  </div>
                </div>

                <div className="projectCard-text">
                  Labore velit laborum aliquip esse. Non velit ut voluptate non
                  elit consequat id occaecat exercitation commodo pariatur
                  commodo labore ipsum. Fugiat excepteur commodo eiusmod dolore
                  cupidatat elit exercitation ex amet laborum.
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/allprojects/two");
                }}
                className="projectCard">
                <div className="projectCard-info">April 3033</div>
                <div className="projectCard-header">Project 2</div>
                <div className="projectCard-infoChipContainer">
                  <div className="projectCard-infoChip">
                    <HTMLIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">HTML</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <CSSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">CSS</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <JSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">Javascript</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <ReactIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">React</span>
                  </div>
                </div>
                <div className="projectCard-text">
                  Adipisicing sit ea labore excepteur magna. Pariatur quis culpa
                  in et veniam Lorem esse ut sint. Non anim cillum culpa tempor
                  est consectetur culpa excepteur velit elit laboris quis.
                  Incididunt duis aute cupidatat dolor ipsum aute ut.
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/allprojects/three");
                }}
                className="projectCard">
                <div className="projectCard-info">April 3033</div>
                <div className="projectCard-header">Project 3</div>
                <div className="projectCard-infoChipContainer">
                  <div className="projectCard-infoChip">
                    <HTMLIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">HTML</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <CSSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">CSS</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <JSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">Javascript</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <ReactIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">React</span>
                  </div>
                </div>
                <div className="projectCard-text">
                  Consequat nisi magna proident reprehenderit do sit anim in
                  proident non cillum exercitation aliqua laboris. Dolore
                  exercitation irure aute nostrud aliquip ad deserunt amet.
                  Dolore pariatur ea tempor sunt ea amet et pariatur.
                </div>
              </div>
              <div
                onClick={() => {
                  navigate("/allprojects/four");
                }}
                className="projectCard">
                <div className="projectCard-info">April 3033</div>
                <div className="projectCard-header">Project 4</div>
                <div className="projectCard-infoChipContainer">
                  <div className="projectCard-infoChip">
                    <HTMLIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">HTML</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <CSSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">CSS</span>
                  </div>
                  <div className="projectCard-infoChip">
                    <JSIcon className="projectCard-icon" />
                    <span className="projectCard-chipText">Javascript</span>
                  </div>
                </div>
                <div className="projectCard-text">
                  Sunt cillum sunt elit ex officia enim sunt duis sunt esse. Ut
                  qui duis dolore ea veniam nisi magna labore anim tempor
                  voluptate aute tempor reprehenderit.
                </div>
              </div>

              {/* ends  */}
            </div>
          </div>
        </div>
        <ContactMini
          indicator=""
          emailPass1={props.emailPass1}
          emailPass2={props.emailPass2}
        />
      </div>
    </>
  );
}

export default AllProjects;
