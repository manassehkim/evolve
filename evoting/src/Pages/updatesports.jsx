import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {useContractWrite,useContractRead} from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";


export default function UpdateSportsPage() {
    const navigate =useNavigate();
    const [presidentIndex,setPresidentIndex] = useState();
    const [showPopup, setShowPopup] = useState(true);
    const [name,setName]=useState()
    const [regNo,setRegNo]=useState()
    const [school,setSchool]=useState()
    const [presidentnewIndex,setPresidentnewtIndex]= useState();
   



    
      const { data:sportsrep, isError:SportError, isLoading:SportLoanding } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllSports',
        
      })
      
      
      
      
      
     
     //update users
     const {writeAsync:UpdateforPresident} = useContractWrite({
        address: EvotingAddress,
        abi:EvotingAbi,
        functionName:"updateSportsRep",
        args:[presidentnewIndex,name,regNo,school]
      })
      
     
   //updateAccademic
   //handle onupdate
   const handleUpdate = async () => {
        

    // Add logic to handle voting submission
    try {
      // Call your voting function with the collected data
      await UpdateforPresident();
      // Close the pop-up form
      setShowPopup(true);
    } catch (error) {
      console.log("Voting Error", error);
    }
  };
   //updatePrsident
   const handleUpdatePresident = async(_index)=>{
    try{
        
setPresidentnewtIndex(_index);
setShowPopup(false)

    }catch(error){
       console.log("error",error); 
    }
}
useEffect(()=>{
    console.log("data freelancers");
},[])
  return (
    <>
      <div className="h-screen text-white w-full bg-blue-900">
        <Navbar />
        <div className="w-full w-full justify-around items-center grid grid-cols-3 gap-2 ml-4 mr-4 mb-4 ">
            <div>
                
            </div>
            <div>
                <button onClick={()=>{navigate("/updateaccademic")}}>Accademic</button>
            </div>
            <div>
            <button onClick={()=>{navigate("/updatesport")}}>Sports</button>
            </div>

        </div>
        <div>
        {showPopup?  <div className="h-full w-full  items-center grid  gap-2 ml-4 mr-4">

<div className="w-full grid grid-cols-3 gap-32">
{sportsrep?.map((item, index) => (
    <div
      key={index}
      className="bg-white p-4 rounded-md shadow-md w-full"
    >
<div>
<p className="text-sm text-black font-semibold mb-2">Name:<span className="ml-16">{item._name}</span></p>
      <p className="text-gray-600 mb-2">Reg No: {item._regNo}</p>
      <p className="text-gray-600 mb-2">School: {item._school}</p>
      <p className="text-gray-600">Votes: {Number(item.noofVotes)}</p>
</div>
<div className="flex justify-center rounded items-center bg-teal-400">
<button onClick={() => handleUpdatePresident(index)}>Update</button>

</div>
      

    </div>
  ))}
  </div>
  
 
  
</div>:
<div className="bg-blue-900 w-full h-full">
<div className="flex items-center justify-center h-screen ">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Form</h2>
          <div className="">
          <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Kinuthia"
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">RegNo</label>
              <input
                type="text"
                placeholder="SCT221/2020"
                onChange={(e) => setRegNo(e.target.value)}
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
      
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-semibold mb-2">School</label>
              <input
                type="text"
                placeholder="Scit"
                onChange={(e) => setSchool(e.target.value)}
                className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
      
            <button
               onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
</div>
        
      }
        </div>
      
        
        
      </div>
      
    </>
  );
}
