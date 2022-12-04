import React, { useState } from "react";
import { ReactComponent as Location } from "../Images/location.svg";
import { ReactComponent as Email } from "../Images/email.svg";
import { ReactComponent as Resume } from "../Images/resume.svg";
import { ReactComponent as LinkedInIcon } from "../Images/linkedinicon.svg";
import { ReactComponent as GithubIcon } from "../Images/githubicon.svg";
import { ReactComponent as CopyrightIcon } from "../Images/copyrighticon.svg";
import { Link } from "react-router-dom";

function Contact(props) {
  const [accentColour, setAccentColour] = useState("var(--accent-color-two)");
  const [chip1] = useState([
    <span>
      Someplace <span className="detailAccentuatedText">Somecountry</span>
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
  const [formAuthor, setFormAuthor] = useState(props.authorValue);
  const [formAuthorEmail, setFormAuthorEmail] = useState(
    props.authorEmailValue
  );

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

  return (
    <div className="bottom-section">
      <div
        className="animated-content"
        style={{
          animationName: props.animation,
          visibility: props.visibility,
        }}>
        <h1>Let's Stay in Touch</h1>
        <div className="flex-container">
          <div className="column-left-equal">
            <h2 style={{ color: "var(--accent-color-one" }}>▞▞▞▞▞▞▞▞</h2>
            {/* <div className='separator-medium'></div> */}
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
                </Link>
              </div>
            </div>
          </div>
          <div className="column-right-equal">
            <div className="form-area">
              <form action="" method="POST">
                <div>
                  <input
                    required
                    name="name"
                    onInput={(e) => setFormAuthor(e.target.value)}
                    style={{
                      borderColor: accentColour,
                      color: accentColour,
                      fontFamily: "PT Sans",
                    }}
                    value={formAuthor}
                    placeholder="My name is..."
                    className="form-area-object"></input>
                </div>
                <div>
                  <input
                    required
                    name="email"
                    onInput={(e) => setFormAuthorEmail(e.target.value)}
                    type="email"
                    style={{
                      borderColor: accentColour,
                      color: accentColour,
                      fontFamily: "PT Sans",
                    }}
                    value={formAuthorEmail}
                    placeholder="This is my e-mail address..."
                    className="form-area-object"></input>
                </div>
                <div>
                  <input
                    required
                    name="_subject"
                    style={{
                      borderColor: accentColour,
                      color: accentColour,
                      fontFamily: "PT Sans",
                    }}
                    placeholder="This message is about..."
                    className="form-area-object"></input>
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    style={{
                      borderColor: accentColour,
                      color: accentColour,
                      fontFamily: "PT Sans",
                    }}
                    placeholder="The thing is that..."
                    className="form-area-object"></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    onMouseEnter={() => {
                      determineFormAccent("hovered");
                    }}
                    onMouseLeave={() => {
                      determineFormAccent("left");
                    }}
                    className="form-area-object">
                    <Email style={{ width: "1.2em", marginRight: "1ch" }} />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
