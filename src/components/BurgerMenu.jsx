import { Link } from "react-router-dom";
function BurgerMenu({ menu }) {
  return (
    <>
      <div className={menu ? "burger active" : "burger"}>
        <ul>
          <li>
            <Link to={"/store"} href="#">
              Store
            </Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <a href="#">Fps</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
