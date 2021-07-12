import React, { useState } from "react";
import { useEffect } from "react";
import PDF from "../files/Thananont_Chevaphatrakul_Resume.pdf";
import "./Header.css";

export default function Header() {
  const words = ["Tech Enthusiast!", "Passionate Learner!", "Programmer!"];
  const [current, setCurrent] = useState(0);
  const [delay, setDelay] = useState(350);
  const [finished, setFinished] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function scroll(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    if (!finished) {
      if (count < words[current].length) {
        setTimeout(() => setText(text + words[current].charAt(count)), delay);
        setCount(count + 1);
      } else {
        setFinished(true);
        setDelay(1500);
      }
    } else {
      if (count > 0) {
        setDelay(250);
        setTimeout(() => setText(text.slice(0, -1)), delay);
        setCount(count - 1);
      } else {
        setFinished(false);
        setDelay(350);
        if (current === 2) {
          setCurrent(0);
        } else {
          setCurrent(current + 1);
        }
      }
    }
  }, [text, finished]);

  useEffect(() => {
    var secondaryNavbar = document.getElementById("follow-nav")!;
    var secondaryHome = document.getElementById("follow-home")!;
    var secondaryAbout = document.getElementById("follow-about")!;
    var secondarySkills = document.getElementById("follow-skills")!;
    var secondaryProject = document.getElementById("follow-project")!;

    window.onscroll = () => {
      if (window.pageYOffset > 880) {
        secondaryNavbar.classList.remove("hidden");
        if (window.pageYOffset >= 880) {
          secondaryHome.classList.remove("current");
          secondarySkills.classList.remove("current");
          secondaryProject.classList.remove("current");
          secondaryAbout.classList.add("current");
        }
        if (window.pageYOffset >= 1580) {
          secondaryAbout.classList.remove("current");
          secondarySkills.classList.add("current");
          console.log(window.pageYOffset);
        }
        if (window.pageYOffset >= 2220) {
          secondarySkills.classList.remove("current");
          secondaryProject.classList.add("current");
          console.log(window.pageYOffset);
        }
      } else {
        secondaryNavbar.classList.add("hidden");
      }
    };
  }, []);

  return (
    <header id="header-home">
      <nav id="follow-nav" className="hidden">
        <ul>
          <li>
            <div
              id="follow-home"
              className="current"
              onClick={() => scroll("header-home")}
            >
              Home
            </div>
          </li>
          <li>
            <div id="follow-about" onClick={() => scroll("home-b")}>
              About
            </div>
          </li>
          <li>
            <div id="follow-skills" onClick={() => scroll("home-a")}>
              Skills
            </div>
          </li>
          <li>
            <div id="follow-project" onClick={() => scroll("home-c")}>
              Projects
            </div>
          </li>
          <li>
            <div id="follow-contact" onClick={() => scroll("main-footer")}>
              Contact
            </div>
          </li>
        </ul>
      </nav>
      <div className="container main-container">
        <nav id="main-nav">
          <ul>
            <li className="no-left-padding">
              <div
                id="main-home"
                className="current"
                onClick={() => scroll("header-home")}
              >
                Home
              </div>
            </li>
            <li>
              <div id="main-about" onClick={() => scroll("home-b")}>
                About
              </div>
            </li>
            <li>
              <div id="main-skill" onClick={() => scroll("home-a")}>
                Skills
              </div>
            </li>
            <li>
              <div id="main-project" onClick={() => scroll("home-c")}>
                Projects
              </div>
            </li>
            <li>
              <div id="main-home" onClick={() => scroll("main-footer")}>
                Contacts
              </div>
            </li>
          </ul>
          <div></div>
        </nav>
        <div className="header-content">
          <h1>
            I Am Thananont <span className="break">The {text}|</span>
          </h1>
          <p className="lead">
            I am a fresh graduate majored in<span className="break"></span>
            Information and Communication Engineering
          </p>
          <a href={PDF} className="btn btn-light">
            View My Resume
          </a>
        </div>
      </div>
    </header>
  );
}
