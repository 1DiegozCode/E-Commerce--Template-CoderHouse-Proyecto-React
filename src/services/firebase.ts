import { initializeApp } from 'firebase/app';
import Product from '../data/productInterface';
import FirebaseProduct from './firebaseProductInterface';
import products from '../data/products';

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCQn6jzX3BVjcbD6HhpLZvZt7Xd4mlmBQs',
  authDomain: 'e-commerce-a7dbd.firebaseapp.com',
  projectId: 'e-commerce-a7dbd',
  storageBucket: 'e-commerce-a7dbd.appspot.com',
  messagingSenderId: '791807942393',
  appId: '1:791807942393:web:f447211611b2ce5eb7cc28',
};

const firebaseApp = initializeApp(firebaseConfig);
const dataBase = getFirestore(firebaseApp);

export async function sendDataToFirebase() {
  let itemsCollectionRef = collection(dataBase, 'products');
  for (let product of products) {
    let newDoc = await addDoc(itemsCollectionRef, product);
    console.log('Documento creado:', newDoc.id);
  }
}

export async function getProducts(): Promise<FirebaseProduct[]> {
  const collectionRef = collection(dataBase, 'products');
  let results = await getDocs(collectionRef);
  let dataProducts: FirebaseProduct[] = results.docs.map(
    (doc): FirebaseProduct => {
      return {
        id: doc.id,
        ...doc.data(),
      } as FirebaseProduct;
    }
  );
  return dataProducts;
}

export async function getProductsByCategory(
  idCategoryParams: string
): Promise<FirebaseProduct[]> {
  const collectionRef = collection(dataBase, 'products');
  const queryCategory = query(
    collectionRef,
    where('category', '==', idCategoryParams)
  );
  const results = await getDocs(queryCategory);
  const dataProducts: FirebaseProduct[] = results.docs.map(
    (doc): FirebaseProduct => {
      return {
        id: doc.id,
        ...doc.data(),
      } as FirebaseProduct;
    }
  );
  return dataProducts;
}

export async function getProduct(idParams: string) {
  const docRef = doc(dataBase, 'products', idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export default firebaseApp;
