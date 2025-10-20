import { useState } from 'react'
import '../styles/reset.css'
import Section from "./Section.jsx";
import SectionEd from "./SectionEd.jsx"
import '../styles/App.css'

function App() {
    const [activeIndexPersonal,setActiveIndexPersonal]=useState(true);
    const [activeIndexEdu,setActiveIndexEdu]=useState(false);
    const [studySection, setStudySection] = useState(true);
    const [personalSection, setPersonalSection] = useState(true);
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [school,setSchool] = useState('');
    const [startOfStudy,setStartOfStudy] = useState('');
    const [endOfStudy,setEndOfStudy] = useState('');
    const [studyTitle,setStudyTitle] = useState('');
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
    const educationObj=[
    {
        id:"0",
        data: school
    },
    {
        id:"1",
        data: studyTitle
    },
     {
        id:"2",
        data: startOfStudy
    },
    {
        id:"3",
        data: endOfStudy
    }
    ]

  return (
    <>
    
      <div className="survey">
        <button type="button" onClick={e=> activeIndexPersonal? setActiveIndexPersonal(false): setActiveIndexPersonal(true)}>Personal Experience</button>
        {
          activeIndexPersonal && <Section id="personalForm" first={e => setFirstName(e.target.value)} 
          last={e=> setLastName(e.target.value)} email={e=> setEmail(e.target.value)} 
          phone={e=>setPhone(e.target.value)} showSection={e=>setActiveIndexPersonal(false)}
          
          ></Section>
        }
         <button type="button" onClick={e=> activeIndexEdu? setActiveIndexEdu(false): setActiveIndexEdu(true)}>Educational Experience</button>
        {
          activeIndexEdu && <SectionEd id="personalForm" first={e => setSchool(e.target.value)} 
          last={e=> setStudyTitle(e.target.value)} 
          email={e=> setStartOfStudy(e.target.value)} 
          phone={e=>setEndOfStudy(e.target.value)} showSection={e=>setActiveIndexEdu(false)}></SectionEd>
        }

      </div>
      <div className="preview">

          {personalSection && personObj.map(element=>{
                return(
                    <p key={element.id}>{element.data}</p>
                )
               })}
          {studySection && educationObj.map(element=>{
                return(
                    <p key={element.id}>{element.data}</p>
                )
               })}
          
      </div>
  
    </>
  )
}

export default App
