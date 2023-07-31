"use client"
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-conf'; 

interface User {
  id: string;
  Name: string;
  Price: number;
  // Add other properties if present in your Firestore documents
}

export default function TestDb() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getFood = async () => {
      try {
        const data = await getDocs(collection(db, 'Food'));
        const mappedData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as User[]; // Use type assertion to specify the type
        setUsers(mappedData);
      } catch (error) {
        console.error('Error fetching food:', error);
      }
    };

    getFood();
  }, []);

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.Name}</h1>
          <h1>Price: {user.Price}</h1>
        </div>
      ))}
    </div>
  );
}

