import "./App.css";
import "./assets/css-me/css-me.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import Nav from "./components/nav";
import Furniture from "./pages/Furniture/Furniture";
import Home from "./pages/home/home";
import Sports from "./pages/sport/sport";
import Glasses from "./pages/glasses/glasses";
import Cloths from "./pages/clothes/clothes";
import Watch from "./pages/watch/watch";
import Mobile from "./pages/mobile/mobile";
import Scarf from "./pages/scarf/scarf";
import{ShopContextProvider} from "./context/shopContext"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        {/* اگر قرار کامپوننتی مثل هدر برای همه صفحه ها یکسان باشد اینچا میذاریمش */}
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/clothes" element={<Cloths />} />
          <Route path="/glasses" element={<Glasses />} />
          <Route path="/sport" element={<Sports />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Furniture" element={<Furniture />} />
          <Route path="/scarf" element={<Scarf />} />
        </Routes>
        {/* اگر قرار کامپوننتی مثل فوتر برای همه صفحه ها یکسان باشد اینچا میذاریمش */}
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
