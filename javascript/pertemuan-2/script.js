// Array data pegawai
const dataPegawai = [
  {
    nama: "Dodi Prayodi",
    umur: 25,
    jabatan: "Manager",
    statusHidup: "Menikah",
  },
  {
    nama: "Oriza Sativa",
    umur: 19,
    jabatan: "Staff",
    statusHidup: "Belum Menikah",
  },
  {
    nama: "Marukocan",
    umur: 30,
    jabatan: "Manager",
    statusHidup: "Belum Menikah",
  }
];

const tabelBody = document.querySelector("tbody");
const tabelFoot = document.getElementById("totalGaji");
tabelBody.innerHTML = "";

let totalGaji = 0;

dataPegawai.forEach((pegawai, nomor) => {
  // Penentuan gaji pokok
  let gajiPokok;
  switch (pegawai.jabatan) {
    case "Manager":
      gajiPokok = 15000000;
      break;
    case "Asisten Manager":
      gajiPokok = 10000000;
      break;
    case "Staff":
      gajiPokok = 5000000;
      break;
    default:
      gajiPokok = 0;
  }

  const tunjanganJabatan = gajiPokok * 0.15;
  const bpjs = gajiPokok * 0.1;
  const tunjanganKeluarga = pegawai.statusHidup === "Menikah" ? gajiPokok * 0.2 : 0;
  const gajiKeseluruhan = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;
  totalGaji += gajiKeseluruhan;

  let row = `
        <tr>
            <td>${nomor + 1}</td>
            <td>${pegawai.nama}</td>
            <td>${pegawai.umur}</td>
            <td>${pegawai.jabatan}</td>
            <td>${pegawai.statusHidup}</td>
            <td>${gajiPokok.toLocaleString()}</td>
            <td>${tunjanganJabatan.toLocaleString()}</td>
            <td>${bpjs.toLocaleString()}</td>
            <td>${tunjanganKeluarga.toLocaleString()}</td>
            <td>${gajiKeseluruhan.toLocaleString()}</td>
        </tr>
    `;

  tabelBody.innerHTML += row;
});

tabelFoot.innerHTML = totalGaji.toLocaleString();
