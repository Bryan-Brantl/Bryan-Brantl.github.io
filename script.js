console.log("Sistema PETee carregado.");

// ======================================================
// 1. Lógica do Modo Escuro
// ======================================================
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

// ======================================================
// 2. Função que Troca as Abas (Chamada pelo clique)
// ======================================================
function openTab(tabName) {
  // A. Esconder todo o conteúdo das abas
  const contents = document.getElementsByClassName('tab-content');
  for (let content of contents) {
    content.classList.remove('active-tab');
  }

  // B. Remover o destaque de todos os botões
  const buttons = document.getElementsByClassName('nav-btn');
  for (let btn of buttons) {
    btn.classList.remove('active');
  }

  // C. Mostrar apenas o conteúdo clicado
  document.getElementById(tabName).classList.add('active-tab');
  
  // D. Atualizar a URL (Adiciona o #nomeDaAba)
  window.location.hash = tabName;

  // E. Destacar o botão clicado
  // Se o clique veio do usuário (mouse), usa o event.currentTarget
  // Se veio do carregamento automático, a gente ignora essa linha (o script de load já resolve)
  if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
  }
}

// ======================================================
// 3. Lógica de Carregamento (Roda SOZINHO ao abrir o site)
// ======================================================
window.addEventListener('load', () => {
  // Pega o hash da URL (remove o # do começo)
  const hash = window.location.hash.substring(1); 
  
  // Se tiver um hash (ex: #pesquisa)
  if (hash) {
    const button = document.querySelector(`button[onclick="openTab('${hash}')"]`);
    
    // Se achou o botão, clica nele virtualmente
    if (button) {
      // Adicionamos a classe active manualmente aqui para garantir visual
      button.classList.add('active'); 
      // Chamamos a função de abrir a aba
      openTab(hash);
    }
  }
});
