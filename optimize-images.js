const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

// Function to find all image files in a directory recursively
function findImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findImageFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

// Create a function to optimize a single image
async function optimizeImage(imagePath) {
  try {
    const extension = path.extname(imagePath).toLowerCase();
    const directory = path.dirname(imagePath);
    const filename = path.basename(imagePath, extension);
    const outputWebP = path.join(directory, `${filename}.webp`);
    
    // Set quality based on image type
    const quality = extension === '.png' ? 85 : 80;
    
    // Optimize the image
    const info = await sharp(imagePath)
      .webp({ quality })
      .toFile(outputWebP);
    
    const originalSize = fs.statSync(imagePath).size;
    const newSize = info.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ ${path.relative(publicDir, imagePath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(2)} KB → ${(newSize / 1024).toFixed(2)} KB (${savings}% smaller)`);
    
    return {
      original: imagePath,
      webp: outputWebP,
      originalSize,
      newSize,
      savings: parseFloat(savings)
    };
  } catch (err) {
    console.error(`❌ Error optimizing ${imagePath}:`, err.message);
    return null;
  }
}

async function optimizeAllImages() {
  console.log('Finding all images in the public directory...');
  
  // Find all image files
  const imageFiles = findImageFiles(publicDir);
  console.log(`Found ${imageFiles.length} images to optimize\n`);
  
  // Optimize all images
  const results = [];
  for (const image of imageFiles) {
    const result = await optimizeImage(image);
    if (result) {
      results.push(result);
    }
  }
  
  // Print summary
  if (results.length > 0) {
    const totalOriginalSize = results.reduce((sum, item) => sum + item.originalSize, 0);
    const totalNewSize = results.reduce((sum, item) => sum + item.newSize, 0);
    const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(2);
    
    console.log('\n========== Optimization Summary ==========');
    console.log(`Total images optimized: ${results.length}/${imageFiles.length}`);
    console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`New size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Storage saved: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB (${totalSavings}%)`);
  } else {
    console.log('No images were successfully optimized.');
  }
  
  return results;
}

// Delete original images after confirmation
function deleteOriginalImages(results) {
  console.log('\nDeleting original images...');
  
  for (const result of results) {
    try {
      fs.unlinkSync(result.original);
      console.log(`🗑️  Deleted: ${path.relative(publicDir, result.original)}`);
    } catch (err) {
      console.error(`❌ Error deleting ${result.original}:`, err.message);
    }
  }
  
  console.log('All original images have been deleted.');
}

// Main function
async function main() {
  try {
    console.log('Starting image optimization...\n');
    const results = await optimizeAllImages();
    
    // Delete original files after optimization
    if (results.length > 0) {
      deleteOriginalImages(results);
    }
    
    console.log('\nImage optimization complete! 🎉');
  } catch (err) {
    console.error('Fatal error:', err);
  }
}

// Run the main function
main();
