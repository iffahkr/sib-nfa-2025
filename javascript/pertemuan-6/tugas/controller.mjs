import users from "./data.mjs";

// Metode untuk menampilkan data
const index = () => {
  console.log("\n📜 Daftar pengguna aktif :");
  users.map((user) => {
    console.log(`
        Nama\t: ${user.nama}
        Umur\t: ${user.umur}
        Alamat\t: ${user.alamat}
        Email\t: ${user.email}
        `);
  });
};

// Metode untuk menambahkan data
const store = (nama, umur, alamat, email) => {
  console.log("\n✅ Pengguna berhasil ditambahkan");
  users.push({ nama, umur, alamat, email });
  console.log(
    ` 
      Nama pengguna\t: ${nama}
      Umur\t\t\t: ${umur}
      Alamat\t\t: ${alamat}
      Email\t\t\t: ${email}
      `
  );
};

// Metode untuk menghapus data
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
    console.log(`\n✅ Pengguna dengan index ${index} berhasil dihapus`);
  } else {
    console.log(`\n❌ Pengguna dengan index ${index} tidak ditemukan.`);
  }
};

export { index, store, destroy };
