import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
   } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOnfC6tfo3NAc4rpLOvZcX-E2OVwkhFzE",
  authDomain: "shopden.firebaseapp.com",
  projectId: "shopden",
  storageBucket: "shopden.appspot.com",
  messagingSenderId: "558248916973",
  appId: "1:558248916973:web:9f76e7ec11f4adf63599e4"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserFromAuth = async (userAuth, additionalinfo={}) => {
    if (!userAuth) return;
    const userDoc = doc(db, 'Users', userAuth.uid);
    const userSnapshot = await getDoc(userDoc);
    if (!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdOn = new Date();
      try{
        await setDoc(userDoc,{
            displayName,
            email,
            createdOn,
            ...additionalinfo
        });
        }
        catch(error){
          console.log("We got an error !!!");
      }
      } 
      return userSnapshot;
    }

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const Collectionref = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object) => {
    const docRef = doc(Collectionref, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("phew");
}

export const createAuthUserFromEmailAndPassword = async(email, password) => {
  if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserFromEmailAndPassword = async(email, password) => {
  if (!email || !password) return;
   const user= await signInWithEmailAndPassword(auth, email, password);
   return user;
}

export const userSignout = () => signOut(auth);

export const onAuthChangeStateListener = (callback) =>onAuthStateChanged(auth, callback);

export const getCollectionsAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q=query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {return docSnapshot.data()});
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const {title, items} = docSnapshot.data();
  //   acc[title.toLowerCase()]=items;
  //   return acc;
  // }, {});
  // return categoryMap;
}

export const getCurrentUser = () => {
  return (new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, 
      (user) => {
      unsubscribe();
      resolve(user);
      },
      reject
  );
  }))
};