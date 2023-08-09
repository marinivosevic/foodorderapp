"use client";

import Header from "../Components/Header";
import FoodCard from "@/Components/FoodCard";
import { auth } from "@/firebase-conf";
import { useAuthState } from "react-firebase-hooks/auth";
import SignedInHeader from "../Components/SignedInHeader";
import ButtonForAdding from "@/Components/ButtonForAdding";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <StateContext>
        <Toaster/>
        {user ? <SignedInHeader /> : <Header />}
        {user?.uid === "sHBn1AUOmjMY6weWsUq3y1IE5AF3" && <ButtonForAdding />}
        <FoodCard />
      </StateContext>
    </div>
  );
};

export default Home;
