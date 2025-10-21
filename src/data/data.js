export default function getDataList(firstName,lastName,email,phone,school,studyTitle,startOfStudy,endOfStudy
    ,company,position,respon,startOfJob,endOfJob
){
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
    ,

    {
        id:"4",
        data: school
    },
    {
        id:"5",
        data: studyTitle
    },
     {
        id:"6",
        data: startOfStudy
    },
    {
        id:"7",
        data: endOfStudy
    }
    
      ,
    {
        id:"8",
        data: company
    },
    {
        id:"9",
        data: position
    },
     {
        id:"10",
        data: respon
    },
    {
        id:"11",
        data: startOfJob
    }
    ,
    {
        id:"12",
        data: endOfJob
    }
     ]
     return personObj;
}