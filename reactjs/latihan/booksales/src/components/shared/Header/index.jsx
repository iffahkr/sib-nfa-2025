import { Link } from "react-router";
import "./Header.css";
const Header = () => {

  return (
    <>
        <header id="header" className="navbar sticky-top d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-4 px-5 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book-open-reader fa-beat" style={{ color: "#B197FC" }}></i>
              <span id="brand" className="ms-2 fs-4">
                bookstore
              </span>
            </Link>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" id="navigation" className="nav-link px-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books" id="navigation" className="nav-link px-2">
                Books
              </Link>
            </li>
            <li>
              <Link to="/teams" id="navigation" className="nav-link px-2">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/contacts" id="navigation" className="nav-link px-2">
                Contacts
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <Link to="/login" id="login" role="button" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/register" id="register" type="button" className="btn btn-primary">
              Register
            </Link>
          </div>
        </header>
    </>
  );
};

export default Header;
