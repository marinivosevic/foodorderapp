import React, { useState } from "react";
// Create this CSS file for styling
import "../app/Cart.css";

const Cart = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setSideMenuOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenMenu} className=" absoulte top-10">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 92 92"
            id="cart-icon"
          >
            <path d="M91.8 27.3 81.1 61c-.8 2.4-2.9 4-5.4 4H34.4c-2.4 0-4.7-1.5-5.5-3.7L13.1 19H4c-2.2 0-4-1.8-4-4s1.8-4 4-4h11.9c1.7 0 3.2 1.1 3.8 2.7L36 57h38l8.5-27H35.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H88c1.3 0 2.5.7 3.2 1.7.8 1 1 2.4.6 3.6zm-55.4 43c-1.7 0-3.4.7-4.6 1.9-1.2 1.2-1.9 2.9-1.9 4.6 0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9s3.4-.7 4.6-1.9c1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6-1.2-1.2-2.9-1.9-4.6-1.9zm35.9 0c-1.7 0-3.4.7-4.6 1.9s-1.9 2.9-1.9 4.6c0 1.7.7 3.4 1.9 4.6 1.2 1.2 2.9 1.9 4.6 1.9 1.7 0 3.4-.7 4.6-1.9 1.2-1.2 1.9-2.9 1.9-4.6 0-1.7-.7-3.4-1.9-4.6s-2.9-1.9-4.6-1.9z"></path>
          </svg>
        
      </button>
      <div className={`side-menu ${isSideMenuOpen ? "open" : ""}`}>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
        <button onClick={handleCloseMenu}>Close Menu</button>
      </div>
    </div>
  );
};

export default Cart;
