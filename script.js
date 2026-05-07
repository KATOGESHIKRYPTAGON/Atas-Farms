
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

let autoSlide = setInterval(nextSlide, 5000);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".next").onclick = () => {
  nextSlide();
  clearInterval(autoSlide);
};

document.querySelector(".prev").onclick = () => {
  prevSlide();
  clearInterval(autoSlide);
};

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuIcon.textContent =
    navLinks.classList.contains("active") ? "✖" : "☰";
});
