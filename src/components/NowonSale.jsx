import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function NowonSale({ products, basket, dispatch }) {
  const [isTemp, setTemp] = useState([]);
  const [isSel, setSel] = useState(false);
  const [isLiked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
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
  const stop = (e) => {
    event.preventDefault();
  };
  useEffect(() => {
    let filteredProducts = products.filter(
        (product) => product.id >= 7 && product.id <= 14
      );
    if (isSel) {
      filteredProducts = products.filter(
        (product) => product.id >= 45 && product.id <= 52
      );
    }
    if (isLiked) {
      filteredProducts = products.filter(
        (product) => product.id >= 7 && product.id <= 14
      );
    }
    setTemp(filteredProducts);
  }, [isLiked, isSel]);
  const handleSel = () => {
    setSel(!isSel);
  };
  const handleLiked = () => {
    setLiked(!isLiked);
  };
  return (
    <>
      <div className="now-on-container">
        <div className="discover-header-row">
          <div className="header-inf">
            <span id="discount" className="fa-solid fa-percent"></span>
            <h3>Hal Hazırda Satışdadır</h3>
          </div>
          <div className="tab-list">
            <div
              className={`tab-games-u ${activeTab === 0 ? "active" : ""}`}
              onClick={() => {
                handleTabClick(0), handleLiked();
              }}
            >
              Ən çox bəyənilən
            </div>
            <div
              className={`tab-games-u ${activeTab === 1 ? "active" : ""}`}
              onClick={() => {
                handleTabClick(1), handleSel();
              }}
            >
              Ən Son Yenilənən
            </div>
          </div>
        </div>
        <div className="now-on-games">
          {isTemp.map((a) => (
            <div key={a.id}>
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(NowonSale);
