import { Route, Routes } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase/firebase";
import { setCurrentUser } from "./store/user/user-action";

import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Checkout from "./routes/Checkout/Checkout";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";

const App = () => {
  const dispatch = useDispatch();

  //from user provider
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} /> {/* Nested route */}
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />  
      </Route>
    </Routes>  
  );
}

export default App;

