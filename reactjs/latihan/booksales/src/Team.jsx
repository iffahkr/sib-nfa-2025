function Team() {
  return (
    <>
      <div className="container text-center">
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
              <a className="btn btn-secondary" href="#">
                Contact me
              </a>
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
              <a className="btn btn-secondary" href="#">
                Contact me
              </a>
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
              <a className="btn btn-secondary" href="#">
                Contact me
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
                <a href="./App.jsx" class="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="./Book.jsx" class="nav-link px-2 text-body-secondary">
                  Book
                </a>
              </li>
              <li class="nav-item">
                <a href="./Team.jsx" class="nav-link px-2 text-body-secondary">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a href="./Contact.jsx" class="nav-link px-2 text-body-secondary">
                  Contact
                </a>
              </li>
            </ul>
            <p class="text-center text-body-secondary">&copy; 2025 NF Academy</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Team;
