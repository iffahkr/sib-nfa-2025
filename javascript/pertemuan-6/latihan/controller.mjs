import users from "./data.mjs";

const index = () => {
  console.log("Daftar pengguna:");
  users.forEach(({ nama, umur, alamat }) => {
    console.log(`
            Nama: ${nama},
            Umur: ${umur},
            Alamat: ${alamat},
            `);
  });
};

const destroy = (index) => {
  if (index >= 0 && index.length != 0) {
    users.splice(index, 1);
    console.log("Pengguna berhasil dihapus.");
  } else {
    console.log("Pengguna tidak valid.");
  }
};

const store = () => {};

export { index, store, destroy };
