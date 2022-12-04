import React from "react";
import ContactMini from "../../Components/ContactMini";
import Header2 from "../../Components/Header2";
import { ReactComponent as Projects } from "../../Images/projects.svg";
import { ReactComponent as ApplicationIcon } from "../../Images/application.svg";
import { ReactComponent as HTMLIcon } from "../../Images/html.svg";
import { ReactComponent as CSSIcon } from "../../Images/css.svg";
import { ReactComponent as ReactIcon } from "../../Images/react.svg";
import { ReactComponent as JSIcon } from "../../Images/js.svg";
import Screenshot1 from "../../Images/Screenshots/Tester1.jpg";
import Screenshot2 from "../../Images/Screenshots/Tester2.jpg";
import { ReactComponent as GithubIcon } from "../../Images/githubicon.svg";

function TesterPage(props) {
  return (
    <>
      <Header2 />
      <div className="main-container">
        <div>
          <div
            className="animated-content"
            style={{ animationName: "content-visibility-animation-visible" }}>
            <div className="separator-big"></div>

            <div className="icon-prominent">
              <ApplicationIcon className="icon-prominent-image" />
            </div>
            <div className="icon-prominent-header">Project</div>
            <div className="flex-container">
              <div className="column-left-equal">
                <h1>What is it?</h1>
                <p>
                  Laborum non excepteur fugiat est occaecat incididunt labore eu
                  pariatur ex enim exercitation dolore do.
                </p>
                <p>
                  Elit adipisicing esse deserunt ipsum velit aliqua enim
                  occaecat.
                </p>
                <p>Consequat proident magna pariatur mollit duis et tempor.</p>

                <div className="separator-medium"></div>

                <h1>What did it teach me?</h1>

                <ul>
                  <li>
                    Anim non enim dolor Lorem dolor irure aute velit commodo
                    aute.
                  </li>
                  <li>Id in elit sint voluptate Lorem pariatur.</li>
                  <li>Non pariatur fugiat est eiusmod sit amet fugiat.</li>
                </ul>

                <div className="separator-medium"></div>

                <h1>What did I use?</h1>
                <div
                  className="projectCard-infoChipContainer"
                  style={{
                    fontSize: "1em",
                    justifyContent: "flex-start",
                  }}>
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
              <div className="column-right-equal">
                <div className="separator-medium"></div>
                <div className="screenshot-gallery">
                  <div className="screenshotCard screenshotCard1">
                    <img
                      src={Screenshot1}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}></img>
                  </div>
                  <div className="screenshotCard screenshotCard2">
                    <img
                      src={Screenshot2}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}></img>
                  </div>
                  <div
                    className="detail-2"
                    onClick={() => {
                      window.location.href = "/";
                    }}>
                    <Projects className="projectCard-icon-B" /> Preview{" "}
                  </div>
                  <div
                    className="detail-2"
                    onClick={() => {
                      window.location.href = "/";
                    }}>
                    <GithubIcon className="projectCard-icon-B" /> See on GitHub{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactMini
          indicator="Attributions"
          emailPass1={props.emailPass1}
          emailPass2={props.emailPass2}
        />
      </div>
    </>
  );
}

export default TesterPage;
