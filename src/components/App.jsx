import { useState } from 'react'
import '../styles/reset.css'
import getData from "../data/data.js"
import Section from "./Section.jsx";
import SectionEd from "./SectionEd.jsx"
import SectionJob from "./SectionJob.jsx"
import '../styles/App.css'

function App() {
    const [activeIndexPersonal,setActiveIndexPersonal]=useState(true);
    const [activeIndexEdu,setActiveIndexEdu]=useState(false);
     const [activeIndexJob,setActiveIndexJob]=useState(false);

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const [school,setSchool] = useState('');
    const [startOfStudy,setStartOfStudy] = useState('');
    const [endOfStudy,setEndOfStudy] = useState('');
    const [studyTitle,setStudyTitle] = useState('');

     const [company,setCompany] = useState('');
    const [position,setPosition] = useState('');
    const [respon,setRespon] = useState('');
    const [startOfJob,setStartOfJob] = useState('');
    const [endOfJob,setEndOfJob] = useState('');

     const personObj=getData(firstName,lastName,email,phone,school,studyTitle,startOfStudy,endOfStudy
    ,company,position,respon,startOfJob,endOfJob);

  
  return (
    <>
    
      <div className="survey">
        <button className='sectionBtn' type="button" onClick={e=> activeIndexPersonal? setActiveIndexPersonal(false): setActiveIndexPersonal(true)}>Personal Experience</button>
        {
          activeIndexPersonal && <Section first={e => setFirstName(e.target.value)} 
          last={e=> setLastName(e.target.value)} email={e=> setEmail(e.target.value)} 
          phone={e=>setPhone(e.target.value)} showSection={e=>{
            return (setActiveIndexPersonal(false),
                  setActiveIndexEdu(true)
          )}}
          
          ></Section>
        }
         <button className='sectionBtn' type="button" onClick={e=> activeIndexEdu? setActiveIndexEdu(false): setActiveIndexEdu(true)}>Educational Experience</button>
        {
          activeIndexEdu && <SectionEd class="personalForm" first={e => setSchool(e.target.value)} 
          last={e=> setStudyTitle(e.target.value)} 
          email={e=> setStartOfStudy(e.target.value)} 
          phone={e=>setEndOfStudy(e.target.value)} showSection={e=>{
            return (setActiveIndexEdu(false),
                    setActiveIndexJob(true)
          )}}></SectionEd>
        }
        <button className='sectionBtn' type="button" onClick={e=> activeIndexJob? setActiveIndexJob(false): setActiveIndexJob(true)}>Job Experience</button>
        {
          activeIndexJob && <SectionJob class="personalForm" first={e => setCompany(e.target.value)} 
          last={e=> setPosition(e.target.value)} 
          email={e=> setRespon(e.target.value)} 
          job={e=> setStartOfJob(e.target.value)}
          phone={e=>setEndOfJob(e.target.value)} showSection={e=>setActiveIndexJob(false)}></SectionJob>
        }

      </div>
      <div className="preview">

          { personObj.map(element=>{
                return(
                  <>
                    {element.id == 0 ?<h1 key={element.id}>{element.data}</h1> :
                    element.id == 1 ?<h2 key={element.id}>{element.data}</h2> :
                    element.id ==4 ? <><h2>Educational Experience</h2> <p key={element.id}>{element.data}</p></>:
                       element.id ==8 ? <><h2>Job Experience</h2> <p key={element.id}>{element.data}</p></>:
                    <p key={element.id}>{element.data}</p>
                   }
                    </>
                )
               })}
      </div>
  
    </>
  )
}

export default App
