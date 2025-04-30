document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.nextElementSibling.querySelector("i");

  // Check for saved theme preference or use prefers-color-scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    document.body.classList.add("light-theme");
    themeToggle.checked = true;
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
  }

  // Theme toggle event
  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("light-theme");
      themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
      localStorage.setItem("theme", "dark");
    }
  });
});
