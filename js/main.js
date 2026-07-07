// ===== Sidebar mobile (abrir/fechar) =====
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('sidebarScrim');

function openSidebar() {
  sidebar.classList.add('open');
  scrim.classList.add('open');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  scrim.classList.remove('open');
}

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });
}
if (scrim) {
  scrim.addEventListener('click', closeSidebar);
}

// Fecha o menu ao clicar em qualquer arquivo da sidebar (mobile)
document.querySelectorAll('.file-link').forEach(link => {
  link.addEventListener('click', closeSidebar);
});

// ===== Destaca o arquivo/aba ativo conforme a rolagem =====
const sections = document.querySelectorAll('.file-section[id]');
const fileLinks = document.querySelectorAll('.file-link');
const tabs = document.querySelectorAll('.tab');

function setActive(id) {
  fileLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === id);
  });
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.tab === id);
  });
}

if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
} else {
  // fallback: marca o primeiro item como ativo
  setActive('topo');
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
