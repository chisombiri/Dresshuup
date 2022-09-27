import { Route, Routes } from "react-router-dom";

import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import Spinner from "./components/Spinner/Spinner";
import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user-action";

//lazy dynamic import. Only pulls homepage when required
const Home = lazy(() => import("./routes/Home/Home"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Navigation = lazy(() => import("./routes/Navigation/Navigation"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));

const App = () => {
  const dispatch = useDispatch();

  //from user provider
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} /> {/* Nested route */}
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
