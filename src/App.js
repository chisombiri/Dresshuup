import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Home from "./routes/Home/Home";

const Shop = () => {
  return <h1> Hello There Shop</h1>
}

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} /> 
      </Route>
    </Routes>  
  );
}

export default App;

