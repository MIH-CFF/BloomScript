document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  // Check for saved theme preference or use prefers-color-scheme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme
  if (savedTheme === "light" || (!savedTheme && !prefersDark)) {
    enableLightTheme();
  }

  // Theme toggle event
  themeToggle.addEventListener("click", function () {
    if (document.body.classList.contains("light-theme")) {
      disableLightTheme();
    } else {
      enableLightTheme();
    }
  });

  function enableLightTheme() {
    document.body.classList.add("light-theme");
    themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
    localStorage.setItem("theme", "light");
    themeToggle.setAttribute("aria-label", "Switch to dark theme");
  }

  function disableLightTheme() {
    document.body.classList.remove("light-theme");
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    localStorage.setItem("theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light theme");
  }

  // Watch for system theme changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          disableLightTheme();
        } else {
          enableLightTheme();
        }
      }
    });
});
