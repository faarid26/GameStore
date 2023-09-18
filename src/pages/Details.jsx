import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import {
  faStar as farStar,
  faStar as fasStar,
} from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
function Details({ products, basket, dispatch, fav, detailcomments}) {
  const { id } = useParams();
  const stop = (e) => {
    e.preventDefault();
  };
  const [similar, setSimilar] = useState([]);
  const [randomSimilar, setRandomSimilar] = useState([]);
  let data = products.find((product) => product.id === +id)
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
  const addToFav = (id) => {
    const newFav = JSON.parse(localStorage.getItem("fav")) || [];
    const index = newFav.findIndex((item) => item.id === id);

    if (index === -1) {
      newFav.push({ id: id });
      localStorage.setItem("fav", JSON.stringify(newFav));
      dispatch({ type: "SET_FAV", payload: newFav });
    }
  };
  const FavItem = () => {
    fav.find((item) => item.id);
  };
  const similarItem = () => {
    const filteredSimilar = products.filter(
      (item) => item.category === data.category
    );
    const randomFourSimilar = getRandomItems(filteredSimilar, 4);
    setSimilar(randomFourSimilar);
  };
  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);
  const handleStarHover = (startIndex) => {
    setHoveredStars(startIndex + 1);
  };
  const handleStarsLeave = () => {
    setSelectedStars(0);
  };
  const [isPost, setPost] = useState(false);
  const handlePost = () => {
    setPost(!isPost);
  };
  useEffect(() => {
    fetch(`https://api.npoint.io/1339df3ce83f2ccf1a6f/comments`)
      .then((a) => a.json())
      .then((a) => {
        setComments(a);
      });
  }, []);
  const [comments, setComments] = useState("");
  const [name, setName] = useState("");
  const [rev, setRev] = useState("");
  const postName = (e) => {
    setName(e.target.value);
  };
  const postRev = (e) => {
    setRev(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name,
      rev,
      selectedStars: hoveredStars,
    };
    fetch("https://api.npoint.io/1339df3ce83f2ccf1a6f/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setComments([...comments, newComment]);
    setRev("");
    setName("");
    setSelectedStars(0);
  };
  return (
    <>
      <main role="main">
        <section className="detail-product">
          <div
            className="detail-image"
            style={{
              backgroundImage: `url(${data.bg})`,
              backgroundAttachment: "fixed",
            }}
          >
            {/* <img src={data.bg} alt="" /> */}
          </div>
          <div className="detail-about container">
            <div className="detail-title">
              <h2>{data.title}</h2>
            </div>
            <div className="productcard">
              <div className="detail-rating">
                {Array(4)
                  .fill()
                  .map((_, i) => (
                    <span key={i} className="fa-regular fa-star"></span>
                  ))}
              </div>
              <div className="detail-platforms">
                <span className="fa-brands fa-windows"></span>
              </div>
              <div className="productcard-basics__languages">
                <span>English & 12 more</span>
              </div>
            </div>
            <div className="product-actions-body">
              <div className="action-price">
                <h3>$ {data.price}</h3>
                <div className="add-to-card">
                  <a onClick={() => addToBasket(data.id)} id="add" href="#">
                    <span className="fa-solid fa-basket-shopping"></span>Add to
                    cart
                  </a>
                </div>
                <div className="list-it">
                  <p>
                    <span
                      onClick={() => addToFav(data.id)}
                      className={
                        fav.find((item) => item.id === data.id)
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }
                    ></span>
                    <span id="wishlist">Wishlist it</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="game-about">
          <section className="description-container">
            <div className="description">
              <div className="heading-title">
                <h1>Description</h1>
              </div>
              <div className="description-title">
                <p>{data.description}</p>
              </div>
            </div>
            <section className="play-details">
              <div className="game-details-header">
                <h3>Game Details</h3>
              </div>
              <div className="table-row">
                <span>Genre:</span>
                <div className="detail-tags">
                  <a href="#">adventure</a>-<a href="#">action</a>
                </div>
              </div>
              <div className="table-row">
                <span>Tags:</span>
                <div className="detail-tags">
                  <a href="#">Open-world</a>,<a href="#">Fps</a>,
                  <a href="#">Survival</a>
                </div>
              </div>
              <div className="table-row">
                <span>Works on:</span>
                <div className="detail-tags">
                  <h5>Windows(10, 11)</h5>
                </div>
              </div>
              <div className="table-row">
                <span>Release date:</span>
                <div className="detail-tags">
                  <h5>December 31,2023</h5>
                </div>
              </div>
              <div className="table-row">
                <span>Company:</span>
                <div className="detail-tags">
                  <a href="#">GSC Game World</a>/<a href="#">GSC Game World</a>
                </div>
              </div>
              <div className="table-row">
                <span>Links:</span>
                <div className="detail-tags">
                  <a href="#">Forum discussion</a>
                </div>
              </div>
            </section>
          </section>
          <section className="specifications-container">
            <div className="specifications">
              <div className="heading-title">
                <h1>Specifications</h1>
              </div>
              <div className="specifications-table">
                <div className="table-header">
                  <div className="system-requirements__minimum-header">
                    <span>Minimum system requirements:</span>
                  </div>
                  <div className="system-requirements__recommended-header">
                    <span>Recommended system requirements:</span>
                  </div>
                </div>
                <div className="system-requirements-top">
                  <div className="system-requirements-min">
                    <div className="system-requirements-labels">
                      <span>System:</span>
                      <span>Processor:</span>
                      <span>Memory:</span>
                      <span>Graphics:</span>
                      <span>DirectX:</span>
                      <span>Storage:</span>
                      <span>Other:</span>
                    </div>
                    <div className="system-requirements-min-details">
                      <h4>Windows 10 (64-bit)</h4>
                      <h4>Intel Core i5-3570K or AMD FX-8310</h4>
                      <h4>8 GB RAM</h4>
                      <h4>NVIDIA GeForce GTX 970 or AMD Radeon RX 470</h4>
                      <h4>12</h4>
                      <h4>
                        70 GB of available space - SSD recommended (100 GB for
                        offline installer)
                      </h4>
                      <h4>Requires a 64-bit processor and operating system</h4>
                    </div>
                  </div>
                  <div className="system-requirements-rec">
                    <div className="system-requirements-rec-details">
                      <h4>Windows 10 (64-bit)</h4>
                      <h4>Intel Core i7-4790 or AMD Ryzen 3 3200G</h4>
                      <h4>12 GB RAM</h4>
                      <h4>GTX 1060 6GB, GTX 1660 Super or Radeon RX 590</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="similar-container">
            <div className="similar-header">
              <h5>oxşar məhsullar</h5>
            </div>
            <div className="similars">
              {similar
                .filter((a) => a.price && a.image)
                .slice(0, 4)
                .map((a) => (
                  <Link to={`/details/${a.id}`} className="product">
                    <div className="product-image">
                      <img src={a.image} alt="" />
                    </div>
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
                              onClick={stop}
                              className="fa-solid fa-basket-shopping"
                              href="#"
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
        <div className="reviews-container">
          <div className="reviews-header">
            <h5>İstifadəçi rəyləri</h5>
          </div>
          <div className="dots">
            <div className="review-profile">
              <img
                src="https://images.gog.com/b22b5e1aa66ce2027d57e140e28bc5c088c28b3ad523aa8108a0b842f1264003_avm.jpg"
                alt=""
              />
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star star ${
                      index < selectedStars || index < hoveredStars
                        ? "selected"
                        : ""
                    }`}
                    onMouseOver={() => handleStarHover(index)}
                    onMouseLeave={handleStarsLeave}
                    onClick={() => setSelectedStars(index + 1)}
                  ></i>
                ))}
              </div>
            </div>
            <span onClick={handlePost}>+ Rəyinizi əlavə edin</span>
          </div>
          <div className={isPost ? "post-review active-post" : "post-review"}>
            <div className="review-deg">
              <img
                src="https://images.gog.com/b22b5e1aa66ce2027d57e140e28bc5c088c28b3ad523aa8108a0b842f1264003_avm.jpg"
                alt=""
              />
              <div className="review-row">
                <div className="review-degre">
                  <div className="review-stars">
                    {[...Array(5)].map((_, index) => (
                      <i
                        key={index}
                        className={`fa-solid fa-star star ${
                          index < selectedStars || index < hoveredStars
                            ? "selected"
                            : ""
                        }`}
                        onMouseOver={() => handleStarHover(index)}
                        onMouseLeave={handleStarsLeave}
                        onClick={() => setSelectedStars(index + 1)}
                      ></i>
                    ))}
                  </div>
                  <input
                    className="review-input"
                    type="text"
                    placeholder="Adınızı daxil edin..."
                    onChange={postName}
                  />
                </div>
                <textarea
                  name="review-area"
                  id="777"
                  cols="30"
                  rows="10"
                  onChange={postRev}
                  placeholder="Rəyinizi qeyd edin..."
                ></textarea>
                <div className="review-buttons">
                  <button onClick={handlePost} className="cancel">
                    Ləğv et
                  </button>
                  <button onClick={handleSubmit} className="save">
                    Yadda saxla
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="user-reviews">
            {comments.length
              ? comments.map((a) => (
                  <div className="review" key={a.id}>
                    <div className="review-pp">
                      <img
                        src="https://images.gog.com/b22b5e1aa66ce2027d57e140e28bc5c088c28b3ad523aa8108a0b842f1264003_avm.jpg"
                        alt=""
                      />
                      <span>{a.name}</span>
                    </div>
                    <div className="review-info">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`${
                            index < a.selectedStars ? "fa-solid" : "fa-regular"
                          } fa-star`}
                        ></i>
                      ))}
                      <p className="review__text">{a.rev}</p>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </main>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Details);
