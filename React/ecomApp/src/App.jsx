import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppProvider } from "./context/ProductContext";
import { FilterContextProvider } from "./context/Filter_Context";
import { CartProvider } from "./context/cart_context";

function App() {
  const theme = {
    colors: {
      heading: "rgba(24,24,24,0.8)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,243,0.5",
      hr: "#fff",
      border: "rgba(98,84,243,0.5)",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0 ,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <GlobalStyle />
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route
                    path="/singleproduct/:id"
                    element={<SingleProduct />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </ThemeProvider>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </>
  );
}

export default App;
