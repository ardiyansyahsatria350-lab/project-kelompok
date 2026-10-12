// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) =====
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
 tombolTema.addEventListener("click", function () {
 document.body.classList.toggle("gelap");
 if (document.body.classList.contains("gelap")) {
 tombolTema.textContent = "Mode Terang";
 } else {
 tombolTema.textContent = "Mode Gelap";
 }
 });
}
// ===== BAGIAN MAHASISWA 2 (Beranda) =====
// Interaksi sederhana untuk halaman Beranda
console.log("Halaman Beranda Perpustakaan Digital siap.");

// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====
// ===== BAGIAN MAHASISWA 4 (Kontak) =====
// Validasi / penanganan form kontak (Mahasiswa 4)
const formKontak = document.getElementById('form-kontak');
if (formKontak) {
    formKontak.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
        formKontak.reset();
    });
}
