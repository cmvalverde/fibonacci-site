
document.querySelector('.formulario').addEventListener('submit', function(e) {
  const email = document.querySelector('input[name="email"]').value;
  if (!email.includes('@')) {
    e.preventDefault();
    alert('Por favor, insira um e-mail válido.');
  }
});


function toggleMenu() {
  const menu = document.getElementById('menu-mobile-list');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}


// Adiciona classe 'scrolled' no menu após rolagem
window.addEventListener('scroll', function () {
  const menu = document.querySelector('.menu-topo');
  menu.classList.toggle('scrolled', window.scrollY > 50);
});

// Ativa fade-in ao rolar a página
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));
