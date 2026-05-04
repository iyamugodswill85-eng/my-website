const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  const navLinks = siteNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (siteNav.classList.contains("is-open")) {
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameInput = contactForm.querySelector('input[name="name"]');
    const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "there";

    formMessage.textContent = `Thanks, ${name}. Your project request is ready to turn into a real contact flow.`;
    contactForm.reset();
  });
}
