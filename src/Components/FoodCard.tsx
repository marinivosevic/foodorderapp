"use client"
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-conf'; 

interface Food {
  id: string;
  Name: string;
  Price: number;
  // Add other properties if present in your Firestore documents
}
  
  export default function FoodCard() {
    const [food, setFood] = useState<Food[]>([]);

    useEffect(() => {
      const getFood = async () => {
        try {
          const data = await getDocs(collection(db, 'Food'));
          const mappedData = data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })) as Food[]; // Use type assertion to specify the type
          setFood(mappedData);
        } catch (error) {
          console.error('Error fetching food:', error);
        }
      };
  
      getFood();
    }, []);


    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
        
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {food.map((product) => (
              <a key={product.id}  className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  {/* <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    width={50}
                    height={40}
                  /> */}
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.Name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.Price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }