document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!form.matches('[data-mail-form]')) return;
  event.preventDefault();

  const email = (form.querySelector('[name="email"]')?.value || '').trim();
  const message = (form.querySelector('[name="message"]')?.value || '').trim();

  if (!email || !message) return;

  const subject = encodeURIComponent('UX Portfolio Contact');
  const body = encodeURIComponent(`Email: ${email}\n\n${message}`);
  window.location.href = `mailto:harini.avs1@gmail.com?subject=${subject}&body=${body}`;
});
