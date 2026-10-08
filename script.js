// Shared by every page. Each piece looks for its own element and does nothing if the page doesn't have it.

// Phone menu: the "Menu" button opens and closes the nav links.
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Tapping a link closes the phone menu.
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Sign-in page: the Show/Hide button flips the password between dots and text.
document.querySelector('#toggle-password')?.addEventListener('click', (event) => {
  const password = document.querySelector('#login-password');
  const isVisible = password.type === 'text';
  password.type = isVisible ? 'password' : 'text';
  event.currentTarget.textContent = isVisible ? 'Show' : 'Hide';
  event.currentTarget.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
});

// The forms below are demos. They save nothing and send nothing.
// They only show a friendly message under the form.

document.querySelector('#login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#login-status').textContent = 'Demo sign-in ready. Connect this form to your authentication service.';
});

document.querySelector('#register-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#register-status').textContent = 'Demo registration ready. Connect this form to your account service.';
});

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  document.querySelector('#form-status').textContent = 'Thanks. Your message is ready for the Legion team.';
});

document.querySelector('#chat-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  document.querySelector('#chat-status').textContent = `Message received: "${input.value}". A care summary is being prepared.`;
  input.value = '';
});
