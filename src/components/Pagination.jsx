import { useEffect } from "react";

function Pagination({ totalPageCount, activePage, setActivePage }) {
  let start = activePage - 3 > 0 ? activePage - 3 : 1;
  let pages = [];
  for (let i = start; i <= activePage + 3 && i <= totalPageCount; i++) {
    pages.push(
      <li
        onClick={() => {
          setActivePage(i), topTo();
        }}
        key={i}
        className={i === activePage ? "active" : ""}
      >
        {i}
      </li>
    );
  }
  const topTo = () => {
    window.scrollTo(0, 300);
  };
  const goToPreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const goToNextPage = () => {
    setActivePage(activePage + 1);
  };
  return (
    <ul className="pagination">
      <span onClick={goToPreviousPage} className="rot"></span>
      {pages}
      <span onClick={goToNextPage}></span>
    </ul>
  );
}

export default Pagination;
