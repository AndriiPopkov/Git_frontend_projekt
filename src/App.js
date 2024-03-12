import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage/BasketPage";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import { useSelector } from "react-redux";
// import BreadCrumbs from "./components/Breadcrums/BreadCrumbs";

export default function App() {
  const { orderModal } = useSelector((store) => store.modal);

  return (
    <div>
      
      <ModalWindow />
      <BrowserRouter>
        <Header />
        {/* <BreadCrumbs /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products/all" element={<ProductsPage type="all" />} />
          <Route
            path="/products/sales"
            element={<ProductsPage type="sale" />}
          />
          <Route
            path="/categories/:id"
            element={<ProductsPage type="category" />}
          />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
