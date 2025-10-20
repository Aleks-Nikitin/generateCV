import { useState } from "react";
import "../styles/Section.css"
export default function Section({first,last,email,phone,showSection}){

   
    return(
        <>
        
        <form action="" method="get">

        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" onChange={first}/>

        <label htmlFor="LastName">Last Name: </label>
        <input type="text" id="LastName" onChange={last}/>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" onChange={email} />

        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" onChange={phone}/>

        <button type="button" onClick={showSection} >Submit</button>
        </form>
        
             
            
        
        </>
    )
}
