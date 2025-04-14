import { Link } from "react-router";

export default function Team() {
  return (
    <>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </svg>
            <h2 className="fw-normal">Jevin</h2>
            <p>Jevin adalah pengembang sekaligus head of research dari website bookstore.</p>
            <p>
              <Link to="#" className="btn btn-secondary">
                Contact me
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </svg>
            <h2 className="fw-normal">Ipah</h2>
            <p>Ipah adalah pengembang sekaligus pencetus website bookstore.</p>
            <p>
              <Link to="#" className="btn btn-secondary">
                Contact me
              </Link>
            </p>
          </div>
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </svg>
            <h2 className="fw-normal">Hasan</h2>
            <p>Hasan adalah data engineer yang bertanggung jawab mengelola data website bookstore.</p>
            <p>
              <Link to="#" className="btn btn-secondary">
                Contact me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
