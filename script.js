const registerMenuListener = () => {
  const menuButton = document.getElementById("menu-icon-button");
  const mobileMenu = document.getElementById("mobile-menu");
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("block");
  });
};

registerMenuListener();
