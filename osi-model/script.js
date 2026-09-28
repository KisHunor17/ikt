document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Menü bezárása" : "Menü megnyitása");
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menü megnyitása");
      });
    });
  }

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formMessage.textContent = "Köszönöm — a kérdésed rögzítve lett. Ez a bemutató űrlap nem küld valódi e-mailt.";
      contactForm.reset();
    });
  }
});
