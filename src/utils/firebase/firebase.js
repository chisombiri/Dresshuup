//importing initialising function
import { initializeApp } from 'firebase/app';
//importing necessary authentication tools
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        signInWithEmailAndPassword, 
        createUserWithEmailAndPassword, 
        GoogleAuthProvider,
        signOut,
        onAuthStateChanged
        } from 'firebase/auth';
//import get firestore
//doc method to retireve documents
//get doc and set doc to access and set data
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBD3_WIV1Tw0gKeYPWAf4Aljh-WiO8_AVc",
    authDomain: "dresshuup-db.firebaseapp.com",
    projectId: "dresshuup-db",
    storageBucket: "dresshuup-db.appspot.com",
    messagingSenderId: "1056021164414",
    appId: "1:1056021164414:web:8b2950cb42f6d32265c32f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  //initialise GOOGLE provider object from the class
  const googleProvider = new GoogleAuthProvider();

  //set custom parameters
  googleProvider.setCustomParameters({
      //prompt client to always select an account
    prompt: "select_account"
  });

  export const auth = getAuth();
  //exporting popup sign in to be used by signing component
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  
  //exporting redirect sign in to be used by signing component
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  //creating db from firestore
  export const db = getFirestore();

  //method to add collection and documents to firestore
  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      //set data location with object
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('successful'); //checking success of adding collection
  };

  //Method to get products and categories from firestore
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const que_ry = query(collectionRef);

    const querySnapshot = await getDocs(que_ry);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  };

  //reating user document from auth
  export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    // console.log(userDocRef);
    // console.log(userSnapshot);

    //Checking if user data exists
    //Return userDoc Ref if user snapshot exists. 
    //If it doesn't exist, create/set doc with data from user auth in collection, set using user snapshot
    if(!userSnapshot.exists()){
        //get the data
        const { displayName, email } = userAuth;
        //date user signed up
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    //if user exists
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);