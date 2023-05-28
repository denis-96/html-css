document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const hamburger = menu.parentElement.nextElementSibling;
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });
  menu.addEventListener("click", (e) => {
    const menuItem = e.target.closest(".menu_item");
    if (menuItem) {
      hamburger.classList.remove("hamburger_active");
      menu.classList.remove("menu_active");
    }
  });
});
