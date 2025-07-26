// Mengimpor modul 'fs' (File System) dan 'path'
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Trik untuk mendapatkan __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Membaca file db.json dan mengubahnya menjadi objek JavaScript
const dbPath = path.join(__dirname, 'db.json');
const jsonData = fs.readFileSync(dbPath, 'utf-8');
const database = JSON.parse(jsonData);

// Mengekspor data agar bisa digunakan di file lain
export default database;
