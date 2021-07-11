import React from "react";
import "./SectionB.css";
import Python from "../img/python.png";
import C from "../img/C++.png";
import HTML from "../img/html.png";
import CSS from "../img/css.png";
import MYSQL from "../img/mysql.png";

export default function SectionA() {
  return (
    <section id="home-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="bottom-line"></div>
        <p className="lead">Programming languages that I am knowledgable in</p>
        <div className="specials">
          <div>
            <i className="fab fa-java fa-4x"></i>
            <h3>Java</h3>
          </div>
          <div>
            <img className="fa-replacement-python" src={Python} alt="" />
            <h3>Python</h3>
          </div>
          <div>
            <i className="fab fa-js fa-4x"></i>
            <h3>Javascript</h3>
          </div>
          <div>
            <img className="fa-replacement-C" src={C} alt="" />
            <h3>C++</h3>
            <p></p>
          </div>
          <div>
            <img src={HTML} alt="" className="fa-replacement-html" />
            <h3>HTML</h3>
          </div>
          <div>
            <img src={CSS} alt="" className="fa-replacement-css" />
            <h3>React</h3>
          </div>
          <div>
            <i className="fab fa-react fa-4x"></i>
            <h3>React</h3>
          </div>
          <div>
            <img src={MYSQL} alt="" className="fa-replacement-mysql" />
            <h3>MySQL</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
