import { useState, useEffect } from "react";
import CatalogProducts from "../components/CatalogProducts";
import Pagination from "../components/Pagination";
import { connect } from "react-redux";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Store({ lang, products }) {
  const [activePage, setActivePage] = useState(1);
  const recordPerPage = 12;
  const totalPageCount = Math.ceil(products.length / recordPerPage);
  let start = (activePage - 1) * recordPerPage;
  let end = start + recordPerPage;
  const [value, setRange] = useState(29.99);
  const [isOpen, setOpen] = useState(false);
  const [isGenres, setGenres] = useState(false);
  const [isSort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  //FILTER =>>
  const [isTemp, setTemp] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [targetNameValue, setTargetNameValue] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [isAction, setAction] = useState(false);
  const [isAdventure, setAdventure] = useState(false);
  const [isRyo, setRyo] = useState(false);
  const [isRole, setRole] = useState(false);
  const [isShooter, setShooter] = useState(false);
  const [isWorld, setWorld] = useState(false);
  const [isPrice, setPrice] = useState(false);
  const [isAll, setAll] = useState(false);
  const [isLow, setLow] = useState(false);
  const [isHigh, setHigh] = useState(false);
  const [isA, setA] = useState(false);
  const [isZ, setZ] = useState(false);
  const [catalogDiv, setCatalogDiv] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isNew, setNew] = useState(false);
  const [isComing, setComing] = useState(false);
  const [isEarly, setEarly] = useState(false);
  const [isUpd, setUpd] = useState(false);
  const rangeChange = (event) => {
    const value = event.target.value;
    setRange(value);
  };
  useEffect(() => {
    let filteredProducts = products;

    if (isAction) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === "Fəaliyyət, Hekayə" ||
          products.category === "Fəaliyyət, Hekayə, Açıq Dünya" ||
          products.category === "Fəaliyyət, Macəra"
      );
    }
    if (isAdventure) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === "Fəaliyyət, Macəra, Açıq Dünya" ||
          products.category === "Fəaliyyət, Macəra, RPG"
      );
    }
    if (isRyo) {
      filteredProducts = filteredProducts.filter(
        (products) => products.category === "Fəaliyyət, Macəra, RYO"
      );
    }
    if (isRole) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === "Fəaliyyət, Macəra, RolePlay" ||
          products.category === "Fəaliyyət,RolePlay, Hekayə, Məcara" ||
          products.category === "RolePlay"
      );
    }
    if (isShooter) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === "Atıcı, Birinci Şəxs" ||
          products.category === "açıq dünya ,snayper" ||
          products.category1 === "atıcı "
      );
    }
    if (isWorld) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === "Fəaliyyət, Hekayə, Açıq Dünya" ||
          products.category === "Fəaliyyət, Macəra, Açıq Dünya" ||
          products.category === "Atıcı, Birinci Şəxs" ||
          products.category === "açıq dünya ,snayper" ||
          products.category1 === "atıcı "
      );
    }
    if (isAll) {
      filteredProducts = filteredProducts.filter(
        (products) => products.id >= 18 && products.id <= 36
      );
    }
    if (isLow) {
      const sortedProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
      filteredProducts = sortedProducts;
    }
    if (isHigh) {
      const sortedProducts = [...filteredProducts].sort(
        (a, b) => b.price - a.price
      );
      filteredProducts = sortedProducts;
    }
    if (isA) {
      const sortedProducts = [...filteredProducts].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      filteredProducts = sortedProducts;
    }
    if (isZ) {
      const sortedProducts = [...filteredProducts].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      filteredProducts = sortedProducts;
    }
    if (isPrice) {
      filteredProducts = filteredProducts.filter(
        (products) => products.price <= value
      );
    }
    if (isNew) {
      filteredProducts = filteredProducts.filter(
        (products) => products.id >= 109 && products.id <= 117
      );
    }
    if (isComing) {
      filteredProducts = filteredProducts.filter(
        (products) => products.id >= 66 && products.id <= 78
      );
    }
    if (isEarly) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          (products.id >= 116 && products.id <= 119) || products.id === 23
      );
    }
    setTemp(filteredProducts);
  }, [
    products,
    isAction,
    isAdventure,
    isRyo,
    isRole,
    isShooter,
    isWorld,
    isAll,
    isPrice,
    isLow,
    isHigh,
    isA,
    isZ,
    isNew,
    isComing,
    isEarly,
  ]);
  const clearFilter = () => {
    setTemp(products);
    setAction(false);
    setAdventure(false);
    setRyo(false);
    setRole(false);
    setShooter(false);
    setWorld(false);
    setAll(false);
    setLow(false);
    setHigh(false);
    setA(false);
    setZ(false);
    setPrice(false);
    setNew(false);
    setComing(false);
    setEarly(false);
  };
  const handleNewCheck = () => {
    setNew(!isNew);
  };
  const handleComingCheck = () => {
    setComing(!isComing);
  };
  const handleEarlyCheck = () => {
    setEarly(!isEarly);
  };
  const handleActionCheck = () => {
    setAction(!isAction);
  };
  const handleAdventureCheck = () => {
    setAdventure(!isAdventure);
  };
  const handleRyoCheck = () => {
    setRyo(!isRyo);
  };
  const handleShooterCheck = () => {
    setShooter(!isShooter);
  };
  const handleRoleCheck = () => {
    setRole(!isRole);
  };
  const handleWorldCheck = () => {
    setWorld(!isWorld);
  };
  const handleAllCheck = () => {
    setAll(!isAll);
    targetName(event);
  };
  const handleLowCheck = () => {
    setLow(!isLow);
    targetName(event);
  };
  const handleHighCheck = () => {
    setHigh(!isHigh);
  };
  const handleACheck = () => {
    setA(!isA);
  };
  const handleZCheck = () => {
    setZ(!isZ);
  };
  const handleChangePrice = () => {
    setPrice(!isPrice);
  };
  const handleCatalogDiv = () => {
    setCatalogDiv(!catalogDiv);
  };
  // -------------------------------------
  const openDiv = () => {
    setOpen(!isOpen);
  };
  const openGenres = () => {
    setGenres(!isGenres);
  };
  const openSort = () => {
    setSort(!isSort);
  };
  const openUpd = () => {
    setUpd(!isUpd);
  };
  const targetName = (event) => {
    setTargetNameValue(event.target.nextElementSibling.textContent);
  };
  const handleRadioCheck = () => {
    setChecked(true);
  };
  const findProduct = products.find((product) => product.id === 120);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ScrollUpButton />
      <div className="app-bg">
        <div className="catalog__sort">
          <div className="sort-mobile">
            <span>Sort</span>
          </div>
          <div onClick={handleCatalogDiv} className="game-filtering">
            <span>Filter</span>
          </div>
        </div>
        <div
          className={catalogDiv ? "catalog-div catalog-active" : "catalog-div"}
        >
          <span onClick={handleCatalogDiv}>X</span>
        </div>
        <div className="app-wrapper-bg">
          <div className="app-wrapper-about container">
            <div className="app-wrapper-details">
              <h2>{findProduct.title}</h2>
              <p>{findProduct.description}</p>
              <Link
                to={`/details/${findProduct.id}`}
                className="app-btn"
                href="#"
              >
                Əlavə et
              </Link>
            </div>
            {/* <div className="about-wrapper-logo">
              <img
                src="https://images-4.gog-statics.com/151b287a09945a2e01c581a3dd4db8b3a626cce751b2cbe9bf1bdbc8ed0fe59d_takeover_big_logo.webp"
                alt=""
              />
            </div> */}
          </div>
        </div>
        <div className="app container">
          <div className="catalog-page">
            <div className="catalog-search">
              <span className="fa-solid fa-magnifying-glass"></span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Mağazada başlığa, naşirə və ya etiketə görə axtarın"
              />
            </div>
            <div className="page-header">
              <h1>Pc games / All Games ({products.length})</h1>
            </div>
          </div>
          <div className="filters-container">
            <div
              className={
                catalogDiv ? "filters-left filters-active" : "filters-left"
              }
            >
              <div
                className={
                  isOpen ? "filter-header slide-height" : "filter-header"
                }
              >
                <h4 onClick={openDiv}>
                  <span
                    style={{
                      transform: isOpen ? "rotate(0)" : "rotate(90deg)",
                    }}
                  ></span>{" "}
                  Qiymət aralığı
                </h4>
                <div
                  className={
                    isOpen ? "filters-range" : "filters-range active slide-down"
                  }
                >
                  <input
                    id="myRange"
                    onChange={(event) => {
                      rangeChange(event);
                      handleChangePrice();
                    }}
                    type="range"
                    className="custom-range"
                  />
                  <div className="options">
                    <input type="text" value={1} />
                    <span>-</span>
                    <input type="text" value={value} />
                  </div>
                </div>
              </div>
              <div
                className={
                  isGenres ? "filters-label genres-height" : "filters-label"
                }
              >
                <h4 onClick={openGenres}>
                  {" "}
                  <span
                    style={{
                      transform: isGenres ? "rotate(0)" : "rotate(90deg)",
                    }}
                  ></span>{" "}
                  Janrlar
                </h4>
                <div
                  className={
                    isGenres ? "start-labels" : "start-labels active slide-down"
                  }
                >
                  <label className="start-label">
                    <input
                      name="genres-action"
                      htmlFor="action"
                      type="checkbox"
                      checked={isAction}
                      onClick={() => handleActionCheck()}
                      // onChange={(e) => setActionChecked(e.target.checked)}
                    />
                    <h5 name="genres-action" htmlFor="action">
                      Fəaliyyət
                    </h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="adventure"
                      type="checkbox"
                      checked={isAdventure}
                      onClick={handleAdventureCheck}
                    />
                    <h5>Macəra</h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="ryo"
                      type="checkbox"
                      checked={isRyo}
                      onClick={handleRyoCheck}
                    />
                    <h5>RYO</h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="action"
                      type="checkbox"
                      onClick={handleRoleCheck}
                    />
                    <h5>RolePlay</h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="action"
                      type="checkbox"
                      onClick={handleWorldCheck}
                    />
                    <h5>Açıq dünya</h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="action"
                      type="checkbox"
                      onClick={handleShooterCheck}
                    />
                    <h5>Atıcı</h5>
                  </label>
                </div>
              </div>
              <div className={isUpd ? "filters-status genres-height" : "filters-status"}>
                <h4 onClick={openUpd}>
                  {" "}
                  <span
                    style={{
                      transform: isUpd ? "rotate(0)" : "rotate(90deg)",
                    }}
                  ></span>{" "}
                  Buraxılış statusu
                </h4>
                <div style={isUpd ? {opacity: "0", visibility: "hidden"} : {}} className="status-labels">
                  <label  className="start-label">
                    <input
                      name="genres-new"
                      htmlFor="new"
                      type="checkbox"
                      checked={isNew}
                      onClick={() => handleNewCheck()}
                      // onChange={(e) => setActionChecked(e.target.checked)}
                    />
                    <h5 name="genres-action" htmlFor="new">
                      Yeni gələnlər
                    </h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="upcoming"
                      type="checkbox"
                      checked={isComing}
                      onClick={handleComingCheck}
                    />
                    <h5>Yaxında</h5>
                  </label>
                  <label className="start-label">
                    <input
                      htmlFor="early"
                      type="checkbox"
                      checked={isEarly}
                      onClick={handleEarlyCheck}
                    />
                    <h5>Erkən giriş</h5>
                  </label>
                </div>
              </div>
              <div className="reset-filter">
                <div onClick={clearFilter} className="clear">
                  <span>Sıfırla</span>
                  {/* <span className="cross"></span> */}
                </div>
              </div>
            </div>
            <div className="filters-right">
              <div className="catalog-navigation">
                <Pagination
                  activePage={activePage}
                  totalPageCount={totalPageCount}
                  setActivePage={setActivePage}
                />
                <div onClick={openSort} className="sort">
                  <p className="sort-label">Sırala:</p>
                  <p className="sort-active">
                    {targetNameValue
                      ? targetNameValue
                      : "Ən çox satılan (son vaxtlar)"}
                  </p>

                  <span></span>
                </div>
              </div>
              <div
                className={
                  isSort ? "sort-dropdown active-dropdown" : "sort-dropdown"
                }
              >
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    checked={!isChecked}
                  />
                  <span>Ən çox satılan (son vaxtlar)</span>
                </label>
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    onChange={handleAllCheck}
                  />
                  <span>Ən çox satılan (hər zaman)</span>
                </label>
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    onChange={handleLowCheck}
                  />
                  <span>Qiymət (ən aşağıdan)</span>
                </label>
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    onChange={handleHighCheck}
                  />
                  <span>Qiymət (ən yüksəkdən)</span>
                </label>
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    onChange={handleACheck}
                    checked={isA}
                  />
                  <span>Başlıq (A-dan Z-yə)</span>
                </label>{" "}
                <label className="sort__checkbox-label">
                  <input
                    className="checkbox__input "
                    type="radio"
                    name="radio"
                    onChange={handleZCheck}
                    checked={isZ}
                  />
                  <span>Başlıq (Z-dən A-ya)</span>
                </label>
              </div>
              <div>
                <div className="catalog-products">
                  <CatalogProducts
                    search={search}
                    setSearch={setSearch}
                    start={start}
                    end={end}
                    isTemp={isTemp}
                    activePage={activePage}
                    totalPageCount={totalPageCount}
                    setActivePage={setActivePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
const t = (a) => a;
export default connect(t)(Store);
