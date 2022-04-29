import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Checkout from "./routes/Checkout/Checkout";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";

const App = () => {
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

