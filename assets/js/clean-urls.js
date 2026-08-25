const cleanUrlMap = {
  "/index.html": "/",
  "/resume.html": "/resume/",
  "/projects.html": "/projects/",
  "/contact.html": "/contact/",
  "/case-study-frugal.html": "/case-study-frugal/",
};

const canCleanUrl = window.location.protocol === "http:" || window.location.protocol === "https:";
let cleanPath = cleanUrlMap[window.location.pathname];

if (!cleanPath && window.location.pathname.endsWith("/index.html")) {
  cleanPath = window.location.pathname.replace(/index\.html$/, "");
}

if (canCleanUrl && cleanPath) {
  window.location.replace(`${cleanPath}${window.location.search}${window.location.hash}`);
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.protocol === "file:") {
    const rootPath = window.location.pathname
      .replace(/\/(case-study-frugal|projects|resume|contact)\/index\.html$/i, "/")
      .replace(/\/index\.html$/i, "/");

    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const href = link.getAttribute("href");

        if (!href) {
          return;
        }

        event.preventDefault();

        const [path, hash = ""] = href.split("#");
        const localPath = path === "/" || path === ""
          ? `${rootPath}index.html`
          : `${rootPath}${path.replace(/^\/|\/$/g, "")}/index.html`;

        window.location.href = `file://${localPath}${hash ? `#${hash}` : ""}`;
      });
    });
  }

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
