import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
