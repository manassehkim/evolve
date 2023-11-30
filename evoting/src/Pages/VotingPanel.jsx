import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


import {useContractWrite,useContractRead} from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";


export default function VotingPanel() {
    const [presidentIndex,setPresidentIndex] = useState();



    const { data:president, isError, isLoading } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllPresidents',
        
      })
      //getAllSports reps
      const { data:sportsrep, isError:SportError, isLoading:SportLoanding } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllSports',
        
      })
      //academic reps
      //getAllSports reps
      const { data:accademicrep, isError:AccademicError, isLoading:accademicLoanding } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllAccademicReps',
        
      })
      //vote for president
      const {writeAsync:voteforPresident} = useContractWrite({
        address: EvotingAddress,
        abi:EvotingAbi,
        functionName:"voteForPresident",
        args:[presidentIndex]
      })
      //function handle voting for president
      const handleVotingForPresident = async(index)=>{
        setPresidentIndex(index);
        try{
await voteforPresident();

        }catch(error){
            console.log("Voting Error",error);
        }
      }
    const items =[
        {_name:"terry",
        _regNo:"sct45465",
        _school:"jkuat",
          noofVotes:12345},{_name:"terry",
          _regNo:"sct45465",
          _school:"jkuat",
            noofVotes:12345}]

            useEffect(()=>{
  
            },[])

useEffect(()=>{
    console.log("data freelancers",president);
},[])
  return (
    <>
      <div className="h-screen text-white w-full bg-blue-900">
        <Navbar />
        <div className="w-full w-full justify-around items-center grid grid-cols-3 gap-2 ml-4 mr-4 ">
            <div>
                <span>PRESIDENT</span>
            </div>
            <div>
                <span>SPORTS REP</span>
            </div>
            <div>
                <span>ACCADEMIC REP</span>
            </div>

        </div>
        <div className="h-full w-full  items-center grid grid-cols-3 gap-2 ml-4 mr-4">

        <div className="w-3/4 grid grid-cols-1 gap-4">
            {president?.map((item, index) => (
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
          <div className="flex justify-center rounded items-center bg-green-400">
            <button onClick={()=>{handleVotingForPresident(index)}} >Vote</button>

          </div>
                

              </div>
            ))}
          </div>
          <div className="w-3/4 grid grid-cols-1 gap-4">
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
          <div className="flex justify-center rounded items-center bg-green-400">
            <button onClick={()=>{handleVotingForPresident(index)}} >Vote</button>

          </div>
                

              </div>
            ))}
          </div>
          <div className="w-3/4 grid grid-cols-1 gap-4">
            {accademicrep?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md w-full"
              >
          <div>
          <p className="text-sm text-black  font-semibold mb-2">Name:<span className="ml-16">{item._name}</span></p>
                <p className="text-gray-600 mb-2">Reg No: {item._regNo}</p>
                <p className="text-gray-600 mb-2">School: {item._school}</p>
                <p className="text-gray-600">Votes: {Number(item.noofVotes)}</p>
          </div>
          <div className="flex justify-center rounded items-center bg-green-400">
            <button onClick={()=>{handleVotingForPresident(index)}} >Vote</button>

          </div>
                

              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </>
  );
}
