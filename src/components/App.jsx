import { useState } from 'react'
import '../styles/reset.css'
import Section from "./Section.jsx";
import '../styles/App.css'

function App() {
    const [personalSection, setPersonalSection] = useState(false);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
     const personObj=[
    {
        id:"0",
        data: firstName
    },
    {
        id:"1",
        data: lastName
    },
     {
        id:"2",
        data: email
    },
    {
        id:"3",
        data: phone
    }
    ]

  return (
    <>
    
      <div className="survey">
        <button type="button">Personal Experience</button>
      <Section id="personalForm" first={e => setFirstName(e.target.value)} last={e=> setLastName(e.target.value)} email={e=> setEmail(e.target.value)} phone={e=>setPhone(e.target.value)} showSection={e=>setPersonalSection(true)}></Section>

      </div>
      <div className="preview">

          {personalSection && personObj.map(element=>{
                return(
                    <p key={element.id}>{element.data}</p>
                )
               })}
      </div>
  
    </>
  )
}

export default App
