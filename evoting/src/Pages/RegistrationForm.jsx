import React, { useState } from "react";
import Navbar from "../components/Navbar";
import reactLogo from '../assets/Figure.svg';
import { useAccount } from 'wagmi'
import { useContractWrite, useContractRead } from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const navigate = useNavigate()
  const { address, isConnecting, isDisconnected } = useAccount()

  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expire, setExpire] = useState("");
  const [delegate, setDelegateAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handlePrize = (e) => {
    setPrize(e.target.value);
    console.log(e.target.value);
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    console.log(e.target.value);
  };

  const handleExpire = (e) => {
    setExpire(e.target.value);
    console.log(e.target.value);
  };

  const handleAddress = (e) => {
    setDelegateAddress(e.target.value);
    console.log(address);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    registerProd(); // Call your registration function
  };
  //write function
  const {

    writeAsync: registerProduct

  } = useContractWrite({
    address: EvotingAddress,
    abi: EvotingAbi,
    functionName: "addProduct",
    args: [name, prize, quantity],
  })

  const registerProd = async () => {
    try {
      await registerProduct();
    } catch (error) {
      console.log("error register", error);
    }
  }

  return (
    <div className="h-1/2 text-white w-full bg-blue-900">
      <Navbar />
      <div className="h-1/2 text-white w-full grid grid-cols-2 bg-blue-900">
        <div className="w-full h-full flex flex-col justify-start pt-10 mt-10">
          <div className="w-full flex justify-center">
            <button onClick={() => { navigate("/registration") }} className="mr-4">Products</button>
            <button className="mr-4" onClick={() => { navigate("/sport") }}>Supplier</button>
            <button onClick={() => { navigate("/academic") }}>Customer</button>
          </div>
          <h1 className="text-5xl flex justify-center">Product Recording</h1>
          <div className="flex-grow mt-10">
            <form className="mt-6 h-full" onSubmit={handleSubmit}>
              <div className="mt-10 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Name</label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleName}
                  value={name}
                />
              </div>
              {/* <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Email Address</label>
                <input
                   className="h-10 text-black text-center"
                  type="text"
                  onChange={handleEmail}
                  value={email}
                />
              </div> */}
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Price</label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handlePrize}
                  value={prize}
                />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Quantity </label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleQuantity}
                  placeholder="1,2,3..."
                  value={quantity}
                />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Expire </label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleExpire}
                  placeholder="1,2,3..."
                  value={expire}
                />
              </div>
              <div className="bg-blue-700 rounded-2xl w-36 h-10 flex justify-center items-center mt-10 ml-40">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          <div className="flex flex-row mt-80 gap-8 ml-16 h-full w-full">
            <img src={reactLogo} alt="yellow" className="h-1/2 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
