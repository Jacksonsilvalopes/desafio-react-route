import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home"
import HomeBody from "./Home/HomeBody"
import Products from "./Home/Products"
import ProductBody from "./Home/Products/ProductsBody"
import Computers from "./Home/Products/Computers"
import Electronics from "./Home/Products/Electronics"
import Books from "./Home/Products/Books"
import About from "./Home/About"
import NotFound from "./Home/NotFound"


function App() {


  return (
    <BrowserRouter>
      <Routes>     
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="products/" element={<Products />} >            
            <Route index element={<ProductBody />} />
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
