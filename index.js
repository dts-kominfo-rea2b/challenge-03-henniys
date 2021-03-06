// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (data) => {
  let nama = [];
  let kuantitas = [];
  let belanjaan = [];
  let banyakBarang = data.length;

  for (let i = 0; i < banyakBarang; i++) {
    nama[i] = data[i]["nama"];
    kuantitas[i] = data[i]["kuantitas"];

    belanjaan[i] = "- " + nama[i] + " x " + kuantitas[i];
  }

  return belanjaan;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (data) => {
  let harga = [];
  let kuantitas = [];
  let nominal = [];
  let total = 0;
  let banyakBarang = data.length;
  let hargaTotal = 0;

  for (let i = 0; i < banyakBarang; i++) {
    harga[i] = data[i]["harga"];
    kuantitas[i] = data[i]["kuantitas"];

    nominal[i] = harga[i] * kuantitas[i];

    total += nominal[i];

    hargaTotal = total;
  }
  return hargaTotal;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
