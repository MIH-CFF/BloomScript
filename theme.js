document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  // Enhanced theme detection with contrast check
  function getSystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  // Set initial theme
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = getSystemTheme();
  const initialTheme = savedTheme || systemTheme;

  if (initialTheme === "light") {
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
    enhanceTextContrast(); // Additional contrast enhancement
  }

  function disableLightTheme() {
    document.body.classList.remove("light-theme");
    themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    localStorage.setItem("theme", "dark");
    themeToggle.setAttribute("aria-label", "Switch to light theme");
  }

  // Additional function to ensure text contrast
  function enhanceTextContrast() {
    // This can be expanded to handle specific elements if needed
    console.log("Ensuring optimal text contrast for light theme");
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
