import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
function SearchResult({
  search,
  searchFunction,
  products,
  isSearch,
  handleClear,
}) {
  return (
    <>
      {search.length > 0 ? (
        <div className="search-result-container">
          <div className="search-results">
            {products
              .filter((a) =>
                a.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((a) => (
                <Link
                  to={`details/${a.id}`}
                  key={a.id}
                  onClick={() => {
                    searchFunction(), handleClear();
                  }}
                  className="result-product"
                >
                  <div className="result-image">
                    <img src={a.image} alt="" />
                  </div>
                  <div className="result-content">
                    <div className="result-title">
                      <h3>{a.title}</h3>
                      <p>{a.description ? a.description.slice(0, 70) : ""}</p>
                    </div>
                    <div className="result-rating">
                      {Array(4)
                        .fill()
                        .map((_, i) => (
                          <span key={i} className="fa-regular fa-star"></span>
                        ))}
                    </div>
                    <div className="result-platforms">
                      <span className="fa-brands fa-windows"></span>
                    </div>
                    <div className="result-price">
                      <a href="#">${a.price ? a.price : "Not Available"}</a>
                    </div>
                  </div>
                </Link>
              ))}
            {products.filter(
              (a) => !a.title.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && <p className="not-found">Not Found</p>}
          </div>
        </div>
      ) : null}
    </>
  );
}
const t = (a) => a;
export default connect(t)(SearchResult);
