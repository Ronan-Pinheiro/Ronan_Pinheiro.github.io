//  Função para verificar se o elemento está visível na tela
export function projetos() {

function isElementInViewportProjetoIcon(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe de animação quando o elemento está visível
function checkAnimationProjetoIcon() {
  var projetoIcons = document.querySelectorAll('.projeto-icon');
  projetoIcons.forEach(function(projetoIcon) {
    var iconProjetos = projetoIcon.querySelectorAll('.icon-projeto');
    iconProjetos.forEach(function(iconProjeto) {
      if (isElementInViewportProjetoIcon(iconProjeto)) {
        iconProjeto.classList.add('animate');
      }
    });
  });
}

// Adiciona um event listener para verificar quando o usuário rolar a página
window.addEventListener('scroll', checkAnimationProjetoIcon);

// Verifica a animação inicialmente (caso os elementos já estejam visíveis quando a página é carregada)
checkAnimationProjetoIcon();
}
