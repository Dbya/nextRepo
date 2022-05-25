import React from "react";
import { NavLink } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row ">
                <div className="col-6 mt-4 mb-4  pt-4 d-flex justify-content-center">
                  <div className="main">
                    <h2>WE HEAR</h2>
                    <h2>WE MAKE IT HAPPEN</h2>
                    <h5>website development and graphics designing</h5>
                    <p>Have you ever wished to consider yourself as a self taught web developer without going to college to learn CSS, PHP, Javascript, 
                      and avoiding this long-term self-learning of programming languages via books and onlinecourses</p>
                  {/* <h5 className="my-3">
                    We are the team of talented Youth <br />
                    <span>Here we talks about everything  you want <br />We will moitivate you <br />
                    we will make you laugh <br /> we will inspire you</span> <br />
                    <strong>Welcome ! Cuties </strong>
                  </h5>  */}
                  <div className="mt-3">
                    <NavLink to="/service" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                  </div>
                  
                  </div>
                  <div className="col-6  d-flex justify-content-center header-img ">
                    <img src="https://www.resiliencecounsellingnetwork.com/wp-content/uploads/2017/10/workrelatedstress-800x571.jpg" alt="" />
                  {/* <img
                    // src="https://media.istockphoto.com/photos/albatross-bird-isolated-on-white-background-with-clipping-path-picture-id1210297601?k=20&m=1210297601&s=612x612&w=0&h=iilWsr283eTNiY08Zlk0BNCeAw_VzWZGwU4hj17Mhhs="
                   src=""
                    alt="homeimage"
                    className="img-fluid animated"
                  /> */}
                </div>
                </div>
                
              </div>
            </div>
            <div className="row m-4 p-4">
              <div className="brand">
                <h3><strong>Movement</strong> for Brand <strong>Digitization</strong></h3>
              </div>
              
              
            </div>
          </div>
   
      </section>
    </>
  );
};

export default Home;
