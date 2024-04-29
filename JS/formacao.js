// animacao_dos_quadrados.js

export function formacao() {                                  
// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe de animação quando o elemento está visível
function checkAnimation() {
  var iconsBack = document.querySelectorAll('.icon-back');
  iconsBack.forEach(function(iconBack) {
    if (isElementInViewport(iconBack)) {
      iconBack.classList.add('animate');
    }
  });
}

// Adiciona um event listener para verificar quando o usuário rolar a página
window.addEventListener('scroll', checkAnimation);

// Verifica a animação inicialmente (caso os elementos já estejam visíveis quando a página é carregada)
checkAnimation();
}
 
