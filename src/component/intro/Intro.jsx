import React from 'react'
import './intro.css'
import dbya from '../../img/dbya.jpg'
function Intro() {
  return (
    <div className='i'>
    <div className="i-left">
        <div className="i-left-wrapper">
            <h1 className="i-intro">hello,My name is</h1>
            <h2 className="i-name">Dibbya Poudel</h2>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">Web Developer</div>
                    <div className="i-title-item">Web Designer</div>
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Photographer</div>
                    <div className="i-title-item">Writer</div>
                    <div className="i-title-item">Content Creator</div>
                </div>
            </div>
            <div className="i-disc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Commodi omnis rerum tenetur libero assumenda nihil, 
                 minus repellendus dignissimos deleniti
                 non ipsa quidem odit harum nulla eos dolores? Officia, corporis libero?
                 em, ipsum dolor sit amet consectetur adipisicing elit.
                 Commodi omnis rerum tenetur libero assumenda nihil, minus repe
                 llendus dignissimos deleniti
                 non ipsa quidem odit harum nulla eos dolores? Officia, corporis libero?
            </div>
        </div>
    </div>
    <div className="i-right">
        <img src={dbya} alt="" className='i-image'/>
    </div>
    </div>
  )
}

export default Intro