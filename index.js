// Controle do Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const navSections = document.querySelector('.nav-sections');

// Função para alternar o menu
menuToggle.addEventListener('click', function () {
  navSections.classList.toggle('active');
});

// Fechar o menu quando se clica fora dele
document.addEventListener('click', function (e) {
  if (!menuToggle.contains(e.target) && !navSections.contains(e.target)) {
    navSections.classList.remove('active');
  }
});

// Fechar o menu ao clicar em um link
navSections.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navSections.classList.remove('active');
  });
});

// Carrossel de Certificados
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.certificado-card').length;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * carousel.offsetWidth; // Deslocamento baseado na largura do contêiner
  carousel.style.transform = `translateX(${offset}px)`;
}

// Navegar para o próximo item
nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Volta para o primeiro
  }
  updateCarousel();
});

// Navegar para o item anterior
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - 1; // Volta para o último
  }
  updateCarousel();
});

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);
