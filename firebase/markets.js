import { getFirestore, updateDoc, arrayUnion } from "firebase/firestore";
import { app } from "./firebaseConfig";
import {
  getDocs,
  doc,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const db = getFirestore(app);

// add new market
export const addMarket = async (marketName, marketImage) => {
  const market = await addDoc(collection(db, "markets"), {
    name: marketName,
    image: marketImage,
  });
  return market.id;
};

// get all markets
export const getMarkets = async () => {
  const markets = await getDocs(collection(db, "markets"));
  const marketsList = [];
  markets.forEach((doc) => {
    marketsList.push({ ...doc.data(), id: doc.id });
  });
  return marketsList;
};

// add new category
export const addCategory = async (marketId, categoryName, categoryIcon) => {
  const categoriesRef = collection(db, "markets", marketId, "categories");
  const newCategory = {
    name: categoryName,
    icon: categoryIcon,
  };
  const docRef = await addDoc(categoriesRef, newCategory);
  console.log("id", docRef.id);
};

// get all categories
export const getCategories = async (marketId) => {
  const categories = await getDocs(collection(db, "markets", marketId, "categories"));
  const categoriesList = [];
  categories.forEach((doc) => {
    categoriesList.push({ ...doc.data(), id: doc.id });
  });
  return categoriesList;
};

// add new product
export const addProduct = async (marketId, categoryId, productName, price, count, sizes, colors, images) => {
  try {
    const productsRef = collection(db, "markets", marketId, "categories", categoryId, "products");
    const newProduct = {
      name: productName,
      price: price,
      count: count,
      sizes: sizes,
      colors: colors,
      images: images,
    };
    const docRef = await addDoc(productsRef, newProduct);
    console.log("id", docRef.id);
  } catch (error) {
    console.error("Error adding product: ", error);
  }
};

// get all products
export const getProducts = async (marketId, categoryId) => {
  const products = await getDocs(collection(db, "markets", marketId, "categories", categoryId, "products"));
  const productsList = [];
  products.forEach((doc) => {
    productsList.push({ ...doc.data(), id: doc.id });
  });
  return productsList;
};