const cleanUrlMap = {
  "/index.html": "/",
  "/resume.html": "/resume/",
  "/projects.html": "/projects/",
  "/contact.html": "/contact/",
  "/case-study-frugal.html": "/case-study-frugal/",
};

const cleanPath = cleanUrlMap[window.location.pathname];

if (cleanPath) {
  window.location.replace(cleanPath);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mobile-menu").forEach((menu) => {
    document.addEventListener("click", (event) => {
      if (!menu.open || menu.contains(event.target)) {
        return;
      }

      menu.open = false;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        menu.open = false;
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.open = false;
      });
    });
  });
});
