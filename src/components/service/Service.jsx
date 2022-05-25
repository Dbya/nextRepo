import React from 'react'
import './service.css'
import { NavLink } from 'react-router-dom'
const Service = () => {
  return (
    <>
    <section className="main">
      <div className="container-fluid   ">
        <div className="row p-4 m-4">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-6  p-4">
                <div className="health mt-3">
                  <h2>webApp Development </h2>
                  <p>you should take a closer look at the advantages of web app development. You’ll find that web apps are an efficient option for boosting the UX of consumers who prize user engagement 
                    when it comes to their web browsing. High Portability. Users can access web apps from any device. </p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="health mt-3">
                  <h2>mobileApp</h2>
                  <p>Mobile app development refers to the process of writing software that works on a mobile device (smartphones, tables, wearable).
                     But app development is not only about coding a native, HTML5 or hybrid app.   </p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="health mt-3">
                  <h2>Android</h2>
                  <p>here you will get motivational Quoets  <br />
                  click to get more quoets and be motivate to grow 
                  <br />and live happly  </p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-6  p-4">
              <div className="health mt-3">
                  <h2>ios</h2>
                  <p>iOS development refers to the process of making mobile
                     applications for Apple hardware, including iPhones and iPads.</p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="health mt-3">
                  <h2>graphicsDesign</h2>
                  <p>Graphic design is all around us, in a myriad of forms, both on screen
                     and in print, yet it is always made up of images and words to create a communication goal.  </p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="health mt-3">
                  <h2>Network Security</h2>
                  <p>Network security is a broad term that covers a multitude of technologies, devices and processes. In its simplest term, it is a set of rules and configurations designed to protect the integrity, confidentiality
                     and accessibility of computer networks and data using both software and hardware technologies. </p>
                  <div className="mt-3  ">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Service