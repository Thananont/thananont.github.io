import React, { useState } from 'react'
import FadeIn from 'react-fade-in'
import './Home.css'
import Img from '../img/pic.jpg'
import Logo1 from '../img/SSISTrans.png'
import Logo2 from '../img/Chula.png'
import Logo3 from '../img/True.png'


export default function Home() {
  const [hoverSSIS, setHoverSSIS] = useState(false)
  const [hoverChula, setHoverChula] = useState(false)
  const [hoverTrue, setHoverTrue] = useState(false)

  return (
    <div className="container home">
      <div className="content-container">
        <div className="text-container">
          <h1>Hello! <br /> I'm Thananont Chevaphatrakul</h1>
          <p>I'm a fresh graduate from Chulalongkorn University, majoring in Information and Communication Engineering.</p>
        </div>
        <div className="image-container">
          <img src={Img} alt="" />
        </div>
      </div>
      <div className='container experience'>
        <div 
          className="box ssis"
          onMouseEnter={() => setHoverSSIS(!hoverSSIS)}
          onMouseLeave={() => setHoverSSIS(!hoverSSIS)}
        >
          {!hoverSSIS && <img src={Logo1} alt=""></img>}
          {hoverSSIS && <h1>Test to display on hover</h1>}
          {hoverSSIS && 
            <FadeIn delay="500">
              <div>Test1</div>
              <div>Test2</div>
            </FadeIn>
          }
        </div>
        <div 
          className="box chula"
          onMouseEnter={() => setHoverChula(!hoverChula)}
          onMouseLeave={() => setHoverChula(!hoverChula)}
        >
          {!hoverChula && <img src={Logo2} alt=""></img>}
          {hoverChula && <h1>Test to display on hover</h1>}
        </div>
        <div 
          className="box true"
          onMouseEnter={() => setHoverTrue(!hoverTrue)}
          onMouseLeave={() => setHoverTrue(!hoverTrue)}
        >
          {!hoverTrue && <img src={Logo3} alt=""></img>}
          {hoverTrue && <h1>Test to display on hover</h1>}
        </div>
      </div>
    </div>
  )
}