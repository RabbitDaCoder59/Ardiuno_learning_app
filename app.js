// Example interactivity: form submission and fade-in on scroll
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    700: { slidesPerView: 2 },
  },
});

new Swiper(".gallerySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true, // Enable looping
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  // Form handling (basic)
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We will contact you soon.");
      form.reset();
    });
  }

  // Set current year in copyright
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
