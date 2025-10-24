(() => {
  const navbar = document.getElementById("mainNavbar");
  const scrollOffset = 80;

  const toggleNavbarClass = () => {
    if (window.scrollY > scrollOffset) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", toggleNavbarClass);
  toggleNavbarClass();

  document.querySelectorAll('a.nav-link[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse?.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      }
    });
  });

  const contactForm = document.getElementById("contactForm");
  const responseEl = contactForm?.querySelector(".form-response");

  const setResponse = (message, isSuccess = true) => {
    if (!responseEl) return;
    responseEl.textContent = message;
    responseEl.classList.toggle("text-success", isSuccess);
    responseEl.classList.toggle("text-danger", !isSuccess);
    responseEl.classList.remove("d-none");
  };

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setResponse("Please complete the form correctly before submitting.", false);
    } else {
      setResponse("Thank you! Your message has been received. We will contact you soon.");
      form.reset();
    }

    form.classList.add("was-validated");
  });

  const currentYearEl = document.getElementById("currentYear");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear().toString();
  }
})();
