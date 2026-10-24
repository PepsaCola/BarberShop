(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  // Після кліку на пункт меню закриваємо його, інакше воно лишається поверх сторінки
  refs.menu.addEventListener("click", (e) => {
    if (e.target.closest("a[href^='#']")) closeMenu();
  });

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function closeMenu() {
    refs.menu.classList.add("is-hidden");
    refs.body.classList.remove("no-scroll");
  }
})();
