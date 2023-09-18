import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import SearchResult from "./SearchResult";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BasketDiv from "./BasketDiv";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Header({ menu, lang, click, basketClick, basket, dispatch, handleGear }) {
  let check = basket.find((a) => a.id === a.id);
  const [isSearch, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [clear, setClear] = useState();
  const searchRef = useRef(null);
  const handleClear = (e) => {
    setSearchTerm("");
    searchRef.current.value = "";
  };
  const search = () => {
    setSearch(!isSearch);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <div className="navbar container">
          <div className="left__nav">
            <Link to="/" className={isSearch ? "logo logo-disable" : "logo"}>
              <img src="/logo.png" alt="" />
            </Link>
            <ul
              className={
                isSearch
                  ? "search-container active-search slide-x"
                  : "search-container"
              }
            >
              <li>
                <span className="fa-solid fa-magnifying-glass"></span>
              </li>
              <li>
                <input
                  ref={searchRef}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                  className="search-input"
                  type="text"
                />
              </li>
              {searchTerm ? (
                <li>
                  <button className="clearBtn" onClick={handleClear}>
                    clear
                  </button>
                </li>
              ) : (
                ""
              )}
            </ul>
            <ul className={isSearch ? "deactive" : "menu"}>
              <li className="has__dropdown">
                <Link to="/store">mağaza</Link>
                <ul className="dropdown">
                  <div className="old-games">
                    <li>
                      <a href="#">Good Old Games</a>
                    </li>
                    <li>
                      <a href="a2">CD PROJEKT RED</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li className="has__dropdown">
                <Link to="/about">haqqımızda</Link>
                <ul className="dropdown">
                  <li>
                    <a href="a3">GameHive</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/support">dəstək</Link>
              </li>
            </ul>
          </div>
          <div  className="right__nav">
            <ul>
              <li>
                <Link
                  to="/fav"
                  className="fa-solid fa-heart"
                  style={{ color: "#ffb54d" }}
                ></Link>
              </li>
              <li
                style={
                  isSearch && window.innerWidth < 768 ? { display: "none" } : {}
                }
              >
                <span onClick={basketClick} className="basket-shopping">
                  <img src="/shopping-cart.png" alt="" />
                </span>
                <span id="count">{basket ? basket.length : 0}</span>
              </li>
              <li>
                <span
                  onClick={(e) => {
                    search();
                    handleClear();
                  }}
                  className={
                    isSearch
                      ? "fa-solid fa-xmark"
                      : "fa-solid fa-magnifying-glass"
                  }
                ></span>
              </li>
              <li style={
                  isSearch && window.innerWidth < 425 ? { display: "none" } : {}
                }>
                <span onClick={handleGear} className="fa-solid fa-gear"></span>
              </li>
              <li style={isSearch ? { display: "none" } : {}}>
                <span
                  onClick={menu}
                  id="menu"
                  className="fa-solid fa-bars"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <SearchResult
        search={searchTerm}
        searchFunction={search}
        isSearch={isSearch}
        handleClear={handleClear}
      />
    </>
  );
}
const t = (a) => a;
export default connect(t)(Header);
