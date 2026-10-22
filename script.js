// ===== Latihan 1 =====
function latihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  console.log("Hello World");
}

// ===== Latihan 2 =====
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
  }
}

// ===== Latihan 3 =====
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", b !== 0 ? a % b : "Tidak dapat dibagi nol");
}
// Eksperimen 1: input dari prompt, dikonversi ke number
function latihan3Prompt() {
  const a = Number(prompt("Bilangan pertama:"));
  const b = Number(prompt("Bilangan kedua:"));
  if (Number.isNaN(a) || Number.isNaN(b)) {
    alert("Input harus berupa angka.");
    return;
  }
  operasiDasar(a, b);
}

// ===== Latihan 4 =====
function latihan4() {
  const inputNilai = prompt("Masukkan nilai (0-100):");
  if (inputNilai === null || inputNilai.trim() === "") {
    alert("Input nilai tidak valid.");
    return;
  }
  const nilai = Number(inputNilai);
  if (Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilai >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}

// ===== Latihan 5 =====
function latihan5() {
  const pilihan = prompt("Masukkan angka 1-5:");
  switch (pilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}

// ===== Latihan 6 + Eksperimen 3 =====
function cekGenap(angka) {
  return angka % 2 === 0;
}
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else {
    hasil.textContent = cekGenap(angka) ? "Bilangan genap" : "Bilangan ganjil";
  }
}

// ===== Latihan 7 =====
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// ===== Latihan 8 =====
const daftarMenu = document.querySelectorAll(".menu");
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));

// ===== Mini Project =====
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}
function validNilai(teks) {
  const n = Number(teks);
  return teks.trim() !== "" && !Number.isNaN(n) && n >= 0 && n <= 100;
}
function tampilkanHasil() {
  const nama = document.getElementById("nama").value.trim();
  const t = document.getElementById("tugas").value;
  const u = document.getElementById("uts").value;
  const a = document.getElementById("uas").value;
  const out = document.getElementById("hasilNilai");

  if (nama === "") {
    out.className = "error";
    out.textContent = "Nama tidak boleh kosong.";
    return;
  }
  if (!validNilai(t) || !validNilai(u) || !validNilai(a)) {
    out.className = "error";
    out.textContent = "Nilai tugas, UTS, dan UAS harus berupa angka 0-100.";
    return;
  }
  const akhir = hitungNilaiAkhir(Number(t), Number(u), Number(a));
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";
  out.className = akhir >= 60 ? "ok" : "error";
  out.textContent = nama + " - Nilai akhir: " + akhir.toFixed(2) +
    ", Predikat: " + tentukanPredikat(akhir) + ", Status: " + status;
}
document.getElementById("btnHitung").addEventListener("click", tampilkanHasil);

// ===== Eksperimen 2 dan 6: tabel perkalian 7 + tombol tampil/sembunyi =====
(function () {
  let html = "<table>";
  for (let i = 1; i <= 10; i++) {
    html += "<tr><td>7 x " + i + "</td><td>" + 7 * i + "</td></tr>";
  }
  html += "</table>";
  document.getElementById("tabelPerkalian").innerHTML = html;
})();
document.getElementById("btnToggle").addEventListener("click", () => {
  const el = document.getElementById("tabelPerkalian");
  el.style.display = el.style.display === "none" ? "block" : "none";
});
