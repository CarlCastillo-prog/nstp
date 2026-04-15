document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.carousel-container');
  const track = document.querySelector('.carousel-track');
  if (!track || !container) return;

  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.crsl-btn');
  const nextBtn = document.querySelector('.crsl-btn2');
  const indicatorsContainer = document.querySelector('.carousel-indicators');

  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoPlayInterval;
  const autoPlayDelay = 4000;
  let isTransitioning = false;
  let startX = 0;

  // ✅ ALWAYS use ONE class name consistently
  const getIndicators = () =>
    indicatorsContainer?.querySelectorAll('.indicator') || [];

  // ===== UPDATE INDICATORS =====
  function updateIndicators() {
    const indicators = getIndicators();
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  // ===== CENTERING CAROUSEL =====
  function updateCarousel() {
    isTransitioning = true;

    const containerWidth = container.offsetWidth;
    const slideWidth = slides[currentIndex].offsetWidth;

    let slideStart = 0;
    for (let i = 0; i < currentIndex; i++) {
      slideStart += slides[i].offsetWidth + 25; // must match CSS gap
    }

    const offset = slideStart - containerWidth / 2 + slideWidth / 2;

    track.style.transition =
      'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    track.style.transform = `translateX(${-offset}px)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });

    updateIndicators();

    setTimeout(() => {
      isTransitioning = false;
    }, 600);
  }

  // ===== NAVIGATION =====
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);

  // ===== INDICATOR CLICK (FIXED) =====
  function bindIndicatorClicks() {
    const indicators = getIndicators();

    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        if (index === currentIndex) return; // prevent double trigger
        currentIndex = index;
        updateCarousel();
      });
    });
  }

  bindIndicatorClicks();

  // ===== AUTOPLAY =====
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // ===== TOUCH SWIPE =====
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    stopAutoPlay();
  });

  container.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }

    startAutoPlay();
  });

  // ===== KEYBOARD =====
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // ===== RESIZE FIX =====
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCarousel, 250);
  });

  // ===== IMAGE MODAL =====
  document.addEventListener('click', function(e) {
    if (
      e.target.classList.contains('slide-avatar') &&
      e.target.closest('.carousel-slide.active')
    ) {
      const imgSrc = e.target.style.backgroundImage.slice(5, -2);

      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
      `;

      modal.innerHTML = `
        <img src="${imgSrc}" style="max-width: 95%; max-height: 95%; object-fit: contain; border-radius: 12px;">
        <button style="position: absolute; top: 20px; right: 20px; background: none; border: none; color: white; font-size: 30px; cursor: pointer; z-index: 10001;">×</button>
      `;

      modal.querySelector('button').onclick = () => modal.remove();

      modal.onclick = (ev) => {
        if (ev.target === modal) modal.remove();
      };

      document.body.appendChild(modal);
    }
  });

  // ===== INIT =====
  updateCarousel();
  startAutoPlay();
});