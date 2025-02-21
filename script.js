const registerMenuListener = () => {
  const menuButton = document.getElementById("menu-icon-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuElements = mobileMenu.querySelectorAll("li");
  console.log(mobileMenuElements);
  menuButton.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
    mobileMenuElements.forEach((listElement) => {
      setTimeout(() => {
        listElement.style.display = "block";
      }, 250);
    });
  });
};

const registerMobileMenuCloseButton = () => {
  const mobileMenuCloseButton = document.getElementById(
    "mobile-menu-close-btn"
  );
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuElements = mobileMenu.querySelectorAll("li");
  mobileMenuCloseButton.addEventListener("click", () => {
    mobileMenu.style.width = "0";
    mobileMenuElements.forEach((listElement) => {
      listElement.style.display = "none";
    });
  });
};

registerMenuListener();
registerMobileMenuCloseButton();
