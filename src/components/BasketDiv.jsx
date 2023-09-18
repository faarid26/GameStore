import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function BasketDiv({
  products,
  basket,
  basketShow,
  dispatch,
  basketClick,
  fav,
}) {
  const [result, setResult] = useState([]);
  const [isBasket, setBasket] = useState([]);
  const deleteProduct = (id) => {
    let newBasket = [...basket.filter((a) => a.id !== id)];
    localStorage.setItem("basket", JSON.stringify(newBasket));
    dispatch({
      type: "SET_BASKET",
      payload: newBasket,
    });
  };
  const total = basket.reduce((acc, item) => {
    const product = products.find((t) => t.id === item.id);
    if (product) {
      return acc + product.price * item.count;
    }
    return acc;
  }, 0);

  return (
    <>
      <div
        className={
          basketShow ? "basket-container active-container" : "basket-container"
        }
      >
        <div className={basketShow ? "basket active-basket" : "basket"}>
          {basket.length === 0 ? (
            <div className="basket-empty">
              <h3>Sizin səbətiniz boşdur</h3>
            </div>
          ) : null}
          {basket.length > 0 ? (
            <div className="menu-header">
              <div className="shop-data">
                <span>Səbətiniz</span>
                <h3>{basket ? basket.length : 0} məhsul əlavə edildi</h3>
              </div>
              <div className="check">
                <div className="total-price">
                  <h3>$ {total.toFixed(2)}</h3>
                </div>
                <div className="check-btn">
                  <a id="add" href="#">
                  kassaya gedin
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          {basket.length > 0 &&
            basket.map((a) => {
              let prod = products.find((b) => +b.id === +a.id);
              if (prod) {
                return (
                  <div key={prod.id} className="menu-product">
                    <Link
                      to={`/details/${prod.id}`}
                      className="menu-product-img"
                      onClick={basketClick}
                    >
                      <img src={prod.image} alt="" />
                    </Link>
                    <div className="menu-product-data">
                      <div className="menu-product-head">
                        <h3>{prod.title}</h3>
                        <div className="menu-product-det">
                          <span onClick={() => deleteProduct(prod.id)}>
                            Sil
                          </span>
                          {fav.find((item) => item.id === prod.id) ? <a>
                            <i className="fa-solid fa-heart"></i> istək siyahısında
                          </a> : null}
                        </div>
                      </div>
                      <div className="menu-product-price">
                        <h5>$ {prod.price}</h5>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(BasketDiv);
