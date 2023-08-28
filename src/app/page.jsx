"use client";

import Header from "../Components/Header";
import FoodCard from "@/Components/FoodCard";
import { auth } from "@/firebase-conf";
import { useAuthState } from "react-firebase-hooks/auth";
import SignedInHeader from "../Components/SignedInHeader";
import ButtonForAdding from "@/Components/ButtonForAdding";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "use-shopping-cart";
import Filter from "@/Components/Filter";

const Home = () => {
  const [user] = useAuthState(auth);
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  return (
    <div>
      <CartProvider
        cartMode="checkout-session"
        stripe={stripeKey}
        currency="USD"
      >
        <StateContext>
          <Toaster />
          {user ? <SignedInHeader /> : <Header />}
          {user?.uid === "sHBn1AUOmjMY6weWsUq3y1IE5AF3" && <ButtonForAdding />}
          
          <FoodCard />
        </StateContext>
      </CartProvider>
    </div>
  );
};

export default Home;
