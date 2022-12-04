import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route, HashRouter } from "react-router-dom";
import Attributions from "./Pages/Attributions";
import AllProjects from "./Pages/AllProjects";
import ScrollToTop from "./ScrollToTop";
import TesterPage from "./Pages/ProjectSites/TesterPage";

function App() {
  const [author, setAuthor] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  return (
    <>
      <HashRouter>
        <ScrollToTop>
          <Routes>
            <Route
              index
              element={
                <Homepage authorValue={author} authorEmailValue={authorEmail} />
              }
            />
            <Route
              path="/Attributions"
              element={
                <Attributions
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
            <Route
              path="/AllProjects"
              element={
                <AllProjects
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
            <Route
              path="/AllProjects/one"
              element={
                <TesterPage
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
            <Route
              path="/AllProjects/two"
              element={
                <TesterPage
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
            <Route
              path="/AllProjects/three"
              element={
                <TesterPage
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
            <Route
              path="/AllProjects/four"
              element={
                <TesterPage
                  emailPass1={(val) => {
                    setAuthor(val);
                  }}
                  emailPass2={(val) => {
                    setAuthorEmail(val);
                  }}
                />
              }
            />
          </Routes>
        </ScrollToTop>
      </HashRouter>
    </>
  );
}

export default App;
