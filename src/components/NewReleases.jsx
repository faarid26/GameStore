import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function NewReleases({ products, basket, dispatch }) {
  const stop = (e) => {
    event.preventDefault();
  };
  const filteredProducts = products.filter(
    (products) => products.id >= 45 && products.id <= 61
  );
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
  };
  return (
    <>
      <div data-aos="fade-left">
        <section className="products container">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            slidesPerView={4}
            slidesPerGroup={4}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {filteredProducts.map((a) => (
              <SwiperSlide key={a.id}>
                <div className="product">
                  <Link to={`/details/${a.id}`} className="product-image">
                    <img src={a.image} alt="" />
                  </Link>
                  <div className="product-info">
                    <div className="product-title">
                      <h3>{a.title.slice(0, 22)}</h3>
                    </div>
                    <div className="product-title-info">
                      <div className="product-platforms">
                        <span className="fa-brands fa-windows"></span>
                      </div>
                      <div className="product-price">
                        <h4>$ {a.price}</h4>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}

const t = (a) => a;

export default connect(t)(NewReleases);
