import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '../configs/firebase.config.js'

// Get Firestore instance
const db = getFirestore(app)

// Function to fetch data from Firestore
export async function fetchFirestoreData(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName))
  let data = []
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    })
  })
  return data
}
