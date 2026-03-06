// Lightweight enhancements for static replica
(function () {
  // Remove Wix ad header entirely.
  var ad = document.getElementById('WIX_ADS');
  if (ad && ad.parentNode) {
    ad.parentNode.removeChild(ad);
  }

  // No backend: keep forms client-only.
  document.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form || form.tagName !== 'FORM') return;
    event.preventDefault();
  }, true);
})();
