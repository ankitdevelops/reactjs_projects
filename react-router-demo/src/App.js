import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { FeaturedProduct } from "./components/FeaturedProduct";
import { New } from "./components/New";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"about"} element={<About />} />
        <Route path={"order-summary"} element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="new" element={<New />}></Route>
          <Route path="featured" element={<FeaturedProduct />}></Route>
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
