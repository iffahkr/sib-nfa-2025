import { Link } from "react-router";

export default function RegisterForm() {
  return (
    <>
      <div className="container">
        <main className="form-signin w-100 m-auto">
          <form>
            <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none my-5">
              <i className="fa-solid fa-book-open-reader fa-beat" style={{ color: "#B197FC" }}></i>
              <span className="ms-2 fs-4">bookstore</span>
            </Link>
            <h1 className="h3 mb-3 fw-normal">Sign in for great experience...</h1>

            <div className="form-floating my-2">
              <input type="text" className="form-control" id="floatingName" placeholder="Example Name" />
              <label htmlFor="floatingName">Name</label>
            </div>
            <div className="form-floating my-2">
              <input type="number" className="form-control" id="floatingPhoneNumber" placeholder="+62" />
              <label htmlFor="floatingPhoneNumber">Phone Number</label>
            </div>
            <div className="form-floating my-2">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating my-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating my-2">
              <input type="password" className="form-control" id="floatingPasswordCheck" placeholder="Password" />
              <label htmlFor="floatingPasswordCheck">Password</label>
            </div>

            <Link to="/">
              <button className="btn btn-primary w-100 py-2 my-5" type="submit">
                Sign in
              </button>
            </Link>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2025 NF Academy</p>
          </form>
        </main>
      </div>
    </>
  );
}
