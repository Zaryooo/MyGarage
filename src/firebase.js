import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAwMYLr2FPaIB6Y9tF2Zr3WbAeKyFuXlJE",
  authDomain: "my-garage-bf68b.firebaseapp.com",
  databaseURL: "https://my-garage-bf68b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-garage-bf68b",
  storageBucket: "my-garage-bf68b.appspot.com",
  messagingSenderId: "679999887316",
  appId: "1:679999887316:web:2c36772d69f106ecb76841"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
