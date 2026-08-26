document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const close = document.querySelector("[data-lightbox-close]");

  document.querySelectorAll("[data-gallery-image]").forEach(img => {
    img.addEventListener("click", () => {
      if (!lightbox || !lightboxImage) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightbox.classList.remove("hidden");
    });
  });

  close?.addEventListener("click", () => lightbox.classList.add("hidden"));
  lightbox?.addEventListener("click", e => {
    if (e.target === lightbox) lightbox.classList.add("hidden");
  });
});