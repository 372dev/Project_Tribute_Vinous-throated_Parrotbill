const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");
const buttons = document.querySelectorAll(".toggle");
const KOR = document.querySelectorAll(".KOR");
const ENG = document.querySelectorAll(".ENG");

// Burger

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle-menu");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle-menu");
  });
});

// Language

const toggleKOR = () => {
  KOR.forEach((k) => {
    if (k.style.display === "none") {
      k.style.display = "block";
    } else {
      k.style.display = "none";
    }
  });
};

const toggleENG = () => {
  ENG.forEach((e) => {
    if (e.style.display === "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  });
};

buttons.forEach((b) => {
  b.addEventListener("click", () => {
    toggleKOR();
    toggleENG();
  });
});
