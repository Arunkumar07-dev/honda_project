document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      menuButton.setAttribute(
        "aria-expanded",
        mobileMenu.classList.contains("hidden") ? "false" : "true"
      );
    });
  }

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});