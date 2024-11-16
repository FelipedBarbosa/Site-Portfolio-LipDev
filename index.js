document.getElementById('menu-toggle').addEventListener('click', function() {
    const navSections = document.querySelector('.nav-sections');
    navSections.classList.toggle('active');
  });

// Código de navegação do carrossel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

const totalItems = document.querySelectorAll('.certificado-card').length;

function updateCarousel() {
  const offset = -currentIndex * 100; // Desloca a lista de certificados
  carousel.style.transform = `translateX(${offset}%)`;
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

