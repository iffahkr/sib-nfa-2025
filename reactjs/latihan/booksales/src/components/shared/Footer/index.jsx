import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link px-2 text-body-secondary">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teams" className="nav-link px-2 text-body-secondary">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link px-2 text-body-secondary">
                Contacts
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 NF Academy</p>
        </footer>
      </div>
    </>
  );
}
