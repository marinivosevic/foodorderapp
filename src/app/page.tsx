import Head from "next/head";
import FirestoreData from "../Components/testdb";
import TestDb from "../Components/testdb";
import Header from "../Components/Header";
import FoodCard from "@/Components/FoodCard";


const Home = () => {
  return (
    <div>
      <Header/>
      <FoodCard/>
    </div>
  );
};

export default Home;