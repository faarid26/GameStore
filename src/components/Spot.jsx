import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Spot({ products, basket, dispatch}) {
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
  const findProduct = products.find((product) => product.id === 120);
  return (
    <>
      <section className="spot-overview">
        <div className="spot-bg"></div>
        <div className="overview__title-container">
          <div className="overview__logo container">
            <img
              src="https://images-2.gog-statics.com/137e06d33e5e33c2ad5c7e48431ad1fcf7358f5bfc0b4500f7f603ba86004e8c_takeover_big_logo.png"
              alt=""
            />
          </div>
          {findProduct ? <div className="overview__title">
            <div className="spot-title">
              <div className="available">
                <span className="fa-brands fa-windows"></span>
                <div className="game-status">Hal Hazırda Satışdadır</div>
              </div>
              <h3>{findProduct.title}</h3>
            </div>
            <div className="overview-det">
              {/* <a href="#" className="custom__btn">
                Əlavə et
              </a> */}
              <span className="spot-price">$ {findProduct.price}</span>
              <a
                onClick={() => {
                  stop(), addToBasket(findProduct.id);
                }}
                id="add"
                href="#"
              >
                <span className="add-to-basket">
                  <img className="add-icon" src="/add-to-cart.png" alt="" />
                </span>
                Səbətə əlavə et
              </a>
            </div>
          </div>: null}
        </div>
      </section>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Spot);
