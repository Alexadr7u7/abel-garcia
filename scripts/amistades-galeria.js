// scripts/generar-galeria.js
const fs = require("fs");
const path = require("path");

// Carpeta donde están tus imágenes
const folder = path.join(__dirname, "../public/assets/img/amistades");

// Leemos todos los archivos de la carpeta
const files = fs.readdirSync(folder);

// Filtrar solo imágenes comunes (opcional)
const imagenes = files.filter((file) =>
  /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
);

// Generamos el JSON con rutas relativas a "assets/"
const output = imagenes.map((file) => `assets/img/amistades/${file}`);

// Guardamos en un archivo JSON en assets
fs.writeFileSync(
  path.join(__dirname, "../public/assets/amistades.json"),
  JSON.stringify(output, null, 2)
);

console.log(`✅ Generado imagenes.json con ${output.length} imágenes`);
