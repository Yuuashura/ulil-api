import express from 'express';
// Mengimpor data dari db.js
import db from '../db.js';

// Membuat router baru
const router = express.Router();

// Rute untuk mendapatkan SEMUA lukisan
// Endpoint: GET /paintings
router.get('/', (req, res) => {
  // Mengakses array 'paintings' dari database
  res.json(db.paintings);
});

// Rute untuk mendapatkan SATU lukisan berdasarkan ID
// Endpoint: GET /paintings/1, /paintings/2, dst.
router.get('/:id', (req, res) => {
  const paintingId = parseInt(req.params.id, 10);
  
  // Mencari lukisan di dalam array 'paintings'
  const painting = db.paintings.find(p => p.id === paintingId);

  if (painting) {
    res.json(painting);
  } else {
    res.status(404).json({ message: 'Lukisan tidak ditemukan' });
  }
});

// Mengekspor router agar bisa digunakan di server.js
export default router;
