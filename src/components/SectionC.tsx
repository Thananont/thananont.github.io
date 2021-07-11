import React from "react";
import { Slide } from "react-slideshow-image";
import "./SectionC.css";
import FogFarmPreview from "../img/FogFarm.png";
import Fog1 from "../img/FogFarm1.jpg";
import Fog2 from "../img/FogFarm2.jpg";
import Fog3 from "../img/FogFarm3.png";
import Fog4 from "../img/FogFarm4.jpg";

import TapmePreview from "../img/Tapme.png";
import Tapme1 from "../img/Tapme1.png";
import Tapme2 from "../img/Tapme2.png";
import Tapme3 from "../img/Tapme3.png";

export default function SectionC() {
  return (
    <section id="home-c" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="bottom-line"></div>
        <div className="preview">
          <Slide easing="ease" autoplay={false}>
            <div className="each-slide" onClick={() => popUp("1")}>
              <div>
                <img src={TapmePreview} alt="" />
              </div>
            </div>
            <div className="each-slide" onClick={() => popUp("2")}>
              <div>
                <img src={FogFarmPreview} alt="" />
              </div>
            </div>
          </Slide>
        </div>
        <div id="modal1" className="modal hidden">
          <div className="modal-header">
            <div className="center">
              <div className="title">
                <p>TapMe!</p>
              </div>
            </div>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
          </div>
          <div className="slide">
            <Slide easing="ease" autoplay={false}>
              <div className="each-slide">
                <div>
                  <img src={Tapme1} alt="" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={Tapme2} alt="" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={Tapme3} alt="" />
                </div>
              </div>
            </Slide>
          </div>
          <div className="modal-content">
            <p>
              TapMe! is a multiplayer game developed by me and my three other
              colleagues as a group project for the Netcentric Architecture
              class. We were tasked with creating a multiplayer game that
              requires two different players to connect onto a server in order
              to start the game.
              <br />
              <br />
              We decided to make a memory based game that relies on the users to
              provide the input to challenge each other. Each user will get
              turns that last 10 seconds to put in patterns on a 4x4 grid that
              the opponent must mimic in order to earn points. The game was
              developed using the Godot engine, which led us to learn GDScript
              as it is a programming language that is optimized for the Godot
              engine. Since this was the first time for the whole group to
              develop an application with a server, we got to learn a lot of how
              to have the programs from different machines to communicate
              between each other. In this project, I was responsible for the
              communication feature between the users along with the main
              gameplay logic. The files for the full game can be found on here :
              <br />
              <a href="https://github.com/eeeeaa/Godot-Puzzle-game">
                https://github.com/eeeeaa/Godot-Puzzle-game
              </a>
            </p>
          </div>
        </div>
        <div id="modal2" className="modal hidden">
          <div className="modal-header">
            <div className="center">
              <div className="title">
                <p>Fogfarms</p>
              </div>
            </div>
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
          </div>
          <div className="slide">
            <Slide easing="ease" autoplay={false}>
              <div className="each-slide">
                <div>
                  <img src={Fog1} alt="" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={Fog2} alt="" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={Fog3} alt="" />
                </div>
              </div>
              <div className="each-slide">
                <div>
                  <img src={Fog4} alt="" />
                </div>
              </div>
            </Slide>
          </div>
          <div className="modal-content">
            <p>
              FogFarm is a project that aims to create a farm management system
              that makes farming safer and more efficient by reducing the water,
              space, and chemicals used to grow crops. The goal was to create a
              small scale prototype of Fogfarms that can sustain plant growth
              remotely while at the same time collecting data to optimize plant
              growth and resource usage.
              <br />
              <br />
              The system includes a database management system, a server, a
              client, and a variety of IoT devices. My responsibility for this
              project was the implementation of the IoT systems which includes
              the setup of the equipment for both hardware and software. The
              systems involve using a multitude of sensors along with the
              Arduino Mega 2560 as the interface and the ESP-01 to connect the
              board to the internet. The sensors include a Total Dissolve
              Sensor(TDS), a pH sensor, a solution temperature sensor, an air
              humidity and temperature sensor(DHT11), a water level sensor, and
              a light sensor. In terms of software, the Arduino Mega 2560 was
              coded with C++ to take the values that the sensors monitor from
              the farm then relay the information to the server through the POST
              method while, at the same time, also being able to receive
              commands from the server through the GET command to switch the
              lights and the water valves on and off for the farm.
            </p>
          </div>
        </div>
      </div>

      <div id="overlay" className="hidden" onClick={closePopup}></div>
    </section>
  );
}

function popUp(id: string) {
  let modal = "modal" + id;
  document.getElementById(modal)!.classList.remove("hidden");
  document.getElementById("overlay")!.classList.remove("hidden");
}

function closePopup() {
  for (var i = 1; i <= 2; i++) {
    let modal = "modal" + i.toString();
    document.getElementById(modal)!.classList.add("hidden");
  }
  document.getElementById("overlay")!.classList.add("hidden");
}
