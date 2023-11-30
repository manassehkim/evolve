import React from "react";
import ConnectButton from "./Connect";
import { useNavigate } from "react-router-dom";

const HomeNavBar =()=>{

    const navigate = useNavigate();
    return(
        <>
        <div className="w-full h-10 bg-gray-500 ">
            <div className="w-full h-full flex justify-around items-center">
                <div className="flex justify-around w-1/4 items-center">
                    <div className="bg-white h-15 w-20 text-center rounded">
                    {/* <button onClick={()=>{navigate("/home")}} className="text-black">Home</button> */}
                    </div>
                    <div className="bg-white h-15 w-20 text-center rounded">

{/* <button onClick={()=>{navigate("/registration")}} className="text-black">Register</button> */}
                    </div>
                    <div className="bg-white h-15 w-20 text-center rounded">
                    {/* <button onClick={()=>{navigate("/voting")}} className="text-black">Voting</button> */}
                    </div>

                </div>
                <div className="w-1/4 ">
                <div className="h-15 w-full text-center rounded text-black">
<ConnectButton />
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}
export default HomeNavBar;