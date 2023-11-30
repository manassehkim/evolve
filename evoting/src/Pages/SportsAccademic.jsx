import React, { useState } from "react";
import Navbar from "../components/Navbar";
import reactLogo from '../assets/Figure.svg';
import { useAccount } from 'wagmi'
import { useContractWrite, useContractRead } from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";
import { useNavigate } from "react-router-dom";


export default function RegistrationSupplierPage() {
  const navigate = useNavigate()
  const { address, isConnecting, isDisconnected } = useAccount()

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [terms, setTerms] = useState("");
  const [category, setCategory] = useState("");
  const [delegate, setDelegateAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
    console.log(e.target.value);
  };

  const handleTerms = (e) => {
    setTerms(e.target.value);
    console.log(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleAddress = (e) => {
    setDelegateAddress(e.target.value);
    console.log(address);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    registerPrez(); // Call your registration function
  };
  //write function
  const {

    writeAsync: registerSupplier

  } = useContractWrite({
    address: EvotingAddress,
    abi: EvotingAbi,
    functionName: "addSupplier",
    args: [name, contact, terms, category],

  })

  const registerSuppl = async () => {
    try {
      await registerSupplier();
    } catch (error) {
      console.log("error register", error);
    }
  }

  return (
    <div className="h-full text-white w-full bg-blue-900">
      <Navbar />
      <div className="h-full text-white w-full grid grid-cols-2 bg-blue-900">
        <div className="w-full h-full flex flex-col justify-start pt-10 mt-10">
          <div className="w-full flex justify-center">
            <button onClick={() => { navigate("/registration") }} className="mr-4">Products</button>
            <button className="mr-4" onClick={() => { navigate("/sport") }}>Supplier</button>
            <button onClick={() => { navigate("/academic") }}>Customer</button>
          </div>
          <h1 className="text-5xl flex justify-center">Supplier Registration</h1>
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
                <label className="text-left p-2">Contacts</label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleContact}
                  value={contact}
                />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Terms </label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleTerms}
                  placeholder="Terms of deliverly"
                  value={terms}
                />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Category</label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleCategory}
                  value={category}
                />
              </div>
              <div className="bg-blue-700 rounded-2xl w-40 h-10 flex justify-center items-center mt-10 ml-40">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full flex justify-start pt-10 mt-10 items-center">
          <div className="flex flex-row mt-80 gap-8 ml-16 h-full w-full">
            <img src={reactLogo} alt="yellow" className="h-1/2 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
