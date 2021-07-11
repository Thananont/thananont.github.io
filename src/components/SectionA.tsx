import React, { useState } from "react";
import FadeIn from "react-fade-in";
import "./SectionA.css";
import Logo1 from "../img/SSISTrans.png";
import Logo2 from "../img/Chula.png";
import Logo3 from "../img/True.png";
import BG1 from "../img/SSIS2.jpg";
import BG2 from "../img/Chula.jpg";
import BG3 from "../img/True.jpg";

export default function SectionA() {
  const [hoverSSIS, setHoverSSIS] = useState(false);
  const [hoverChula, setHoverChula] = useState(false);
  const [hoverTrue, setHoverTrue] = useState(false);

  return (
    <section id="home-b" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="bottom-line"></div>
        <div className="experience">
          <div
            className="box ssis"
            onMouseEnter={() => {
              if (!hoverSSIS) {
                setHoverSSIS(true);
              }
            }}
            onMouseLeave={() => {
              if (hoverSSIS) {
                setHoverSSIS(false);
              }
            }}
          >
            {!hoverSSIS && <img className="logo-box" src={Logo1} alt=""></img>}
            {hoverSSIS && (
              <div>
                <FadeIn delay="0" transitionDuration="1000">
                  <span>
                    <img className="Bg-box" src={BG1} alt="" />
                  </span>
                </FadeIn>
                <div className="box-text">
                  <h2>Saigon South International School</h2>
                  <p>
                    For my highschool, I attended Saigon South International
                    School during my stay in Vietnam. In that period, I was able
                    to earn myself an IB diploma while still being a part of
                    multiple charitable groups, participating in managerial
                    roles for many charity activities.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className="box chula"
            onMouseEnter={() => {
              if (!hoverChula) {
                setHoverChula(true);
              }
            }}
            onMouseLeave={() => {
              if (hoverChula) {
                setHoverChula(false);
              }
            }}
          >
            {!hoverChula && <img className="logo-box" src={Logo2} alt=""></img>}
            {hoverChula && (
              <div>
                <FadeIn delay="0" transitionDuration="1000">
                  <span>
                    <img className="Bg-box" src={BG2} alt="" />
                  </span>
                </FadeIn>
                <div className="box-text">
                  <h2>Chulalongkorn University</h2>
                  <p>
                    After returning from Vietnam, I enrolled at Chulalongkorn
                    University, majoring in Information and Communication
                    Engineering which is an integration of computer, electrical,
                    and industrial engineering. I graduated from the university
                    in May 2021 with a GPA of 3.44.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className="box true"
            onMouseEnter={() => {
              if (!hoverTrue) {
                setHoverTrue(true);
              }
            }}
            onMouseLeave={() => {
              if (hoverTrue) {
                setHoverTrue(false);
              }
            }}
          >
            {!hoverTrue && <img className="logo-box" src={Logo3} alt=""></img>}
            {hoverTrue && (
              <div>
                <FadeIn delay="0" transitionDuration="1000">
                  <span>
                    <img className="Bg-box" src={BG3} alt="" />
                  </span>
                </FadeIn>
                <div className="box-text">
                  <h2>True Academy</h2>
                  <p>
                    In the summer of 2020, I undertook a two-month internship
                    program at True Corporation in a program known as True
                    Academy. I was assigned as a Network and Transmission
                    Engineer where I was tasked with setting up and managing
                    mail servers.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
