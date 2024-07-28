document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".features-carousel");
  const indicatorsContainer = document.querySelector(".feature-indicators");
  const carouselItems = document.querySelectorAll(".carousel-feature-item");
  let currentIndex = 0;

  const autoRunInterval = 3000; // Change this to set the auto-run interval in milliseconds

  function createIndicators() {
    carouselItems.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.classList.add("indicator");
      indicatorsContainer.appendChild(indicator);

      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });
    indicatorsContainer.children[0].classList.add("active"); // Set the first indicator as active
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    Array.from(indicatorsContainer.children).forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  }

  createIndicators(); // Create indicators dynamically
  setInterval(nextSlide, autoRunInterval); // Auto-run the carousel

  // Initialize the carousel
  updateCarousel();
});
