// ===== Menu mobile =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ===== Efeito de "digitação" no hero =====
const codeLines = [
  "const dev = {",
  "  nome: \"Cássia Cruz\",",
  "  cidade: \"Jequié, BA\",",
  "  constroi: [",
  "    \"sites institucionais\",",
  "    \"catálogos digitais\",",
  "    \"landing pages\"",
  "  ],",
  "  disponivel: true",
  "};"
];

const target = document.getElementById('typedCode');

function typeEffect(lines, el) {
  if (!el) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fullText = lines.join('\n');

  if (reduceMotion) {
    el.textContent = fullText;
    return;
  }

  let i = 0;
  const speed = 18;

  function step() {
    if (i <= fullText.length) {
      el.textContent = fullText.slice(0, i);
      i++;
      setTimeout(step, speed);
    }
  }
  step();
}

typeEffect(codeLines, target);
