import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import ScrollUpButton from "../components/ScrollUpButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BlogNav from "../components/BlogNav";
import BlogHeader from "../components/BlogHeader";
import TwpRow from "../components/TwpRow";
import SlickList from "../components/SlickList";
import ArticleWrapper from "../components/ArticleWrapper";
import BestRow from "../components/BestRow";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import Modal from "react-animated-modal";
import BlogFooter from "../components/BlogFooter";
import { motion } from "framer-motion";
function Blog({ footer, products }) {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 30 }}
      animate={{ opacity: 1, translateY: 0 }}
    >
      <ScrollUpButton />
      <BlogHeader />
      <main role="blog">
        <div className={modal ? "blog-search active-container" : "blog-search"}>
          <div className="search-form">
            <input
              className="search-field"
              type="text"
              placeholder="Axtar..."
            />
            <input className="search-button" type="submit" value="axtar" />
          </div>
          <span onClick={openModal} className="fa-solid fa-xmark"></span>
        </div>
        <div className="site-container">
          <BlogNav openModal={openModal} />
          <TwpRow />
          <SlickList />
          <ArticleWrapper />
          <BestRow />
        </div>
      </main>
      <footer>
        <BlogFooter />
      </footer>
    </motion.div>
  );
}
const t = (a) => a;
export default connect(t)(Blog);
