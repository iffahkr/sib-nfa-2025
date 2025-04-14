import { Link } from "react-router";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="row text-end">
          <main className="px-3">
            <h1 className="text-center mb-5">About developer</h1>
          </main>
          <div className="col py-5">
            <svg className="bd-placeholder-img rounded-circle mb-3" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </svg>
          </div>
          <div className="col text-start mx-5">
            <h3 className="mt-5 mb-3">Iffah Karimah</h3>
            <p className="lead">Alamat : Depok, Jawa Barat</p>
            <p className="lead">Instagram : @iffahh.k</p>
            <p className="lead">Tiktok : @chichoc15</p>
            <p className="lead">
              <Link to="https://wa.me/62851560918648" className="mt-4 btn btn-lg btn-light fw-bold border-black bg-white">
                Reach out here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
