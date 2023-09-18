import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function DiscoverGames({ products, dispatch, basket }) {
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
  const [activeTab, setActiveTab] = useState(0);
  const [isTemp, setTemp] = useState([]);
  const [isFor, setFor] = useState(false);
  const [isSel, setSel] = useState(false);
  const [isNew, setNew] = useState(false);
  const [isSoon, setSoon] = useState(false);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    let FilteredProducts = products.filter(
      (product) => product.id >= 1 && product.id <= 12
    );
    if (isFor) {
      FilteredProducts = products.filter(
        (product) => product.id >= 1 && product.id <= 12
      );
    }
    if (isSel) {
      FilteredProducts = products.filter(
        (product) =>
          (product.id >= 17 && product.id <= 20) ||
          product.id === 6 ||
          product.id === 7 ||
          product.id === 21 ||
          product.id === 9
      );
    }
    if (isNew) {
      FilteredProducts = products.filter(
        (product) => product.id >= 22 && product.id <= 32
      );
    }
    if (isSoon) {
      FilteredProducts = products.filter(
        (product) => product.id >= 66 && product.id <= 76
      );
    }
    setTemp(FilteredProducts);
  }, [isFor, isSel, isNew, isSoon]);
  const handleFor = () => {
    setFor(!isFor);
  };
  const handleSel = () => {
    setSel(!isSel);
  };
  const handleNew = () => {
    setNew(!isNew);
  };
  const handleSoon = () => {
    setSoon(!isSoon);
  };
  return (
    <>
      <div className="discover-games-container">
        <div className="discover-games">
          <div className="discover-header">
            <div className="header-inf">
              <span id="discount" className="fa-solid fa-compass"></span>
              <h3>Oyunları Kəşf et</h3>
            </div>
            <div className="tab-list">
              <div
                className={`tab-games-u ${activeTab === 0 ? "active" : ""}`}
                onClick={() => {
                  handleTabClick(0), handleFor();
                }}
              >
                Sizin üçün oyunlar
              </div>
              <div
                className={`tab-games-u ${activeTab === 1 ? "active" : ""}`}
                onClick={() => {
                  handleTabClick(1), handleSel();
                }}
              >
                Ən çox satılan
              </div>
              <div
                className={`tab-games-u ${activeTab === 2 ? "active" : ""}`}
                onClick={() => {
                  handleTabClick(2), handleNew();
                }}
              >
                Yeni
              </div>
              <div
                className={`tab-games-u ${activeTab === 3 ? "active" : ""}`}
                onClick={() => {
                  handleTabClick(3), handleSoon();
                }}
              >
                Yaxın zamanda
              </div>
            </div>
          </div>
          <div className="discover-games-list">
            {isTemp.map((a) => (
              <div key={a.id} className="discover-game">
                <Link to={`/details/${a.id}`} className="game-img">
                  <img src={a.image} alt="" />
                </Link>
                <div className="game-info">
                  <div className="dis-game-title">{a.title.slice(0, 21)}</div>
                  <div className="dis-game-spec">
                    <div
                      style={
                        a.available ? { display: "flex" } : { display: "none" }
                      }
                      className="comming-soon"
                    >
                      Yaxın zamanda
                    </div>
                    <span className="fa-brands fa-windows"></span>
                  </div>
                </div>
                <div className="dis-game-price">
                  <span>{`${a.available ? "-" : a.price}`}</span>

                  <div
                    style={a.available ? { display: "none" } : {}}
                    className="dis-game-add"
                  >
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
            ))}
          </div>
        </div>
        <div className="featured">
          <div className="featured-inf">
            <span id="discount" className="fa-solid fa-credit-card"></span>
            <h3>Seçilmiş</h3>
          </div>
          <div className="curated-images">
            <img
              className="cyber"
              src="https://images-3.gog-statics.com/2d7869e70fc9434964a21a0bcd922dd6ed0ea0e2ade36c3eb542def6f1c94d26_curated_collection_huge_tile.webp"
              alt=""
            />
            <img
              className="cyberpnk"
              src="https://images-2.gog-statics.com/c75e674590b8947542c809924df30bbef2190341163dd08668e243c266be70c5_curated_collection_small_tile.webp"
              alt=""
            />
            <img
              src="https://images-2.gog-statics.com/9bbc43a843b1c710873b149f96eb552ba507d1507ad174e8c10cd4c29f22a285_curated_collection_vertical_tile.webp"
              alt=""
            />
            <img
              className="collect"
              src="https://images-1.gog-statics.com/a48de45f88399b45f06ab0490c6920476045a9b9e97d7b92f7eb324d844af5a4_curated_collection_small_tile.webp"
              alt=""
            />
            <div className="col-img">
              <img
                src="https://images-1.gog-statics.com/3ee0093d4b99b8cd76656ae292fd31c9a623aa3fe4e0750019e4cba1c87bd3f7_curated_collection_small_tile.webp"
                alt=""
              />
              <img
                src="https://images-2.gog-statics.com/413b3ab59f3e915b8ff0ee146646aaeaf6e24f13010a05e95e06dfc39536613c_curated_collection_small_tile.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(DiscoverGames);
