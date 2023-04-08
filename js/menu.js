(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');

  const toggleMenu = () => {
    const isMenuOpen =
    //   openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    // openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    // openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelectorAll('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//   };

//   refs.openMenuBtn.forEach((el) => {
//     el.addEventListener('click', toggleMenu);
//   });

//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-open');
//     document.body.classList.toggle('no-scroll');
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
//   }
// })();

// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();
