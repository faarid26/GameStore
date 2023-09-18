import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
function NewArrivals({ products, basket, dispatch }) {
  const [over, setOver] = useState([]);
  const stop = (e) => {
    event.preventDefault();
  };

  const handleMouseOver = (productId) => {
    setOver(productId);
  };

  const handleMouseOut = () => {
    setOver(null);
  };
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
  const filteredProducts = products
    .filter((products) => products.id >= 116 && products.id <= 119)
    .sort((a, b) => {
      if (a.id === 116) return -1;
      if (b.id === 116) return 1;
      return 0;
    });
  return (
    <div>
      <section className="overview container">
        <div className="overview-games">
          {filteredProducts.map((a) => (
            <div
              key={a.id}
              className="game"
              onMouseOver={() => handleMouseOver(a.id)}
              onMouseOut={() => handleMouseOut()}
            >
              <Link to={`/details/${a.id}`} className="game-image">
                <img src={a.image} alt="" />
              </Link>
              <div className="game-details">
                <div className="game-title">
                  <h2>{a.title}</h2>
                  <div className="game-title-info">
                    <div className="game-platform">
                      <span className="fa-brands fa-windows"></span>
                    </div>
                    <div className="game-price">
                      <span>$ {a.price}</span>
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
                {/* {over === a.id && (
                  <div className="product-content">
                    <div className="content-image">
                      <img src={a.image} alt="" />
                    </div>
                    <div className="content-title">
                      <h3>{a.title}</h3>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
const t = (a) => a;
export default connect(t)(NewArrivals);
