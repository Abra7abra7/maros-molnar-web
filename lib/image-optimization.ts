/**
 * Utility pre optimalizáciu obrázkov s podporou viacerých rozlíšení
 * pre rôzne veľkosti obrazoviek
 */

// Konfiguracia pre mobilne zariadenia
export const mobileImageConfig = {
  quality: 75,
  sizes: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",
  placeholder: "blur",
  blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAeEAABBAEFAAAAAAAAAAAAAAAAAAECAwQRBQYHIf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCX5z2RW7JGYgcDZMq01LTF6gZUki//2Q==",
};

// Generovanie srcSet pre responsivne obrazky
export function generateResponsiveSrcSet(
  basePath: string,
  imageName: string,
  extensions: string[] = ["jpg", "webp"],
  sizes: number[] = [640, 768, 1024, 1280, 1920]
): { srcSet: string; type: string }[] {
  return extensions.map((ext) => {
    const srcSet = sizes
      .map((size) => {
        // Format: /images/responsive/image-name-640.webp 640w
        return `${basePath}/${imageName}-${size}.${ext} ${size}w`;
      })
      .join(", ");
    
    return {
      srcSet,
      type: `image/${ext === "jpg" ? "jpeg" : ext}`,
    };
  });
}

// Lazy loading a IntersectionObserver pre obrázky mimo viewport
export function setupLazyImageLoading(): void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return;
  }
  
  const lazyImages = document.querySelectorAll("[data-src]");
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const image = entry.target as HTMLImageElement;
        image.src = image.getAttribute("data-src") || "";
        image.removeAttribute("data-src");
        imageObserver.unobserve(image);
      }
    });
  });
  
  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });
}
