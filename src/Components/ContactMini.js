import React, { useState, useEffect } from "react";
import { ReactComponent as Location } from "../Images/location.svg";
import { ReactComponent as Email } from "../Images/email.svg";
import { ReactComponent as Resume } from "../Images/resume.svg";
import { ReactComponent as LinkedInIcon } from "../Images/linkedinicon.svg";
import { ReactComponent as GithubIcon } from "../Images/githubicon.svg";
import { ReactComponent as CopyrightIcon } from "../Images/copyrighticon.svg";
import { ReactComponent as Projects } from "../Images/projects.svg";
import { Link, useNavigate } from "react-router-dom";

function ContactMini(props) {
  const [accentColour, setAccentColour] = useState("var(--accent-color-two)");
  const [chip1] = useState([
    <span>
      London <span className="detailAccentuatedText">United Kingdom</span>
    </span>,
    <span>Open to remote opportunities</span>,
    "nav-visibility-animation-visible",
    "",
  ]);
  const [displayChip1, setDisplayChip1] = useState(0);
  const [animateChip1, setAnimateChip1] = useState(0);
  const [chip2] = useState([
    <span>
      hello<span className="detailAccentuatedText">@mxptx.site</span>
    </span>,
    <span>hello@mxptx.site</span>,
    "nav-visibility-animation-visible",
    "",
  ]);
  const [displayChip2, setDisplayChip2] = useState(0);
  const [animateChip2, setAnimateChip2] = useState(0);
  const [chip3] = useState([
    <span>
      My <span className="detailAccentuatedText">Resumé</span>
    </span>,
    <span>Download My Resumé</span>,
    "nav-visibility-animation-visible",
    "",
  ]);
  const [displayChip3, setDisplayChip3] = useState(0);
  const [animateChip3, setAnimateChip3] = useState(0);
  const [optionsDisplayChip4, setOptionsDisplayChip4] = useState([
    <Link to="/attributions">
      <div className="detail">
        <div className="detailIcon">
          <CopyrightIcon
            className="detailIconImage"
            style={{ animationName: "" }}
          />
        </div>
        Credits
      </div>
    </Link>,
    <Link to="/allprojects">
      <div className="detail">
        <div className="detailIcon">
          <Projects className="detailIconImage" style={{ animationName: "" }} />
        </div>
        Projects
      </div>
    </Link>,
  ]);
  const [displayChip4, setDisplayChip4] = useState(null);

  const [formAuthor, setFormAuthor] = useState();
  const [formAuthorEmail, setFormAuthorEmail] = useState();

  const determineFormAccent = (status) => {
    if (status === "left") {
      setAccentColour("var(--accent-color-two)");
    }
    if (status === "hovered") {
      setAccentColour("var(--accent-color-three)");
    }
  };

  const determineDetailText = (status, element) => {
    if (element === "location") {
      if (status === "hovered") {
        setDisplayChip1(1);
        setAnimateChip1(2);
      }
      if (status === "return") {
        setDisplayChip1(0);
        setAnimateChip1(3);
      }
    }
    if (element === "email") {
      if (status === "hovered") {
        setDisplayChip2(1);
        setAnimateChip2(2);
      }
      if (status === "return") {
        setDisplayChip2(0);
        setAnimateChip2(3);
      }
    }
    if (element === "resume") {
      if (status === "hovered") {
        setDisplayChip3(1);
        setAnimateChip3(2);
      }
      if (status === "return") {
        setDisplayChip3(0);
        setAnimateChip3(3);
      }
    }
  };

  const determineSpecialButton = () => {
    if (props.indicator === "Attributions") {
      setDisplayChip4(1);
    } else {
      setDisplayChip4(0);
    }
  };

  const determineValidityandPass = () => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formAuthorEmail.match(emailFormat) && formAuthor !== "") {
      routeChange();
    } else {
      alert("Did you put in your e-mail correctly?");
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/?end`;
    navigate(path);
  };

  useEffect(() => {
    determineSpecialButton();
  }, []);

  return (
    <div className="bottom-section-2">
      <div
        className="animated-content"
        style={{
          animationName: props.animation,
          visibility: props.visibility,
        }}>
        <div className="flex-container">
          <div className="column-left-equal-2">
            <div className="flex-container-2">
              <div
                className="detail"
                onMouseEnter={() => {
                  determineDetailText("hovered", "location");
                }}
                onMouseLeave={() => {
                  determineDetailText("return", "location");
                }}>
                <div className="detailIcon">
                  <Location
                    className="detailIconImage"
                    style={{ animationName: chip1[animateChip1] }}
                  />
                </div>
                {chip1[displayChip1]}
              </div>
              <div
                className="detail"
                onMouseEnter={() => {
                  determineDetailText("hovered", "email");
                }}
                onMouseLeave={() => {
                  determineDetailText("return", "email");
                }}
                onClick={() => (window.location = "mailto:hello@mxptx.site")}>
                <div className="detailIcon">
                  <Email
                    className="detailIconImage"
                    style={{ animationName: chip2[animateChip2] }}
                  />
                </div>
                {chip2[displayChip2]}
              </div>
              <div
                className="detail"
                onClick={() => {
                  window.location.href = "";
                }}
                onMouseEnter={() => {
                  determineDetailText("hovered", "resume");
                }}
                onMouseLeave={() => {
                  determineDetailText("return", "resume");
                }}>
                <div className="detailIcon">
                  <Resume
                    className="detailIconImage"
                    style={{ animationName: chip3[animateChip3] }}
                  />
                </div>
                {chip3[displayChip3]}{" "}
              </div>
              <div className="detail-miniList">
                <a href="">
                  <div className="detail detailIconSingle">
                    <div className="detailIcon">
                      <LinkedInIcon
                        className="detailIconImage"
                        style={{ animationName: "" }}
                      />
                    </div>
                  </div>
                </a>
                <a href="">
                  <div className="detail detailIconSingle">
                    <div className="detailIcon ">
                      <GithubIcon
                        className="detailIconImage"
                        style={{ animationName: "" }}
                      />
                    </div>
                  </div>
                </a>
                {optionsDisplayChip4[displayChip4]}
              </div>
            </div>
          </div>
          <div className="column-right-equal">
            <div className="form-area">
              <h2>Let's Stay in Touch!</h2>
              <div>
                <input
                  style={{ borderColor: accentColour, color: accentColour }}
                  required
                  onInput={(e) => setFormAuthor(e.target.value)}
                  placeholder="My name is..."
                  className="form-area-object"></input>
              </div>
              <div>
                <input
                  type="email"
                  style={{ borderColor: accentColour, color: accentColour }}
                  onInput={(e) => setFormAuthorEmail(e.target.value)}
                  placeholder="This is my e-mail address..."
                  required
                  className="form-area-object"></input>
              </div>
              <div>
                <button
                  onMouseEnter={() => {
                    determineFormAccent("hovered");
                  }}
                  onMouseLeave={() => {
                    determineFormAccent("left");
                  }}
                  className="form-area-object"
                  onClick={() => {
                    props.emailPass1(formAuthor);
                    props.emailPass2(formAuthorEmail);
                    determineValidityandPass();
                  }}>
                  <Email style={{ height: "1.2em", marginRight: "1ch" }} />
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMini;
