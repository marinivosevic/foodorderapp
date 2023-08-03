import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-conf";
import { useEffect, useState } from "react";

interface Food {
  id: string;
  Name: string;
  Price: number;
  Type: string;
  // Add other properties if present in your Firestore documents
}

export function useFoodFetch() {
  const [food, setFood] = useState<Food[]>([]);

  useEffect(() => {
    const fetchFood = async () => {
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

    fetchFood();
  }, []);

  return food;
}