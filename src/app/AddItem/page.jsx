"use client";
import React from "react";
import { useState } from "react";
import { doc, addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage} from "../../firebase-conf";
import Link from "next/link";



//Funkcuija za skirvanje forme i gumba
function AddButton() {
  
  
  const handleFileChange = (event) => {
    setImageUpload(event.target.files[0]);
  };
  //Funkcija iz dokumentacije za submitanje forme na server
  const handleSubmit = async (event) => {
    const data = {
      name: event.target.name.value,
      price: event.target.price.value,
      type: event.target.type.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert("Item added succesfully");
  };

  
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
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

          {
            <div className="flex flex-wrap -mx-3 mb-2">
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
            </div>
          }
          <input type="file" className="mb-2 mt-2"/>
          
          <div className="flex justify-center -mx-3 mb-2">
            <button
              type="submit"
              className="flex-1 bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add item
            </button>

            <Link href="/">
              <button className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                Go Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddButton;
