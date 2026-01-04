const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const closeMenuBtn = document.getElementById("close-menu");
const links = document.querySelectorAll(".links a");

function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
  menuToggle.classList.add("hidden");
}

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.classList.remove("hidden");
}

menuToggle.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", () => {
  const transition = document.getElementById("page-transition");

  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      // se não existir transição, deixa navegar normal
      if (!transition) return;

      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = href;
      }, 450);
    });
  });
});

// Função para enviar mensagem via WhatsApp
function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;
  const telefone = "5585988100380";

  const texto = `Olá! Me chamo ${nome}, ${mensagem}, meu e-mail para contato é: ${email}.`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url);

  window.open(url, "_blank");
}
