import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Fav({ products, fav, dispatch, basket }) {
  const { id } = useParams();
  const [isFav, setFav] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const addToBasket = (id) => {
    const newBasket = [...basket];
    const index = newBasket.findIndex((item) => item.id === id);
    if (index >= 0) {
      newBasket[index].count += 1;
    } else {
      newBasket.push({ id: id, count: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(newBasket));
    dispatch({ type: "SET_BASKET", payload: newBasket });
  };
  const removeFav = (id) => {
    let newFav = [...fav.filter((a) => a.id !== id)];
    localStorage.setItem("fav", JSON.stringify(newFav));
    dispatch({ type: "SET_FAV", payload: newFav });
  };
  // const stop = (event) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <main role="fav">
        <section className="header-container">
          <div className="header-main">
            <ul>
              <li>
                <a href="#">istək siyahısı</a>
              </li>
            </ul>
          </div>
          <div className="header-about">
            <h3>İstədiyiniz başlıqlar ({fav ? fav.length : 0})</h3>
            <div className="header-options">
              <a href="#">GameStore.com/az/u/farid/wishlist</a>
              <i>-</i>
              <span>İstək siyahınıza baxa bilər:</span>
              <span className="header_option">təkcə mən</span>
            </div>
          </div>
          <div data-aos="fade-down-right">
            <div className="product-wishlist-container">
              {fav.length > 0 &&
                fav
                  .reduce((unique, a) => {
                    if (!unique.find((item) => item.id === a.id)) {
                      unique.push(a);
                    }
                    return unique;
                  }, [])
                  .map((a) => {
                    let prod = products.find((b) => +b.id === +a.id);
                    if (prod) {
                      return (
                        <div className="product-wishlist">
                          <Link
                            to={`/details/${prod.id}`}
                            className="wishlist-left"
                          >
                            <div className="wishlist-image">
                              <img src={prod.image} alt="" />
                            </div>
                            <div className="wishlist-title">
                              <h4>{prod.title}</h4>
                            </div>
                          </Link>
                          <div className="wishlist-right">
                            <ul>
                              <li>
                                {Array(5)
                                  .fill()
                                  .map((_, i) => (
                                    <span
                                      key={i}
                                      className="fa-regular fa-star"
                                    ></span>
                                  ))}
                              </li>
                              <li>
                                <div className="wishlist-platforms">
                                  <span className="fa-brands fa-windows"></span>
                                </div>
                              </li>
                              <li>
                                <div className="wishlist-category">
                                  <span>{prod.category.slice(0, 9)}</span>
                                </div>
                              </li>
                              <li className="fav-controls">
                                <div className="sale-game-add">
                                  <span
                                    className="remove-fav"
                                    href="#"
                                    onClick={() => removeFav(a.id)}
                                  >
                                    x
                                  </span>
                                  <a
                                    onClick={() => {
                                      addToBasket(a.id);
                                    }}
                                    href="#"
                                  >
                                    <img
                                      src="/shopping-cart-black.png"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
const d = (a) => a;
export default connect(d)(Fav);
