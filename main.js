// Ambil elemen yang dibutuhkan
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

// Fungsi untuk toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Tutup menu ketika klik di luar menu atau hamburger
document.addEventListener("click", function (event) {
  const isClickInside =
    navbarMenu.contains(event.target) || hamburger.contains(event.target);

  if (!isClickInside) {
    // Tutup menu jika klik di luar
    hamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
  }
});

// scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
