import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ProductSwiper({
  basket,
  products,
  buyFunction,
  sellFunction,
  dispatch,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isBasket, setBasket] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  const stop = (e) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const filteredProducts = products.filter((product) => {
    if (product.id === 114) {
      return false;
    }

    return (
      (product.id >= 17 && product.id <= 20) ||
      product.id === 6 ||
      product.id === 7 ||
      product.id === 21 ||
      product.id === 9
    );
  });
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (a.id === 19) {
      return -1;
    }
    if (b.id === 19) {
      return 1;
    }
    return 0; 
  });
  // const filteredProducts = products.filter(
  //   (products) =>
  //     (products.id >= 17 && products.id <= 20) ||
  //     products.id === 114 ||
  //     products.id === 7
  // );
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
    <>
      <div className="swiper-container">
        <section className="product-swiper">
          <Swiper
            initialSlide={Math.floor(filteredProducts.length / 5)}
            navigation={true}
            pagination={true}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            className="mySwiper"
          >
            {filteredProducts.map((a) => (
              <SwiperSlide key={a.id}>
                <Link to={`/details/${a.id}`} className="swiper-products">
                  <img src={a.image} alt="" />
                </Link>
                <div className="swiper-data">
                  <div className="data-right">
                    <div className="game-info">
                      <span className="fa-brands fa-windows"></span>
                      <div className="game-status">Hal Hazırda Satışdadır</div>
                    </div>
                    <div className="data-title">
                      <h2>{a.title}</h2>
                    </div>
                  </div>
                  <div className="data-left">
                    <div className="left-side">
                      {a.discount ? (
                        <a onClick={stop} className="swiper-btn" href="#">
                          {a.discount}
                        </a>
                      ) : null}
                      <h2>$ {a.price}</h2>
                    </div>
                    <a
                      onClick={() => {
                        stop(), addToBasket(a.id);
                      }}
                      id="add"
                      href="#"
                    >
                      <span className="add-to-basket">
                        <img
                          className="add-icon"
                          src="/add-to-cart.png"
                          alt=""
                        />
                      </span>
                      Səbətə əlavə et
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
      <ToastContainer limit={1} />
    </>
  );
}

const t = (a) => a;
export default connect(t)(ProductSwiper);
