import React from "react";

const ButtonForAdding = () => {
  return (
    <div>
      <div className="flex justify-center">
        <a href="/AddItem">
          <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
            Add item
          </button>
        </a>
      </div>
    </div>
  );
};

export default ButtonForAdding;
