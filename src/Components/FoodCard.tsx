"use client";
import { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase-conf";
import Image from "next/image";
import { useFoodFetch } from "../pages/api/getFood";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase-conf";
import { useStateContext } from "@/context/StateContext";
import Filter from "./Filter";
import { Checkbox } from "@nextui-org/react";
interface Food {
  id: string;
  Name: string;
  Price: number;
  Type: string;
  // Add other properties if present in your Firestore documents
}

export default function FoodCard() {
  const [food, setFood] = useState<Food[]>([]);
  const [user] = useAuthState(auth);
  const { onAdd } = useStateContext();

  const [q, setQ] = useState("");
  const [searchParams] = useState(["Name", "Type", "Price"]);
  const [filterParam, setFilterParam] = useState("All");

  const search = (items) => {
    return items.filter((item) => {
      if (item.Type === filterParam) {
        return searchParams.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParams.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  };
  useEffect(() => {
    const getFood = async () => {
      try {
        const data = await getDocs(collection(db, "Food"));
        const mappedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Food[]; // Use type assertion to specify the type
        setFood(mappedData);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    getFood();
  }, []);

  const deleteFood = async (documentID: string) => {
    try {
      await deleteDoc(doc(db, "Food", documentID));
      getFood();
      console.log("Success");
    } catch {
      console.log("Failed");
    }
  };

  const getFood = async () => {
    try {
      const data = await getDocs(collection(db, "Food"));
      const mappedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Food[]; // Use type assertion to specify the type
      setFood(mappedData);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="flex items-center">
          {/* Left Section: Search Bar */}
          <div className="flex-grow mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs"
                value={q}
                onChange={(event) => setQ(event.target.value)}
              />
              <label htmlFor="search-form">
                <span className="sr-only">Search Food here</span>
              </label>
              <button
                type="submit"
                className="inline-flex items-center py-2 px-2.5 ml-2 text-sm font-large text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <svg
                  className="mr-2 -ml-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Right Section: Radio Buttons */}
          <div className="select flex ml-auto">
            <div className="grid w-[30rem] grid-cols-5 gap-1 rounded-xl bg-gray-200 p-2 mb-4">
            <div>
                <input
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  type="radio"
                  name="option"
                  id="1"
                  value="All"
                  className="peer hidden"
                />
                <label
                  htmlFor="1"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                >
                  All
                </label>
              </div>

              <div>
                <input
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  type="radio"
                  name="option"
                  id="2"
                  value="Hamburger"
                  className="peer hidden"
                />
                <label
                  htmlFor="2"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                >
                  Hamburger
                </label>
              </div>

              <div>
                <input
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  type="radio"
                  name="option"
                  id="3"
                  value="Drink"
                  className="peer hidden"
                />
                <label
                  htmlFor="3"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                >
                  Drink
                </label>
              </div>

              <div>
                <input
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  type="radio"
                  name="option"
                  id="4"
                  value="Sauce"
                  className="peer hidden"
                />
                <label
                  htmlFor="4"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                >
                  Sauce
                </label>
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setFilterParam(e.target.value);
                  }}
                  type="radio"
                  name="option"
                  id="5"
                  value="Side"
                  className="peer hidden"
                />
                <label
                  htmlFor="5"
                  className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white"
                >
                  Side
                </label>
              </div>
            </div>

            <span className="focus"></span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {search(food).map((product) => (
            <a key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                {
                  <Image
                    src={`/images/${product.Name}.jpg`}
                    alt={product.Name}
                    width={300}
                    height={150}
                  />
                }
              </div>

              <div className="flex">
                <div className="flex flex-col">
                  <h4 className="mt-4 text-xs text-gray-700">{product.Type}</h4>
                  <h3 className="mt- text-sm text-gray-700">{product.Name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.Price}
                  </p>
                </div>
                <div className="flex ml-auto">
                  {user?.uid === "sHBn1AUOmjMY6weWsUq3y1IE5AF3" && (
                    <button
                      onClick={() => deleteFood(product.id)}
                      className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                      Delete
                    </button>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => onAdd(product, 1)}
                    className="mt-6 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
