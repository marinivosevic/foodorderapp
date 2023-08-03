import { doc, addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-conf';

export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  if (!body.name || !body.price) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' });
  }

  try {
    // Found the name.
    // Sends a HTTP success code
    const docRef = await addDoc(collection(db, 'Food'), {
      Name: body.name,
      Price: body.price,
      Type: body.type,
    });
    console.log('Document written with ID: ', docRef.id);

    // Sending the response with the document ID
    res.status(200).json({ data: 'Document added successfully', id: docRef.id });
  } catch (error) {
    console.error('Error adding food:', error);
    // Sending an error response with the error message
    res.status(500).json({ error: 'Error adding food' });
  }
}