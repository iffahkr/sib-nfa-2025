import { Link } from "react-router";

export default function LoginForm() {
  return (
    <>
      <div className="container">
        <main className="form-signin w-100 m-auto">
          <form>
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none my-5">
              <i className="fa-solid fa-book-open-reader fa-beat" style={{ color: "#B197FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </Link>
            <h1 className="h3 mb-3 fw-normal">Login here...</h1>

            <div className="form-floating my-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="checkDefault" />
              <label className="form-check-label" htmlFor="checkDefault">
                Remember me
              </label>
            </div>
            <Link to="/">
              <button className="btn btn-primary w-100 py-2" type="submit">
                Login
              </button>
            </Link>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2025 NF Academy</p>
          </form>
        </main>
      </div>
    </>
  );
}
