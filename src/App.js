import "./App.css";
import "./assets/css-me/css-me.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import Nav from "./components/nav";
import Furniture from "./pages/Furniture/Furniture";
import Home from "./pages/home/Home";
import Sports from "./pages/sport/Sports";
import Glasses from "./pages/glasses/Glasses";
import Clothes from "./pages/clothes/Clothes";
import Watch from "./pages/watch/Watch";
import Mobile from "./pages/mobile/Mobile";
import Scarf from "./pages/scarf/Scarf";
import ShopContextWithCustumHookProvider from "./context/shopContextWithCustumHook";
import Welcome from "./components/welcome";
// از دو روش زیر را استفاده کریم در بخش clothes
// هرکدام را از کامنت در بیاوریم کار میکند
// ShopContextProvider  &&  shopContextWithCustumHook//
// import{ShopContextProvider} from "./context/shopContext";
// 
const App = () => {
  return (
    <div className="App">
      <ShopContextWithCustumHookProvider>
        {/* <ShopContextProvider> */}
        <Router>
          {/* اگر قرار کامپوننتی مثل هدر برای همه صفحه ها یکسان باشد اینچا میذاریمش */}
          <Nav />
          <Welcome />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/glasses" element={<Glasses />} />
            <Route path="/sport" element={<Sports />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Furniture" element={<Furniture />} />
            <Route path="/scarf" element={<Scarf />} />
          </Routes>
          {/* اگر قرار کامپوننتی مثل فوتر برای همه صفحه ها یکسان باشد اینچا میذاریمش */}
        </Router>
        {/* </ShopContextProvider> */}
      </ShopContextWithCustumHookProvider>
    </div>
  );
};

export default App;
