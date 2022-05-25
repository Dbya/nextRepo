import React, { useRef } from 'react'
import { Ref } from 'react'
import './contact.css'

import emailjs from 'emailjs-com'
// import emailjs from '@emailjs/browser';
import { useState } from "react"
import { useForm } from 'react-hook-form';


const Contact = () => {
  // const [dbya,setDbya]=useState(" ");
  const [list, _setList] = useState([]);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
     
  const form=useRef ();
  const onSubmit =(e)=>{
    

    emailjs.sendForm('service_hbmkec5','template_tcskjt6',form.current,'GzRs4g2GPS6WtAP3p'
    ).then(res=>{
    console.log(res);
    }).catch(err => console.log(err));
    reset();
    alert(`your message or Feedback has been submitted
  be patience and wait you'll get reply within 24hr for sure.`);
  
  }
  return (
    <>
    <div className="contact_info">
      <div className="mainHead">
        <h3>Stay connected 😍<br />
       </h3>
      </div>
      <div className="container-fluid mt-4 mainContact">
        
               <div className="contact">
                
                 <form ref={form} onSubmit={handleSubmit(onSubmit)} action="" className='m-4 align-item-center'>
                   <input type="text" {...register("name",{required:true})} name='name' className='mt-3 form-control'  placeholder='enter your Name' required />
                   <input type="email" {...register("email",{required:true})} name='email' className='mt-3 form-control'  placeholder='enter your email' required />
                   <textarea name="message" {...register("message",{required:true})} className='mt-3 form-control'  cols="30" rows="10" placeholder='write a message or feedback' />
                 {/* <br /><button className=' btn-btn-danger form-control' onClick={sendMe}>Send</button> */}
                 <input type="Submit" className='mt-4  button' />
                 </form>
               </div>
               </div>
           </div>
         
    </>
  )
}

export default Contact