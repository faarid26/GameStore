import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useAnimation } from "framer-motion";
import { toast } from "react-toastify";
function CatalogProducts({
  search,
  setSearch,
  start,
  end,
  products,
  isTemp,
  activePage,
  totalPageCount,
  setActivePage,
  basket,
  dispatch,
  fav,
}) {
  const addToBasket = (id) => {
    const newBasket = [...basket];
    const index = newBasket.findIndex((item) => item.id === id);
    if (index >= 0) {
      newBasket[index].count += 1;
    } else {
      newBasket.push({ id: id, count: 1 });
    }

    dispatch({ type: "SET_BASKET", payload: newBasket });
    localStorage.setItem("basket", JSON.stringify(newBasket));
    toast("🛒 Səbətə əlavə edildi!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const addToFav = (id) => {
    const newFav = JSON.parse(localStorage.getItem("fav")) || [];
    const index = newFav.findIndex((item) => item.id === id);

    if (index === -1) {
      newFav.push({ id: id });
      localStorage.setItem("fav", JSON.stringify(newFav));
      dispatch({ type: "SET_FAV", payload: newFav });
    }
  };
  const controls = useAnimation();
  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  const stop = (e) => {
    event.preventDefault();
  };
  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      translateY: 20,
    },
    visible: {
      opacity: 1,
      translateY: 0,
    },
  };
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [visibleProductId, setVisibleProductId] = useState(null);
  const handleProductHover = (productId) => {
    setHoveredProductId(productId);
    setVisibleProductId(productId);
  };
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <section className="sale-game-new">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={container}
            className="sale-games"
          >
            {isTemp
              .filter((a) =>
                a.title.toLowerCase().includes(search.toLowerCase())
              )
              .slice(start, end)
              .map((a, b) => (
                <motion.div
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  key={b}
                  className="sale-game"
                  onMouseEnter={() => setHoveredProductId(a.id)}
                  onMouseLeave={() => setHoveredProductId(null)}
                >
                  <Link to={`/details/${a.id}`} className="sale-image">
                    <img src={a.image} alt="" />
                  </Link>
                  <div className="sale-game-details">
                    <div className="sale-game-title">
                      <h2>{a.title}</h2>
                      <div className="sale-game-title-info">
                        <div className="sale-game-platforms">
                          {/* <span className="fa-brands fa-windows"></span> */}
                        </div>
                        <div className="sale-game-price">
                          {a.discount ? (
                            <a className="discount-box" href="#">
                              {a.discount}
                            </a>
                          ) : (
                            ""
                          )}
                          <div
                            style={a.discountprice ? { height: "47px" } : {}}
                            className="price"
                          >
                            {a.discountprice ? (
                              <span>{a.discountprice}</span>
                            ) : (
                              ""
                            )}
                            <h4>{a.price}$</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    // style={{ display: isVisible ? "block" : "none" }}
                    className={`product-hover-info ${
                      hoveredProductId === a.id ? "visible" : ""
                    }`}
                  >
                    <Link
                      to={`/details/${a.id}`}
                      className="product-hover-image"
                    >
                      <img src={a.bg} alt="" />
                    </Link>
                    <div className="product-hover-details">
                      <div className="product-hover-col-t">
                        <h3>{a.title.slice(0, 46)}</h3>
                        <span className="fa-brands fa-windows"></span>
                      </div>
                      <div className="product-hover-col-d">
                        {a.description ? (
                          <p>{a.description.slice(0, 215)}</p>
                        ) : (
                         ""
                        )}
                      </div>
                      <div className="product-hover-features">
                        <h3>Xüsusiyyətləri:</h3>
                        <div className="features-m">
                          <span className="fa-regular fa-user"></span>
                          <span className="fa-solid fa-users"></span>
                        </div>
                      </div>
                      <div className="product-hover-functions">
                        <div className="functions-left">
                          <span
                            onClick={() => addToFav(a.id)}
                            className={
                              fav.find((item) => item.id === a.id)
                                ? "fa-solid fa-heart"
                                : "fa-regular fa-heart"
                            }
                          ></span>
                        </div>
                        <div className="functions-right">
                          <h5>{a.price}</h5>
                          <div className="sale-game-add">
                            <a
                              onClick={() => {
                                stop(), addToBasket(a.id);
                              }}
                              className="fa-solid fa-basket-shopping"
                              href="#"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
          <Pagination
            activePage={activePage}
            totalPageCount={totalPageCount}
            setActivePage={setActivePage}
          />
        </section>
      </motion.div>
      <ToastContainer limit={1} />
    </>
  );
}
const t = (a) => a;
export default connect(t)(CatalogProducts);
