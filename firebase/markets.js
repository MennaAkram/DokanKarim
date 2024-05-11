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

// get all categories in all markets
export const getAllCategories = async () => {
  const marketsSnapshot = await getDocs(collection(db, "markets"));
  const categoriesList = [];
  for (const market of marketsSnapshot.docs) {
    const categoriesSnapshot = await getDocs(collection(db, "markets", market.id, "categories"));
    for (const category of categoriesSnapshot.docs) {
      categoriesList.push({ ...category.data(), id: category.id, marketId: market.id });
    }
  }
  return categoriesList;
};

// get all products in all categories in all markets
export const getAllProducts = async () => {
  const marketsSnapshot = await getDocs(collection(db, "markets"));
  const productsList = [];
  for (const market of marketsSnapshot.docs) {
    const categoriesSnapshot = await getDocs(collection(db, "markets", market.id, "categories"));
    for (const category of categoriesSnapshot.docs) {
      const productsSnapshot = await getDocs(collection(db, "markets", market.id, "categories", category.id, "products"));
      for (const product of productsSnapshot.docs) {
        productsList.push({ ...product.data(), id: product.id, marketId: market.id, categoryId: category.id });
      }
    }
  }
  return productsList;
};