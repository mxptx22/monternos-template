import React from "react";
import BackSquaresAnim from "./AboutMeComponents/AnimatedIconsResume/BackSquaresAnim";

function Welcome(props) {
  return (
    <>
      <div
        className="welcome-decoration"
        style={{ bottom: props.parallaxEffect }}>
        <BackSquaresAnim />
      </div>
      <div className="big-welcome-image">
        <div className="smaller-welcome-frame">
          <div className="smaller-welcome-frame-content">
            <div className="column-left column-left-fixer">
              <div className="accent-like-text relevant-text"> My name is </div>
              <div className="prominent-text relevant-text-big"> John Doe</div>
              <div className="accent-like-text relevant-text"> and I am </div>
              <div style={{ marginTop: "1vh", marginBottom: "1vh" }}>
                {" "}
                A <span className="accentuated-text">person</span> who wants
                happiness.{" "}
              </div>
              <div>My passions are very important to me.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
