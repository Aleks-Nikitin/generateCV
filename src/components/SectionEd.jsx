import { useState } from "react";
import "../styles/Section.css"
export default function Section({first,last,email,phone,showSection}){

   
    return(
        <>
        
        <form action="" method="get">

        <label htmlFor="firstName">Your School Name: </label>
        <input type="text" id="firstName" onChange={first}/>

        <label htmlFor="LastName">Title of Study: </label>
        <input type="text" id="LastName" onChange={last}/>

        <label htmlFor="email">start date of study: </label>
        <input type="date" id="email" onChange={email} />

        <label htmlFor="phone">end date of study: </label>
        <input type="date" id="phone" onChange={phone}/>

        <button type="button" onClick={showSection} >Submit</button>
        </form>
        
             
            
        
        </>
    )
}
