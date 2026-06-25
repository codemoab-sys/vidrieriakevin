document.addEventListener("DOMContentLoaded", function () {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  smoothLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId !== "#") {
        event.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  const mobileNavLinks = document.querySelectorAll('.navbar-collapse .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  const formAlert = document.getElementById("form-alert");

  if (contactForm && formAlert) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const formData = new FormData(contactForm);
      const nombre = formData.get("nombre")?.toString().trim();
      const telefono = formData.get("telefono")?.toString().trim();
      const mensaje = formData.get("mensaje")?.toString().trim();

      if (!nombre || !telefono || !mensaje) {
        formAlert.className = "alert alert-danger";
        formAlert.textContent = "Por favor completa todos los campos.";
        return;
      }

      formAlert.className = "alert alert-info";
      formAlert.textContent = "Procesando tu solicitud...";
      formAlert.classList.remove("d-none");

      try {
        await new Promise((resolve) => setTimeout(resolve, 900));

        const whatsappText = `Hola, soy ${nombre}. ${mensaje} Mi teléfono es ${telefono}.`;
        window.open(`https://wa.me/51948190876?text=${encodeURIComponent(whatsappText)}`, "_blank");

        formAlert.className = "alert alert-success";
        formAlert.textContent = "Formulario listo. Se abrió WhatsApp para tu cotización.";
        contactForm.reset();
      } catch (error) {
        formAlert.className = "alert alert-danger";
        formAlert.textContent = "Ocurrió un error. Intenta de nuevo.";
      }
    });
  }

  const galleryCards = document.querySelectorAll('.gallery-card');

  if ('IntersectionObserver' in window && galleryCards.length) {
    const observer = new IntersectionObserver((entries, observerRef) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    galleryCards.forEach((card) => observer.observe(card));
  } else {
    galleryCards.forEach((card) => card.classList.add('is-visible'));
  }
});
