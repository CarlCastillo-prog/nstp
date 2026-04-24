document.addEventListener('DOMContentLoaded', function () {
  // Image Grid Modal Functionality
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalFloorPlan = document.getElementById('modalFloorPlan');
  const modalTitle = document.getElementById('modalTitle');
  const modalDetails = document.getElementById('modalDetails');
  const prevBtn = document.getElementById('prevImage');
  const nextBtn = document.getElementById('nextImage');
  const closeBtn = document.getElementById('closeModal');
  const viewOfficeBtn = document.getElementById('viewOffice');
  const viewNavBtn = document.getElementById('viewNav');

  let currentIndex = 0;
  let filteredData = [...gridData]; // Tracks currently visible items
  let isNavView = false; // Toggle state: false = office view, true = navigation/floor plan view

  const floorMap = {
    'Ground Floor': 'grid-ground',
    'Mezzanine Floor': 'grid-mezzanine',
    '3rd Floor': 'grid-3rd',
    '5th Floor': 'grid-5th',
  };

  const floorOrder = [
    'Ground Floor',
    'Mezzanine Floor',
    '3rd Floor',
    '5th Floor',
  ];

  // ── Search / Filter ──────────────────────────────────────────────────────────
  function initSearch() {
    const searchInput = document.getElementById('guideSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
      const query = this.value.trim().toLowerCase();
      filteredData = query
        ? gridData.filter((item) => item.title.toLowerCase().includes(query))
        : [...gridData];

      renderGrid();
    });
  }

  // ── Grid rendering ───────────────────────────────────────────────────────────
  function renderGrid() {
    // Clear all floor grids
    Object.values(floorMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = '';
    });

    if (filteredData.length === 0) {
      const ground = document.getElementById('grid-ground');
      if (ground)
        ground.innerHTML =
          '<p class="no-results">No cards match your search.</p>';
      return;
    }

    filteredData.forEach((item, index) => {
      const gridId = floorMap[item.floor];
      const gridEl = gridId ? document.getElementById(gridId) : null;
      if (!gridEl) return;

      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      gridItem.innerHTML = `<span class="item-number">${item.title}</span>`;
      gridItem.onclick = () => openModal(index); // index into filteredData
      gridEl.appendChild(gridItem);
    });

    // Hide empty floor sections when searching, show all when not searching
    const query =
      document.getElementById('guideSearch')?.value.trim().toLowerCase() || '';
    floorOrder.forEach((floor) => {
      const gridId = floorMap[floor];
      const gridEl = document.getElementById(gridId);
      const sectionEl = gridEl?.closest('.floor-section');
      if (!sectionEl) return;

      if (query && gridEl && gridEl.children.length === 0) {
        sectionEl.style.display = 'none';
      } else {
        sectionEl.style.display = '';
      }
    });
  }

  // Kept for backwards-compatibility (called nowhere else, but safe to keep)
  function createGrid() {
    renderGrid();
  }

  // ── View Toggle ──────────────────────────────────────────────────────────────
  function setOfficeView() {
    isNavView = false;
    viewOfficeBtn.classList.add('active');
    viewNavBtn.classList.remove('active');
    updateModal();
  }

  function setNavView() {
    isNavView = true;
    viewNavBtn.classList.add('active');
    viewOfficeBtn.classList.remove('active');
    updateModal();
  }

  if (viewOfficeBtn) viewOfficeBtn.onclick = setOfficeView;
  if (viewNavBtn) viewNavBtn.onclick = setNavView;

  // ── Modal ────────────────────────────────────────────────────────────────────
  function openModal(index) {
    currentIndex = index;
    isNavView = false; // Reset to office view on open
    if (viewOfficeBtn) viewOfficeBtn.classList.add('active');
    if (viewNavBtn) viewNavBtn.classList.remove('active');
    updateModal();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  function updateModal() {
    const item = filteredData[currentIndex]; // use filteredData

    // Toggle button visibility: only show "How to Get There" if navigation exists
    const hasNav = !!(item.navigation && item.navigation.trim());
    const toggleEl = document.querySelector('.view-toggle');
    if (toggleEl) {
      toggleEl.style.display = hasNav ? 'flex' : 'none';
    }

    if (isNavView && hasNav) {
      // Navigation / Floor Plan View
      modalImage.style.display = 'none';
      modalFloorPlan.style.display = 'block';
      modalFloorPlan.style.opacity = 0;

      if (item.floorPlan) {
        const fpImg = new Image();
        fpImg.src = item.floorPlan;
        fpImg.onload = () => {
          modalFloorPlan.src = item.floorPlan;
          modalFloorPlan.style.opacity = 1;
        };
        modalFloorPlan.alt = `${item.title} - Floor Plan`;
      } else {
        // No floor plan image available — show a placeholder message in the left panel
        modalFloorPlan.style.display = 'none';
        modalImage.style.display = 'flex';
        modalImage.style.opacity = 1;
        modalImage.src = item.image; // fallback to office image
        modalImage.alt = item.title;
      }

      modalTitle.textContent = item.title;
      modalDetails.textContent = item.navigation;
    } else {
      // Office View
      modalFloorPlan.style.display = 'none';
      modalImage.style.display = 'block';
      modalImage.style.opacity = 0;

      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        modalImage.src = item.image;
        modalImage.style.opacity = 1;
      };

      modalImage.alt = item.title;
      modalTitle.textContent = item.title;
      modalDetails.textContent = item.details;
    }
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % filteredData.length;
    updateModal();
  }

  function prevImage() {
    currentIndex =
      (currentIndex - 1 + filteredData.length) % filteredData.length;
    updateModal();
  }

  // ── Event listeners ──────────────────────────────────────────────────────────
  if (prevBtn) prevBtn.onclick = prevImage;
  if (nextBtn) nextBtn.onclick = nextImage;
  if (closeBtn) closeBtn.onclick = closeModal;

  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };

  document.addEventListener('keydown', (e) => {
    if (!modal.style.display || modal.style.display === 'none') return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch / swipe support
  let startX = 0;
  modal.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  modal.addEventListener('touchend', (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextImage() : prevImage();
  });

  function preloadImages(data) {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      if (item.floorPlan) {
        const fp = new Image();
        fp.src = item.floorPlan;
      }
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────────
  createGrid();
  preloadImages(gridData);
  initSearch();
});
