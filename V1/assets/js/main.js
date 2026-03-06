const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute(
      'aria-expanded',
      navLinks.classList.contains('open').toString()
    );
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const contactForm = document.querySelector('[data-contact-form]');
const statusNode = document.querySelector('[data-form-status]');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.trim() || 'Portfolio inquiry';
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!email || !message) {
      updateStatus('Please share your email and a quick message so I can reply.', true);
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Message:\n${message}\n\nSender email: ${email}`
    );

    window.location.href = `mailto:harini.avs1@gmail.com?subject=${subject}&body=${body}`;
    updateStatus('Thanks! Your mail client should be open. I look forward to reading your note.');
    contactForm.reset();
  });
}

function updateStatus(message, isError = false) {
  if (!statusNode) return;
  statusNode.textContent = message;
  statusNode.style.color = isError ? '#fca5a5' : '#6ee7b7';
}
