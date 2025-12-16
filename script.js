console.log("Sistema PETee carregado.");

// Lógica do Modo Escuro (Mantida)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Lógica das Abas (Nova)
function openTab(tabName) {
  // 1. Esconder todo o conteúdo das abas
  const contents = document.getElementsByClassName('tab-content');
  for (let content of contents) {
    content.classList.remove('active-tab');
  }

  // 2. Remover o destaque de todos os botões
  const buttons = document.getElementsByClassName('nav-btn');
  for (let btn of buttons) {
    btn.classList.remove('active');
  }

  // 3. Mostrar apenas o conteúdo clicado
  document.getElementById(tabName).classList.add('active-tab');

  // 4. Destacar o botão clicado (Busca o botão que chamou a função)
  // Nota: O 'event' é capturado automaticamente pelo navegador
  event.currentTarget.classList.add('active');
}
