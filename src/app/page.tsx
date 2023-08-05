"use client";
import Head from "next/head";
import FirestoreData from "../Components/testdb";
import TestDb from "../Components/testdb";
import Header from "../Components/Header";
import FoodCard from "@/Components/FoodCard";
import AddButton from "@/app/AddItem/page";
import { auth } from "@/firebase-conf";
import { useAuthState } from "react-firebase-hooks/auth";
import SignedInHeader from "../Components/SignedInHeader";
import ButtonForAdding from "@/Components/ButtonForAdding";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? <SignedInHeader /> : <Header />}
      {user?.uid === "sHBn1AUOmjMY6weWsUq3y1IE5AF3" && <ButtonForAdding />}
      
      <FoodCard/>
    </div>
  );
};

export default Home;
