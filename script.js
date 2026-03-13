const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}

const currentPath = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");

  if (linkPath === currentPath) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});
