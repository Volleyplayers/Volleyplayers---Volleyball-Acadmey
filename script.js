// transition.js

// Fade in effect when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in-active");
});

// Fade out effect before leaving the page
document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");

  // only for internal links
  if (href && !href.startsWith("http") && !href.startsWith("#") && !href.startsWith("mailto") && !href.startsWith("tel")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("fade-in-active");
      document.body.classList.add("fade-out-active");
      setTimeout(() => {
        window.location = href;
      }, 500); // time must match CSS transition
    });
  }
});
