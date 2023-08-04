import Head from "next/head";
import FirestoreData from "../Components/testdb";
import TestDb from "../Components/testdb";
import Header from "../Components/Header";
import FoodCard from "@/Components/FoodCard";
import AddButton from "@/app/AddItem/page";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <a href="/AddItem">
          <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
            Add item
          </button>
        </a>
      </div>
      <FoodCard />
    </div>
  );
};

export default Home;
