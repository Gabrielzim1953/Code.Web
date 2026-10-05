const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (menuToggle && mainNav) {
  const updateMenuState = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    mainNav.classList.toggle("open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    updateMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      updateMenuState(false);
    });
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !message) {
      formNote.textContent = "Preencha seu nome e o projeto antes de enviar.";
      return;
    }

    const whatsappText = encodeURIComponent(
      `Olá, Gabriel!\n\nMeu nome é ${name}.\n\nSobre o projeto:\n${message}`
    );
    const whatsappNumber = "5538984176478";

    formNote.textContent = "Abrindo o WhatsApp...";
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, "_blank", "noopener,noreferrer");
  });
}
