import React from "react";

function FilteredProducts() {
  return (
    <>
      <section className="filtered-products">
        <div className="filtered-product">
          <div className="filtered-product-image">
            <img src={a.image} alt="" />
          </div>
          <div className="filtered-product-info">
            <div className="filtered-product-title">
              <h3>{a.title.slice(0, 22)}</h3>
            </div>
            <div className="filtered-product-title-info">
              <div className="filtered-product-platforms">
                <span className="fa-brands fa-windows"></span>
              </div>
              <div className="filtered-product-price">
                <h4>{a.available}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilteredProducts;
