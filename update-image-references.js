const fs = require('fs');
const path = require('path');

// Directory to search
const appDir = path.join(__dirname, 'app');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

// Function to find all TSX/JSX files recursively
function findReactFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findReactFiles(filePath, fileList);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.tsx' || ext === '.jsx' || ext === '.js') {
        fileList.push(filePath);
      }
    }
  }
  
  return fileList;
}

// Function to update image references in a file
function updateImageReferences(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Pattern to match image URLs with extensions
  const imageUrlPattern = /(["'])(\/images\/[^"']+\.(jpg|jpeg|png|gif))(['"])/gi;
  
  // Replace occurrences
  const updatedContent = content.replace(imageUrlPattern, (match, quote1, url, ext, quote2) => {
    // Skip if already WebP
    if (url.toLowerCase().endsWith('.webp')) {
      return match;
    }
    
    // Replace extension with .webp
    const webpUrl = url.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
    hasChanges = true;
    return `${quote1}${webpUrl}${quote2}`;
  });
  
  // Save the file if changes were made
  if (hasChanges) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    return true;
  }
  
  return false;
}

// Main function
function main() {
  console.log('Updating image references to WebP format...');
  
  // Find all React files
  const reactFiles = findReactFiles(appDir);
  console.log(`Found ${reactFiles.length} React files to check\n`);
  
  let updatedFiles = 0;
  
  // Update image references in each file
  for (const file of reactFiles) {
    try {
      const updated = updateImageReferences(file);
      if (updated) {
        console.log(`✅ Updated references in: ${path.relative(__dirname, file)}`);
        updatedFiles++;
      }
    } catch (err) {
      console.error(`❌ Error updating ${file}:`, err.message);
    }
  }
  
  console.log(`\nCompleted! Updated ${updatedFiles} files.`);
}

// Run the main function
main();
