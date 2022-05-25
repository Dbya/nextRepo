import React from 'react'
import Topbar from '../topbar/Topbar';
import Intro from '../intro/Intro';
import Profile from '../profile/Profile'
import Testinomial from '../testinomial/Testinomial'
import Work from '../work/Work'
import Contact from '../contact/Contact'
import './all.css'
const All = () => {
  return (
    <div className='main'>
        {/* <Topbar /> */}
        <div className="section">
           <Intro /> 
           <Profile />
           <Work />
           <Testinomial />
           <Contact />
           
        </div>
    </div>
  )
}

export default All