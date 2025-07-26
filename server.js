import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Mengimpor file rute LUKISAN yang baru
import paintingRoutes from './routes/paintings.js';

// Trik untuk mendapatkan __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inisialisasi aplikasi Express
const app = express();

// Middleware
app.use(cors()); 
app.use(express.json());

// Rute Utama - mengirim file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menggunakan rute lukisan
// Semua permintaan ke /paintings akan ditangani oleh paintingRoutes
app.use('/api', paintingRoutes);

// EKSPOR APLIKASI EXPRESS AGAR VERCEL BISA MENGGUNAKANNYA
export default app;
