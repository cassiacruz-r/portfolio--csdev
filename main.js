// ---------- header com sombra ao rolar ----------
(function(){
  var header = document.querySelector('header');
  if(!header) return;
  window.addEventListener('scroll', function(){
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }, { passive: true });
})();

// ---------- scroll reveal ----------
(function(){
  var items = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    items.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(function(el){ io.observe(el); });
})();

// ---------- carrossel de projetos (dots) ----------
(function(){
  var scroller = document.querySelector('.proj-scroller');
  var dots = document.querySelectorAll('.proj-dots span');
  if(!scroller || !dots.length) return;
  var cards = scroller.querySelectorAll('.proj-card');

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var idx = Array.prototype.indexOf.call(cards, entry.target);
        dots.forEach(function(d, i){ d.classList.toggle('active', i === idx); });
      }
    });
  }, { root: scroller, threshold: 0.6 });

  cards.forEach(function(c){ io.observe(c); });
})();

// ---------- formulário de contato (mailto, sem backend) ----------
(function(){
  var form = document.getElementById('contactForm');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var nome = form.nome.value;
    var empresa = form.empresa.value;
    var segmento = form.segmento.value;
    var mensagem = form.mensagem.value;
    var body = 'Nome: ' + nome + '%0D%0AEmpresa: ' + empresa + '%0D%0ASegmento: ' + segmento + '%0D%0A%0D%0A' + encodeURIComponent(mensagem);
    window.location.href = 'mailto:contato@cassiacruz.dev?subject=' + encodeURIComponent('Orçamento — ' + (empresa || nome)) + '&body=' + body;
  });
})();
