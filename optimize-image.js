const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Path to the original image
const originalImage = path.join(__dirname, 'public', 'images', 'athletes-service.jpg');
const outputWebP = path.join(__dirname, 'public', 'images', 'athletes-service.webp');

// Optimize the image by converting to WebP with quality settings
sharp(originalImage)
  .webp({ quality: 80 }) // 80% quality is a good balance between size and visual quality
  .toFile(outputWebP)
  .then(info => {
    console.log('Image optimization successful:');
    console.log(`Original file size: ${fs.statSync(originalImage).size / 1024 / 1024} MB`);
    console.log(`WebP file size: ${info.size / 1024 / 1024} MB`);
    console.log(`Compression ratio: ${(info.size / fs.statSync(originalImage).size * 100).toFixed(2)}%`);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });
