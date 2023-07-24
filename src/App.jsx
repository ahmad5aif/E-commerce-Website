import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./hooks/reduxStore";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<SignIn />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
