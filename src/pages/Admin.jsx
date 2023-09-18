import { useState, useEffect, useParams } from "react";
import AdminLogin from "../components/AdminLogin";
import { connect } from "react-redux";
import AdminPagination from "../components/AdminPagination";
function Admin({ login, psw, products, setProducts, dispatch }) {
  const [isForm, setForm] = useState(false);
  const [isAdd, setAdd] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [isName, setName] = useState("");
  const [isQiymet, setQiymet] = useState("");
  const [isDesc, setDesc] = useState("");
  const [isCate, setCate] = useState("");
  const [isTitle, setTitle] = useState("");
  const [isPrice, setPrice] = useState("");
  const [isDes, setDes] = useState("");
  const [isCategory, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [editProductId, setEditProductId] = useState(null);
  const recordPerPage = 10;
  const totalPageCount = Math.ceil(products.length / recordPerPage);
  let start = (activePage - 1) * recordPerPage;
  let end = start + recordPerPage;
  const toggleForm = () => {
    setForm(!isForm);
  };
  const toggleAdd = () => {
    setAdd(!isAdd);
  };
  const productEdit = (id) => {
    setEditProductId(id);
  };
  const productDelete = (id) => {
    setDeleteProductId(id);
    setDelete(!isDelete);
  };
  const toggleDelete = (id) => {
    setDelete(!isDelete);
  };
  const searchTerm = (e) => {
    setSearch(e.target.value);
  };
  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputPrice = (e) => {
    setPrice(e.target.value);
  };
  const inputDes = (e) => {
    setDes(e.target.value);
  };
  const inputCategory = (e) => {
    setCategory(e.target.value);
  };
  const addTitle = (e) => {
    setName(e.target.value);
  };
  const addPrice = (e) => {
    setQiymet(e.target.value);
  };
  const addDes = (e) => {
    setDesc(e.target.value);
  };
  const addCategory = (e) => {
    setCate(e.target.value);
  };
  const handleAdd = () => {
    const addProduct = {
      title: isName,
      price: isQiymet,
      description: isDesc,
      category: isCate,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Mehsul elave edildi:", data);
      })
      .catch((error) => {
        console.error("Mehsul elave edilerken bir xeta bas verdi:", error);
      });
  };

  const handleEdit = (id) => {
    const editedProduct = {
      title: isTitle,
      price: isPrice,
      description: isDes,
      category: isCategory,
    };

    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => {
        if (response.ok) {
          setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) => {
              if (product.id === id) {
                return {
                  ...product,
                  ...editedProduct,
                };
              }
              return product;
            });
            return updatedProducts;
          });
        } else {
          console.log("Mehsulda deyisiklik ederken xeta bas verdi");
        }
      })
      .catch((error) => {
        console.log("Bir Xeta bas verdi:", error);
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          let updatedProducts = products.filter((product) => product.id !== id);
          dispatch({
            type: "SET_PRODUCTS",
            payload: updatedProducts,
          });
        } else {
          console.log("Mehsul silinerken bir xeta bas verdi.");
        }
      })
      .catch((error) => {
        console.log("Bir xeta bas verdi:", error);
      });
  };
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <AdminLogin />
      <div
        className={
          isForm
            ? "admin-edit-container active-container"
            : "admin-edit-container"
        }
      >
        <div className={isForm ? "admin-edit active-modal" : "admin-edit"}>
          <i
            onClick={toggleForm}
            id="form-close"
            className="fa-solid fa-xmark"
          ></i>
          <form action="#" id="data">
            <label htmlFor="#">
              <h4>Ad :</h4>{" "}
              <input
                onChange={inputTitle}
                type="text"
                placeholder="Ad Daxil Et..."
              />
            </label>
            <label htmlFor="#">
              <h4>Qiymət :</h4>{" "}
              <input
                type="number"
                onChange={inputPrice}
                placeholder="Qiymət Daxil Et..."
              />
            </label>
            <label htmlFor="#">
              <h4>Təsvir :</h4>{" "}
              <input
                type="number"
                onChange={inputDes}
                placeholder="Təsvir Daxil Et..."
              />
            </label>
            <label htmlFor="#">
              <h4>Kateqoriya :</h4>{" "}
              <input
                type="text"
                onChange={inputCategory}
                placeholder="Kateqoriya Daxil Et..."
              />
            </label>
            <button
              class="Btn"
              onClick={() => {
                handleEdit(editProductId);
              }}
            >
              Yadda saxla
              <svg class="svgIcon" viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
      <div className={isAdd ? "admin-add active-modal" : "admin-add"}>
        <form action="#" id="data">
          <i
            onClick={toggleAdd}
            id="form-close"
            className="fa-solid fa-xmark"
          ></i>
          <label htmlFor="#">
            <h4>Ad :</h4>{" "}
            <input
              onChange={addTitle}
              type="text"
              placeholder="Ad Daxil Et..."
            />
          </label>
          <label htmlFor="#">
            <h4>Qiymət :</h4>{" "}
            <input
              type="number"
              onChange={addPrice}
              placeholder="Qiymət Daxil Et..."
            />
          </label>
          <label htmlFor="#">
            <h4>Təsvir :</h4>{" "}
            <input
              type="text"
              onChange={addDes}
              placeholder="Təsvir Daxil Et..."
            />
          </label>
          <label htmlFor="#">
            <h4>Kateqoriya :</h4>{" "}
            <input
              type="text"
              onChange={addCategory}
              placeholder="Kateqoriya Daxil Et..."
            />
          </label>
          <button
            class="Btn"
            onClick={() => {
              handleAdd();
            }}
          >
            Yadda saxla
            <svg class="svgIcon" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path>
            </svg>
          </button>
        </form>
      </div>
      <div
        className={isDelete ? "admin-delete active-container" : "admin-delete"}
      >
        <div
          id="myModal"
          className={isDelete ? "modal fade modal-active" : "modal fade"}
        >
          <div className="modal-dialog modal-confirm">
            <div className="modal-content">
              <div className="modal-header flex-column">
                <div className="icon-box">
                  <i className="fa-solid fa-ban"></i>
                </div>
                <h4 className="modal-title w-100">Əminsinizmi?</h4>
                <button
                  type="button"
                  onClick={toggleDelete}
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Bu qeydləri həqiqətən silmək istəyirsiniz? Bu prosesi geri
                  qaytarmaq olmaz.
                </p>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={toggleDelete}
                >
                  Ləğv et
                </button>
                <button
                  onClick={() => {
                    handleDelete(deleteProductId), toggleDelete();
                  }}
                  type="button"
                  className="btn btn-danger"
                >
                  Sil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        className={
          login === "admin" && psw === "admin"
            ? "admin-main active-container"
            : "admin-main"
        }
      >
        <div className="admin-head">
          <div className="head-container">
            <div className="head-left">
              <h2>Admin Panel</h2>
            </div>
            <div className="head-right">
              <span className="fa-regular fa-message"></span>
              <span className="fa-solid fa-gear" id="set"></span>
            </div>
          </div>
        </div>
        <section
          className={
            login === "admin" && psw === "admin"
              ? "admin-container-active"
              : "admin-container"
          }
        >
          <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="sales-container">
              <div className="sales-head">
                <div className="sales-left">
                  <h3>Məhsullar</h3>
                </div>
                <div className="sales-right">
                  <h3 id="active-mod">Bütün məhsullar</h3>
                  <h3>Silinənlər</h3>
                </div>
              </div>
              <div className="sales-option">
                <input
                  onChange={searchTerm}
                  type="text"
                  placeholder="Axtarış, edin..."
                />
                <button onClick={toggleAdd}>Məhsul əlavə et</button>
              </div>
              <div className="data-table">
                <table>
                  <thead>
                    <tr>
                      <th>İzləmə İd</th>
                      <th>Məhsul</th>
                      <th>Qiymət</th>
                      <th>Ödəniş rejimi</th>
                      <th>Funksiya</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products
                      .filter((a) =>
                        a.title.toLowerCase().includes(search.toLowerCase())
                      )
                      .slice(start, end)
                      .map((a) => (
                        <tr key={a.id}>
                          <td>
                            <h3>#{a.id}</h3>
                          </td>
                          <td>
                            <div className="sales-about">
                              <img src={a.image} alt="" />
                              <span>{a.title}</span>
                            </div>
                          </td>
                          <td>
                            <h3>${a.price}</h3>
                          </td>
                          <td>
                            <h3>Online Payment</h3>
                          </td>
                          <td className="function">
                            <i
                              onClick={() => {
                                toggleForm(), productEdit(a.id);
                              }}
                              className="fa-regular fa-pen-to-square"
                            ></i>
                            <i
                              onClick={() => {
                                toggleDelete(), productDelete(a.id);
                              }}
                              className="fa-regular fa-trash-can"
                            ></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <AdminPagination
                totalPageCount={totalPageCount}
                activePage={activePage}
                setActivePage={setActivePage}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
const t = (a) => a;
export default connect(t)(Admin);
