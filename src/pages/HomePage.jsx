import { useState, useEffect } from "react";
import SpotDemo from "../components/SpotDemo.jsx";
import Spot from "../components/Spot.jsx";
import ProductSwiper from "../components/ProductSwiper";
import Sale from "../components/Sale.jsx";
import Updated from "../components/Updated.jsx";
import NewReleases from "../components/NewReleases.jsx";
import ComingSoon from "../components/ComingSoon.jsx";
import News from "../components/News.jsx";
import Store from "./Store.jsx";
import BasketDiv from "../components/BasketDiv.jsx";
import { Link } from "react-router-dom";
import NewArrivals from "../components/NewArrivals.jsx";
import ScrollUpButton from "../components/ScrollUpButton.jsx";
import FeaturedDeails from "../components/FeaturedDeails.jsx";
import { motion } from "framer-motion";
import DiscoverGames from "../components/DiscoverGames.jsx";
import NowonSale from "../components/NowonSale.jsx";
function HomePage({
  menu,
  click,
  lang,
  login,
  buyFunction,
  sellFunction,
  basket,
}) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollUpButton />
      <main>
        <Spot />
        <div className="products-heading-title">
          <span className="fa-solid fa-highlighter"></span>
          <h3>Önə Çıxanlar</h3>
        </div>
        <ProductSwiper
          buyFunction={buyFunction}
          sellFunction={sellFunction}
          basket={basket}
        />
        <NewArrivals />
        <div className="products-heading-title">
          <span id="discount" className="fa-solid fa-percent"></span>
          <h3>Günün satış təklifi</h3>
        </div>
        <Sale />
        <div
          style={window.innerWidth < 425 ? { display: "none" } : {}}
          className="products-heading-title"
        >
          <span id="discount" className="fa-solid fa-percent"></span>
          <h3>Seçilən Məhsullar</h3>
        </div>
        <FeaturedDeails />
        <div className="gh-section-wrapper">
          <div className="gh-section">
            <span className="gh-info"></span>
          </div>
        </div>
        <NowonSale />
        <div
          style={window.innerWidth < 425 ? { display: "none" } : {}}
          className="products-heading-title"
        >
          <span id="discount" className="fa-solid fa-compass"></span>
          <h3>Yaxın zamanda</h3>
        </div>
        <ComingSoon />
        <DiscoverGames />
        <div
          style={window.innerWidth < 768 ? { display: "none" } : {}}
          className="products-heading-title"
        >
          <span id="discount" className="fa-solid fa-bullhorn"></span>
          <h3>Son Yazılar</h3>
        </div>
        <News />
      </main>
    </motion.div>
  );
}

export default HomePage;
