import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import BasketDiv from "./components/BasketDiv";
import Loading from "./components/Loading";
import NotFound from "./components/NotFound";
import GearDrop from "./components/GearDrop";
import "aos/dist/aos.css";
const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Support = lazy(() => import("./pages/Support"));
const Store = lazy(() => import("./pages/Store"));
const Details = lazy(() => import("./pages/Details"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Fav = lazy(() => import("./pages/Fav"));

function App({ dispatch }) {
  const { id } = useParams();
useEffect(() => {
  fetch("https://raw.githubusercontent.com/faarid26/GameStore/master/db.json").then((res) => res.json()).then((a) => {
    dispatch({
      type: "SET_PRODUCTS",
      payload: a.products,
    })
  })
}, [])
useEffect(() => {
  fetch("https://raw.githubusercontent.com/faarid26/GameStore/master/db.json").then((res) => res.json()).then((a) => {
    dispatch({
      type: "SET_COMMENTS",
      payload: a.comments,
    })
  })
}, [])
  const location = useLocation();
  const currentPathname = location.pathname;
  const disableFooter =
    currentPathname !== "/blog" &&
    currentPathname !== "blogdetails" &&
    currentPathname !== "/admin";
  const disableHeader =
    currentPathname !== "/blog" && currentPathname !== "/admin";

  const [basket, setBasket] = useState(
    JSON.parse(window.localStorage.getItem("basket")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({ type: "SET_BASKET", payload: basket });
  }, [basket, dispatch]);

  const [fav, setFav] = useState(
    JSON.parse(window.localStorage.getItem("fav")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("fav", JSON.stringify(fav));
    dispatch({ type: "SET_FAV", payload: fav });
  }, [fav, dispatch]);
  const [isMenu, setMenu] = useState(false);
  const [isBasketDiv, setBasketDiv] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [footer, setFooter] = useState(false);
  const [gear, setGear] = useState(false);
  const showFooter = () => {
    setFooter(!footer);
  };
  const login = () => {
    setLogin(!isLogin);
  };
  const register = () => {
    setRegister(!isRegister);
  };
  const menuClick = () => {
    setMenu(!isMenu);
  };
  const basketClick = () => {
    setBasketDiv(!isBasketDiv);
  };
  const handleGear = () => {
    setGear(!gear);
  };
  return (
    <>
      {disableHeader && (
        <Header
          menu={menuClick}
          basketClick={basketClick}
          handleGear={handleGear}
        />
      )}
      <BasketDiv basketShow={isBasketDiv} basketClick={basketClick} />
      <GearDrop handleLogin={login} handleRegister={register} gear={gear} />
      <BurgerMenu menu={isMenu} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage menu={isMenu} click={menuClick} basket={basket} />
            }
          />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/blog" element={<Blog />} footer={footer} />
          <Route path="/support" element={<Support />} />
          <Route path="/fav" element={<Fav />} />
          <Route
            path="/admin"
            element={
              <>
                <Admin />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {disableFooter && <Footer />}
    </>
  );
}

export default connect()(App);
