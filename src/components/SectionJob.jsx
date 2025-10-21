import { useState } from "react";
import "../styles/Section.css"
export default function Section({first,last,email,job,phone,showSection}){

   
    return(
        <>
        
        <form action="" method="get">

        <label htmlFor="firstName">Company Name: </label>
        <input type="text" id="firstName" onChange={first}/>

        <label htmlFor="LastName">Position Title: </label>
        <input type="text" id="LastName" onChange={last}/>

        <label htmlFor="email">Main responsibilities: </label>
        <input type="text" id="email" onChange={email} />

        <label htmlFor="phone">start date of work: </label>
        <input type="date" id="phone" onChange={job}/>

         <label htmlFor="phone">end date of work: </label>
        <input type="date" id="phone" onChange={phone}/>

        <button type="button" onClick={showSection} >Submit</button>
        </form>
        
             
            
        
        </>
    )
}
