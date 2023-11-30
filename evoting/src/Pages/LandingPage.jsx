import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeNavBar from "../components/HomeNavbar";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full text-white  w-full bg-blue-900">
        <HomeNavBar />
        <div className="h-1/2 w-full ">
          <div className="h-full w-full flex-col text-7xl justify-center items-start pt-30 ">
            <h1 className="text-7xl pb-10 flex justify-center">Hello</h1>
            <h1 className="pb-10 flex justify-center">Welcome to the Inventroy system</h1>
            <h1 className="pb-10 flex justify-center">Platform</h1>
            <h1 className="text-3xl flex justify-center">Welcome to Glory super stores.</h1>
          </div>
          <div className="bg-blue-700 rounded-2xl w-30 h-10 flex justify-center items-center mt-10 ml-40">
            <button type="submit">LOGIN</button>
          </div>
        </div>
        {/*
<div className="w-full grid grid-cols-2 gap-30">
  <div
    className="bg-white p-10 rounded-md shadow-md w-full"
  >
  <div>
  <p className="text-sm text-black  font-semibold mb-2">Name:<span className="ml-16"></span></p>
      
  </div>
  <div className="flex justify-center rounded items-center bg-teal-400">

  </div>
        

      </div>

  </div>*/}
        <div className="w-full justify-start text-white mt-48">
          <div className="w-1/2 h-full flex justify-around">
            {/* <div className="bg-gray-400 w-40 h-10 text-center rounded-xl flex items-center justify-center">
      <button className="text-center">LOGIN</button>
    </div> */}
            <div>
              {/* <button onClick={()=>{navigate("/registration")}}className="w-40 h-10 bg-gray-400 text-white rounded-xl flex items-center justify-center">REGISTER</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
