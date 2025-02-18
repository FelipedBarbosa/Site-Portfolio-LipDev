// ========== FUNÇÃO PARA CALCULAR ITENS POR SLIDE ==========
function getItemsPerSlide() {
  if (window.innerWidth <= 768) { // Telas menores (celular)
    return 1; // 1 item por slide
  } else { // Telas maiores (computador)
    return 3; // 3 itens por slide
  }
}

// ========== CARROSSEL DE SERVIÇOS ==========
const prevButtonServicos = document.querySelector('.prev-servicos');
const nextButtonServicos = document.querySelector('.next-servicos');
const carouselServicos = document.getElementById('carousel-servicos');
const serviceCards = document.querySelectorAll('#carousel-servicos .servico-card');

let currentIndexServicos = 0;
let itemsPerSlideServicos = getItemsPerSlide();
let totalSlidesServicos = Math.ceil(serviceCards.length / itemsPerSlideServicos);

console.log("Total de slides (Serviços):", totalSlidesServicos);
console.log("Itens por slide (Serviços):", itemsPerSlideServicos);

function updateCarouselServicos() {
  const offset = -currentIndexServicos * (100 / itemsPerSlideServicos);
  carouselServicos.style.transform = `translateX(${offset}%)`;
  console.log("Offset (Serviços):", offset);
}

// Botão "Próximo" (Serviços)
nextButtonServicos.addEventListener('click', () => {
  if (currentIndexServicos < totalSlidesServicos - 1) {
    currentIndexServicos++;
  } else {
    currentIndexServicos = 0; // Volta ao primeiro slide
  }
  console.log("Índice atual (Serviços):", currentIndexServicos);
  updateCarouselServicos();
});

// Botão "Anterior" (Serviços)
prevButtonServicos.addEventListener('click', () => {
  if (currentIndexServicos > 0) {
    currentIndexServicos--;
  } else {
    currentIndexServicos = totalSlidesServicos - 1; // Vai para o último slide
  }
  console.log("Índice atual (Serviços):", currentIndexServicos);
  updateCarouselServicos();
});

// ========== CARROSSEL DE CERTIFICADOS ==========
const prevButtonCertificados = document.querySelector('.prev-certificados');
const nextButtonCertificados = document.querySelector('.next-certificados');
const carouselCertificados = document.getElementById('carousel-certificados');
const certificadoCards = document.querySelectorAll('#carousel-certificados .certificado-card');

let currentIndexCertificados = 0;
let itemsPerSlideCertificados = getItemsPerSlide();
let totalSlidesCertificados = Math.ceil(certificadoCards.length / itemsPerSlideCertificados);

console.log("Total de slides (Certificados):", totalSlidesCertificados);
console.log("Itens por slide (Certificados):", itemsPerSlideCertificados);

function updateCarouselCertificados() {
  const offset = -currentIndexCertificados * (100 / itemsPerSlideCertificados);
  carouselCertificados.style.transform = `translateX(${offset}%)`;
  console.log("Offset (Certificados):", offset);
}

// Botão "Próximo" (Certificados)
nextButtonCertificados.addEventListener('click', () => {
  if (currentIndexCertificados < totalSlidesCertificados - 1) {
    currentIndexCertificados++;
  } else {
    currentIndexCertificados = 0; // Volta ao primeiro slide
  }
  console.log("Índice atual (Certificados):", currentIndexCertificados);
  updateCarouselCertificados();
});

// Botão "Anterior" (Certificados)
prevButtonCertificados.addEventListener('click', () => {
  if (currentIndexCertificados > 0) {
    currentIndexCertificados--;
  } else {
    currentIndexCertificados = totalSlidesCertificados - 1; // Vai para o último slide
  }
  console.log("Índice atual (Certificados):", currentIndexCertificados);
  updateCarouselCertificados();
});

// ========== ATUALIZAR AO REDIMENSIONAR A TELA ==========
window.addEventListener('resize', () => {
  // Atualiza o número de itens por slide
  itemsPerSlideServicos = getItemsPerSlide();
  itemsPerSlideCertificados = getItemsPerSlide();

  // Recalcula o total de slides
  totalSlidesServicos = Math.ceil(serviceCards.length / itemsPerSlideServicos);
  totalSlidesCertificados = Math.ceil(certificadoCards.length / itemsPerSlideCertificados);

  console.log("Redimensionado - Itens por slide (Serviços):", itemsPerSlideServicos);
  console.log("Redimensionado - Total de slides (Serviços):", totalSlidesServicos);
  console.log("Redimensionado - Itens por slide (Certificados):", itemsPerSlideCertificados);
  console.log("Redimensionado - Total de slides (Certificados):", totalSlidesCertificados);

  // Atualiza os carrosséis
  updateCarouselServicos();
  updateCarouselCertificados();
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = 2; // Total de slides (2 slides no caso, cada um com 3 serviços)

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Remove a classe 'active' de todas as bolinhas
      dots.forEach(d => d.classList.remove('active'));
      // Adiciona a classe 'active' à bolinha clicada
      dot.classList.add('active');
      // Move o carrossel para o slide correspondente
      carousel.style.transform = `translateX(-${index * 100}%)`;
    });
  });
});

