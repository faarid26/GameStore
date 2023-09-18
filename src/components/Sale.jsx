import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
function Sale({ products, basket, dispatch }) {
  const stop = (e) => {
    event.preventDefault();
  };

  const filteredProducts = products.filter(
    (products) => products.id === 19 || products.id === 18 || products.id === 4
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
  return (
    <div data-aos="fade-down-right">
      <section className="sale-game-col container">
        <div className="sale-games">
          {filteredProducts.map((a, b) => (
            <div key={b} className="sale-game">
              <Link to={`/details/${a.id}`} className="sale-image">
                <img src={a.bg} alt="" />
              </Link>
              <div className="sale-game-details">
                <div className="sale-game-title">
                  <h2>{a.title}</h2>
                  <div className="sale-game-title-info">
                    <div className="sale-game-platforms">
                      <span className="fa-brands fa-windows"></span>
                    </div>
                    <div className="sale-game-price">
                      <a className="discount-box" href="#">
                        {a.discount}
                      </a>
                      <div className="price">
                        <span href="#">${a.discountprice}</span>
                        <h4>${a.price}</h4>
                      </div>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(Sale);
