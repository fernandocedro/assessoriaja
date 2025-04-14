 document.querySelectorAll('.gallery img').forEach(img => {
            img.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        });



  
  
  document.addEventListener('DOMContentLoaded', function () {

    // Galeria - imagens clicáveis
    document.querySelectorAll('.gallery img').forEach(img => {
      img.addEventListener('click', function () {
        this.classList.toggle('expanded');
      });
    });

    // Swiper
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 40 },
      },
    });

    // Toggle menu hamburguer
    const menuBtn = document.getElementById('menu-hamburguer');
    menuBtn.addEventListener('click', function () {
      const menu = document.getElementById('menu-escondido');
      menu.classList.toggle('ativo');
    });

  });








        
        function toggleMenu() {
          const menu = document.getElementById('menu-escondido');
          menu.classList.toggle('ativo');
        }
        
        
      