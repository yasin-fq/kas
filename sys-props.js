/**
 * ============================================================
 *  System Properties — Konfigurasi Aplikasi Kasumee Kasir
 * ============================================================
 * 
 *  File ini bisa diedit langsung tanpa rebuild!
 *  Ubah nilai di bawah, simpan file, refresh browser.
 *  Perubahan langsung berlaku.
 * 
 *  Catatan tentang basePath:
 *  basePath tidak bisa diubah di file ini karena Next.js
 *  meng-compile path JS chunks saat build. Untuk ganti
 *  basePath, rebuild dengan: BASE_PATH=/kas2 npm run build
 * 
 *  Cara edit:
 *  1. Buka file ini di text editor (Notepad, VS Code, dll)
 *  2. Ubah nilai yang ingin diganti
 *  3. Simpan (Ctrl+S)
 *  4. Refresh browser (Ctrl+Shift+R)
 * 
 * ============================================================
 */

window.SYS_PROPS = {

  // ─── KODE AKSES ───────────────────────────────────────────
  // Kode untuk verifikasi pertama kali buka aplikasi.
  // 8 karakter, alfanumerik, case-sensitive (huruf besar/kecil berbeda).
  accessCode: 'Ks9mE2xQ',

  // Link untuk mendapatkan kode akses (tampil di dialog verifikasi)
  accessCodeHelpUrl: 'https://lynk.id/qafstudio',

  // ─── TOGGLE FITUR ─────────────────────────────────────────
  // true = aktif, false = nonaktif

  enableCustomerMenu: true,    // Tampilkan menu Pelanggan
  enablePrintMenu: true,       // Tampilkan menu Print
  enableKasirMenu: true,       // Tampilkan menu Kasir (manager only)
  enableQueueSettings: true,   // Tampilkan pengaturan nomor antrian
  enableAutoAddCustomer: true, // Auto tambah pelanggan dari transaksi
  enableActivityLog: true,     // Catat log aktivitas (audit trail)
  enableVariablePricing: true, // Variable pricing (1 produk beberapa harga)

  // ─── INFO DEVELOPER ───────────────────────────────────────
  developer: {
    name: 'Qafstudio',
    url: 'https://lynk.id/qafstudio',
  },

  // ─── WARNA TEMA ───────────────────────────────────────────
  // Format: hex color (#RRGGBB)
  theme: {
    brandColor: '#069494',       // Warna utama (teal)
    brandColorDark: '#057a7a',   // Warna utama gelap
    brandColorLight: '#e0f5f5',  // Warna utama terang
    accentColor: '#ffcc00',      // Warna aksen (gold)
    accentColorDark: '#e6b800',  // Warna aksen gelap
    accentColorLight: '#fff8e0', // Warna aksen terang
  },

}
