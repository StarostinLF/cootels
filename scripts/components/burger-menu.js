const headerContainer = document.querySelector(".header"),
  burgerMenuContainer = headerContainer.querySelector(
    ".header__burger-menu-container"
  ),
  headerNavContainer = headerContainer.querySelector(".header__nav-container");

burgerMenuContainer.addEventListener("click", () => {
  headerNavContainer.classList.toggle("header__nav-container_opened");
});
