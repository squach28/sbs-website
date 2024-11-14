const registerMenuListener = () => {
  const menuButton = document.getElementById("menu-icon-button");
  const mobileMenu = document.getElementById("mobile-menu");
  menuButton.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
  });
};

const registerMobileMenuCloseButton = () => {
  const mobileMenuCloseButton = document.getElementById(
    "mobile-menu-close-btn"
  );
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuCloseButton.addEventListener("click", () => {
    mobileMenu.style.width = "0";
  });
};

registerMenuListener();
registerMobileMenuCloseButton();
