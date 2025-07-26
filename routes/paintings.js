import express from 'express';
// Mengimpor data dari db.js
import db from '../db.js';

// Membuat router baru
const router = express.Router();

// Rute untuk mendapatkan SEMUA lukisan
// Endpoint: GET /paintings
router.get('/', (req, res) => {
  console.log("Mencoba mengakses data lukisan...");
  
  // Cek apakah db.paintings ada dan merupakan sebuah array
  if (db && db.paintings && Array.isArray(db.paintings)) {
    console.log(`Berhasil, ditemukan ${db.paintings.length} lukisan.`);
    res.json(db.paintings);
  } else {
    console.error("Data lukisan tidak ditemukan atau formatnya salah di db.js");
    res.status(500).json({ message: 'Data lukisan tidak dapat dimuat dari server.' });
  }
});

// Rute untuk mendapatkan SATU lukisan berdasarkan ID
// Endpoint: GET /paintings/1, /paintings/2, dst.
router.get('/:id', (req, res) => {
  const paintingId = parseInt(req.params.id, 10);
  
  // Pastikan db.paintings ada sebelum mencari
  if (db && db.paintings) {
    const painting = db.paintings.find(p => p.id === paintingId);

    if (painting) {
      res.json(painting);
    } else {
      res.status(404).json({ message: 'Lukisan tidak ditemukan' });
    }
  } else {
    res.status(500).json({ message: 'Data lukisan tidak dapat dimuat dari server.' });
  }
});

// Mengekspor router agar bisa digunakan di server.js
export default router;
