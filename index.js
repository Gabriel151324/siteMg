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

// Observer para as seções "About"
const sections = document.querySelectorAll(".about");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => observer.observe(section));

// Observer para a seção "Our Courses"
const coursesSection = document.querySelector(".our-courses");

const coursesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

coursesObserver.observe(coursesSection);  

// Carousel functionality
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

/* Auto-slide */
setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
}, 4000);

// PARTE DO CÓDIGO DO BACKEND

// Função para carregar imagens dinamicamente
function loadDynamicImages() {
    // Verificar se há imagens salvas no localStorage
    const savedImages = JSON.parse(localStorage.getItem('siteImages') || '[]');
    
    if (savedImages.length > 0) {
        // Carregar imagens do carrossel (exemplo para index.html)
        const carouselImages = savedImages.filter(img => img.location === 'index_carousel');
        
        if (carouselImages.length > 0 && document.querySelector('.carousel-inner')) {
            // Adicionar imagens ao carrossel
            // Você precisa adaptar esta lógica para sua estrutura específica
        }
        
        // Carregar imagens da galeria
        const galleryImages = savedImages.filter(img => img.location === 'galeria');
        if (galleryImages.length > 0 && document.querySelector('.gallery-container')) {
            // Adicionar imagens à galeria
        }
    }
    
    // Carregar notícias
    const savedNews = localStorage.getItem('siteNews');
    if (savedNews && document.querySelector('.news-content')) {
        document.querySelector('.news-content').innerHTML = savedNews;
    }
}

// Executar quando a página carregar
document.addEventListener('DOMContentLoaded', loadDynamicImages);