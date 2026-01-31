// --- Theme Engine ---
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
updateThemeUI(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = document.body.getAttribute('data-theme');
  const target = current === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', target);
  updateThemeUI(target);
  localStorage.setItem('theme', target);
});

function updateThemeUI(theme) {
  if (theme === 'dark') {
    themeIcon.setAttribute('data-lucide', 'sun');
    themeLabel.innerText = 'LIGHT MODE';
  } else {
    themeIcon.setAttribute('data-lucide', 'moon');
    themeLabel.innerText = 'DARK MODE';
  }
  lucide.createIcons();
}

// --- Manual Tab Selection Logic ---
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    const cards = document.querySelectorAll('.product-card');

    cards.forEach((card) => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Initial render logic to ensure 'All' is shown on first load properly
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach((card) => (card.style.display = 'flex'));
});

// --- Scroll Reveal ---
function reveal() {
  document.querySelectorAll('.reveal').forEach((el) => {
    const wh = window.innerHeight;
    const top = el.getBoundingClientRect().top;
    if (top < wh - 80) el.classList.add('active');
  });
}

window.addEventListener('scroll', reveal);
window.onload = () => {
  reveal();
  lucide.createIcons();
};

// --- Hamburger Menu Toggle ---
// --- Hamburger Menu Logic ---
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  // Change icon between Menu and X
  const icon = menuToggle.querySelector('i');
  if (navMenu.classList.contains('active')) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
});

// Close menu when a link is clicked
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.querySelector('i').setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});
