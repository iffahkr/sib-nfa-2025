import { Link } from "react-router";

export default function ProductList() {
  return (
    <>
      <div className="container">
        {/* Section 1 */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Selling Book</h1>
              <p className="lead text-body-secondary">Kumpulan buku terlaris sepanjang periode 2020 hingga saat ini dengan total penjualan 10.000+ eksemplar.</p>
              <p>
                <Link to="" className="btn btn-primary my-2 m-2">
                  Views
                </Link>
                <Link to="" className="btn btn-secondary my-2">
                  Other Books
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse4.mm.bing.net/th?id=OIP.Wx8qwRRL6fmH_ZQMJe-bugHaK0&w=200&h=292&c=7" alt="Jika Kita Tak Pernah Jadi Apa-Apa" />
                  <div className="card-body">
                    <h5 className="mb-2">Jika Kita Tak Pernah Jadi Apa-Apa</h5>
                    <p className="card-text">Kumpulan narasi pendek yang menggambarkan kekhawatiran dan harapan generasi muda terhadap masa depan.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Motivation</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse3.mm.bing.net/th?id=OIP.40YdU1lR2EQdFRfSxnTERQHaHa&pid=Api" alt="Atomic Habits" />
                  <div className="card-body">
                    <h5 className="mb-2">Atomic Habits</h5>
                    <p className="card-text">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Self-Improvement</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse3.mm.bing.net/th?id=OIP.sGaVLhkjdOt1YehioUoO7gHaJ4&pid=Api" alt="Perjamuan Khong Guan" />
                  <div className="card-body">
                    <h5 className="mb-2">Perjamuan Khong Guan</h5>
                    <p className="card-text">Kaleng Khong Guan menjadi simbol kehidupan dalam kumpulan puisi ini.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Literature</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse2.mm.bing.net/th?id=OIP.zdLSrFiT25J6ae5oyYVgIwHaIu&pid=Api" alt="Generasi Kembali ke Akar" />
                  <div className="card-body">
                    <h5 className="mb-2">Generasi Kembali ke Akar</h5>
                    <p className="card-text">Macam-macam karakteristik generasi di Indonesia, termasuk milenial dan gen-Z, serta pentingnya kembali memahami akar budaya dan identitas Indonesia.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Social</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://ebook.twointomedia.com/wp-content/uploads/2023/03/Tanah-Para-Bandit-by-Tere-Liye.jpeg" alt="Tanah Para Bandit" />
                  <div className="card-body">
                    <h5 className="mb-2">Tanah Para Bandit</h5>
                    <p className="card-text">Perjuangan dan petualangan di tengah konflik yang melibatkan para bandit.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Novel</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse3.mm.bing.net/th?id=OIP.RG1fS_3MJP4lQ0eznKJG2gHaK-&w=200&h=296&c=7" alt="Home Sweet Loan" />
                  <div className="card-body">
                    <h5 className="mb-2">Home Sweet Loan</h5>
                    <p className="card-text">Menyoroti perjuangan kaum kelas menengah di Jakarta untuk memiliki tempat tinggal serta kisah cinta dan persahabatan empat orang sahabat dengan latar belakang berbeda.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Novel</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse2.mm.bing.net/th?id=OIP.aPbHOpJ1rMk_luhOKPzzOwHaE8&w=200&h=133&c=7" alt="H.R. Rasuna Said: Singa Podium" />
                  <div className="card-body">
                    <h5 className="mb-2">H.R. Rasuna Said: Singa Podium</h5>
                    <p className="card-text">Kegigihan perjuangan pahlawan nasional Rasuna Said dalam memperjuangkan kemerdekaan dan kemajuan kaumnya, dari masa kecilnya di Maninjau hingga kiprahnya di dunia politik dan pendidikan. </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">History</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse2.mm.bing.net/th?id=OIP.FHXCFcl-mOyS2hPhlu080gHaK0&w=200&h=292&c=7" alt="Filosofi Teras" />
                  <div className="card-body">
                    <h5 className="mb-2">Filosofi Teras</h5>
                    <p className="card-text">
                      Memperkenalkan ajaran Stoikisme dalam konteks kehidupan modern. Dengan bahasa yang ringan, membantu pembaca mengelola emosi negatif dan membentuk mental yang tangguh dalam menghadapi tantangan hidup.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Philosophy</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse1.mm.bing.net/th?id=OIP.-FkAx5gsmOcOMEhkIHblMgHaLU&w=200&h=305&c=7" alt="The 5AM Club" />
                  <div className="card-body">
                    <h5 className="mb-2">The 5AM Club</h5>
                    <p className="card-text">Pentingnya rutinitas pagi dalam meningkatkan produktivitas dan kebahagiaan.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Self-Improvement</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <section className="py-5 text-center container">
          <div className="row pt-lg-5 mb-2">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Most searched books</h1>
              <p className="lead text-body-secondary">Kumpulan buku yang paling dicari sepanjang tahun 2025.</p>
            </div>
          </div>
        </section>
        
        <div className="album py-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse4.mm.bing.net/th?id=OIP.Wx8qwRRL6fmH_ZQMJe-bugHaK0&w=200&h=292&c=7" alt="Jika Kita Tak Pernah Jadi Apa-Apa" />
                  <div className="card-body">
                    <h5 className="mb-2">Jika Kita Tak Pernah Jadi Apa-Apa</h5>
                    <p className="card-text">Kumpulan narasi pendek yang menggambarkan kekhawatiran dan harapan generasi muda terhadap masa depan.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Motivation</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse3.mm.bing.net/th?id=OIP.40YdU1lR2EQdFRfSxnTERQHaHa&pid=Api" alt="Atomic Habits" />
                  <div className="card-body">
                    <h5 className="mb-2">Atomic Habits</h5>
                    <p className="card-text">Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Self-Improvement</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://ebook.twointomedia.com/wp-content/uploads/2023/03/Tanah-Para-Bandit-by-Tere-Liye.jpeg" alt="Tanah Para Bandit" />
                  <div className="card-body">
                    <h5 className="mb-2">Tanah Para Bandit</h5>
                    <p className="card-text">Perjuangan dan petualangan di tengah konflik yang melibatkan para bandit.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Novel</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse3.mm.bing.net/th?id=OIP.RG1fS_3MJP4lQ0eznKJG2gHaK-&w=200&h=296&c=7" alt="Home Sweet Loan" />
                  <div className="card-body">
                    <h5 className="mb-2">Home Sweet Loan</h5>
                    <p className="card-text">Menyoroti perjuangan kaum kelas menengah di Jakarta untuk memiliki tempat tinggal serta kisah cinta dan persahabatan empat orang sahabat dengan latar belakang berbeda.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Novel</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card shadow-sm">
                  <img className="bd-placeholder-img card-img-top" width="100%" height="400" src="https://tse2.mm.bing.net/th?id=OIP.FHXCFcl-mOyS2hPhlu080gHaK0&w=200&h=292&c=7" alt="Filosofi Teras" />
                  <div className="card-body">
                    <h5 className="mb-2">Filosofi Teras</h5>
                    <p className="card-text">
                      Memperkenalkan ajaran Stoikisme dalam konteks kehidupan modern. Dengan bahasa yang ringan, membantu pembaca mengelola emosi negatif dan membentuk mental yang tangguh dalam menghadapi tantangan hidup.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Buy
                        </button>
                      </div>
                      <small className="text-body-secondary">Philosophy</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
