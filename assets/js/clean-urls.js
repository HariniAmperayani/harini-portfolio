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
