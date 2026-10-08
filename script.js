const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const loginDialog = document.querySelector('#login-dialog');

menuToggle?.addEventListener('click', () => {
  if (!mainNav) return;
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-open-login]').forEach((button) => {
  button.addEventListener('click', () => loginDialog.showModal());
});

document.querySelector('.dialog-close')?.addEventListener('click', () => loginDialog.close());

document.querySelector('#toggle-password')?.addEventListener('click', (event) => {
  const password = document.querySelector('#login-password');
  const visible = password.type === 'text';
  password.type = visible ? 'password' : 'text';
  event.currentTarget.textContent = visible ? 'Show' : 'Hide';
  event.currentTarget.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
});

document.querySelector('#login-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#login-status').textContent = 'Demo sign-in ready. Connect this form to your authentication service.';
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

document.querySelector('#register-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#register-status').textContent = 'Demo registration ready. Connect this form to your account service.';
});