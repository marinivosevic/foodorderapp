"use client";
import React from "react";
import { useState } from "react";
import {doc,addDoc,collection} from "firebase/firestore";
import {db} from "../firebase-conf"


    
function AddButton() {
  const [isFormVisible, setFormVisible] = useState(true);
  const handleButtonClick = () => {
    setFormVisible((prevVisible) => !prevVisible);
  };
 
  const setFood = async () => {
    try {
        const docRef = await addDoc(collection(db, 'Food'),{
            Name:"Gulas",
            Price: "10.99",
            Type:"Drink"
        });
        console.log("Document written with ID: ", docRef.id);
        
      } catch (error) {
        console.error('Error fetching food:', error);
      }

  }
  
  
  return (
    <div className="flex justify-center">
      {isFormVisible && (
        <button
          onClick={handleButtonClick}
          className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full "
        >
          Add item
        </button>
      )}

      {!isFormVisible && (
        <div className="flex">
          <form action="/api/form" method="post" className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Food Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Hamburger"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Food Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  name="price"
                  type="text"
                  placeholder="6.99"
                />
              </div>
            </div>

            {<div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex-auto">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="type"
                >
                  Type of food
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="type" 
                    name="type"
                  >
                    <option>Drink</option>
                    <option>Hamburger</option>
                    <option>Side</option>
                    <option>Sauce</option>
                  </select>
                  
                </div>
              </div>
            </div> }
            <div className="flex justify-center -mx-3 mb-2">
        <button
         onClick={setFood}
          className="flex-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add item
        </button>
        <button
          onClick={handleButtonClick}
          className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Cancel
        </button>
      </div>
     
          </form>
        </div>
      )}
    </div>
  );
}

export default AddButton;
