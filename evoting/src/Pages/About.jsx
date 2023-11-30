import React from "react";
import Navbar from "../components/Navbar";
export default function About(){
    return(
        <>
         <div className="h-full text-white  w-full bg-blue-900">
          <Navbar/>
        <div className="h-full text-white  w-full bg-blue-900">
            

<div className="h-full w-full flex justify-center items-center">
    <div className="grid grid-cols-2 ">
    <div className="mt-40 border-r border-solid border-black pt-4 pb-4 pr-4">
    <h1 className="text-7xl rotate-90" >About</h1>
</div>
<div className="w-3/4">
    <h2 className="text-2xl">An online voting system that will replace the
old ballot sytem or paper system. Over the time
we have utilized the required technology in every
sector to improve efficiency and save the extra
resources. But the voting system is still very
expensive and requires a bigger workforce.
The system is slower and still not completely
tamper proof. We bring the system that is safe,
reliable and solve the modern issues like higher
reachability of the booth, crowd free voting,
inexpensive, faster results and others.</h2>

</div>

    </div>

</div>



        </div>
        </div>
       </>
    )
}