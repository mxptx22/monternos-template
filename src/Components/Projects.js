import React from "react";
import { ReactComponent as JSIcon } from "../Images/js.svg";
import { ReactComponent as HTMLIcon } from "../Images/html.svg";
import { ReactComponent as CSSIcon } from "../Images/css.svg";
import { ReactComponent as ReactIcon } from "../Images/react.svg";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ProjectsIcon } from "../Images/projects.svg";
import Screenshot1 from "../Images/Screenshots/Tester1.jpg";
import Screenshot2 from "../Images/Screenshots/Tester2.jpg";
import Screenshot3 from "../Images/Screenshots/Tester1.jpg";
import Screenshot4 from "../Images/Screenshots/Tester2.jpg";

function Projects(props) {
  let navigate = useNavigate();

  return (
    <div style={{ minHeight: "50vh", padding: "5vh 0" }}>
      <h1>My Recent Projects</h1>
      <div
        className="animated-content"
        style={{
          animationName: props.animation,
          visibility: props.visibility,
        }}>
        <div className="presentation-grid">
          <div
            onClick={() => {
              navigate("/allprojects/one");
            }}
            style={{ cursor: "pointer" }}>
            <div className="projectCard-3">
              <img src={Screenshot1} className="frontScreenshot"></img>
            </div>
            <div className="projectCard-info">April 3033</div>
            <div
              className="projectCard-header"
              style={{ borderBottom: "1px solid var(--text-color-dark)" }}>
              Project 1
            </div>
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
          </div>

          <div
            onClick={() => {
              navigate("/allprojects/two");
            }}
            style={{ cursor: "pointer" }}>
            <div className="projectCard-3">
              <img src={Screenshot2} className="frontScreenshot"></img>
            </div>
            <div className="projectCard-info">April 3033</div>
            <div
              className="projectCard-header"
              style={{ borderBottom: "1px solid var(--text-color-dark)" }}>
              Project 2
            </div>
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
          </div>

          <div
            onClick={() => {
              navigate("/allprojects/three");
            }}
            style={{ cursor: "pointer" }}>
            <div className="projectCard-3">
              <img src={Screenshot3} className="frontScreenshot"></img>
            </div>
            <div className="projectCard-info">April 3033</div>
            <div
              className="projectCard-header"
              style={{ borderBottom: "1px solid var(--text-color-dark)" }}>
              Project 3
            </div>
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
          </div>

          <div
            onClick={() => {
              navigate("/allprojects/four");
            }}
            style={{ cursor: "pointer" }}>
            <div className="projectCard-3">
              <img src={Screenshot4} className="frontScreenshot"></img>
            </div>
            <div className="projectCard-info">April 3033</div>
            <div
              className="projectCard-header"
              style={{ borderBottom: "1px solid var(--text-color-dark)" }}>
              Project 4
            </div>
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
          </div>
        </div>
        <Link to="/allprojects">
          <div className="detail-2">
            <ProjectsIcon className="projectCard-icon-B" /> See more{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
