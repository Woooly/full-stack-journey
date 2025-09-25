// ===== FUNÇÃO PARA ROLAR PARA O TOPO =====
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ===== CONTROLE DO SCROLL - BOTÃO TOPO E NAVEGAÇÃO ATIVA =====
window.addEventListener('scroll', function() {
  const botaoTopo = document.getElementById('botao-topo');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  // Mostrar/esconder botão baseado na posição do scroll
  if (window.scrollY > 300) {
    botaoTopo.classList.add('mostrar');
  } else {
    botaoTopo.classList.remove('mostrar');
  }
  
  // Marcar seção ativa baseada no scroll
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  
  // Atualizar classe ativa nos links da navegação
  navLinks.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('ativo');
    }
  });
});

// ===== SCROLL SUAVE NOS LINKS DA NAVEGAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 100;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== EVENT LISTENER PARA O BOTÃO VOLTAR AO TOPO =====
  const botaoTopo = document.getElementById('botao-topo');
  if (botaoTopo) {
    botaoTopo.addEventListener('click', scrollToTop);
  }
});