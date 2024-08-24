import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/components/Login";
import Forget from "./pages/components/Forget";
import Register from "./pages/components/Register";
import Cart from "./pages/components/Cart";
import Products from "./pages/Products";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Forget" element={<Forget />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products/>} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
