console.log("Sistema PETee carregado.");

// ======================================================
// 1. Lógica do Modo Escuro
// ======================================================
const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

themeCheckbox.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});
// ======================================================
// 2. Configuração dos Botões das Abas (Event Listeners)
// ======================================================
// Seleciona todos os botões que têm o atributo 'data-tab'
const navButtons = document.querySelectorAll('.nav-btn[data-tab]');

navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const tabName = button.getAttribute('data-tab');
    openTab(tabName, button);
  });
});

// ======================================================
// 3. Função que Troca as Abas
// ======================================================
function openTab(tabName, clickedButton = null) {
  // A. Esconder todo o conteúdo das abas
  const contents = document.getElementsByClassName('tab-content');
  for (let content of contents) {
    content.classList.remove('active-tab');
  }

  // B. Remover o destaque de todos os botões
  navButtons.forEach(btn => btn.classList.remove('active'));

  // C. Mostrar apenas o conteúdo desejado (proteção contra erro se id não existir)
  const targetContent = document.getElementById(tabName);
  if (targetContent) {
    targetContent.classList.add('active-tab');
  }

  // D. Destacar o botão correto
  if (clickedButton) {
    // Se foi um clique manual
    clickedButton.classList.add('active');
  } else {
    // Se veio pelo carregamento da página, buscamos o botão pelo atributo
    const autoButton = document.querySelector(`.nav-btn[data-tab="${tabName}"]`);
    if (autoButton) autoButton.classList.add('active');
  }
  
  // E. Atualizar a URL
  window.location.hash = tabName;
}

// ======================================================
// 4. Carregamento Inicial (Roda ao abrir o site)
// ======================================================
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1); 
  if (hash) {
    // Chama a função sem passar um botão clicado (o script acha sozinho)
    openTab(hash);
  }
});

// ======================================================
// 5. Menu Hambúrguer (Mobile)
// ======================================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Abre/Fecha ao clicar no ícone
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  
  // Opcional: Troca o ícone de "Barras" para "X"
  const icon = hamburger.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});

// Fecha o menu automaticamente quando clicar em um botão (link)
document.querySelectorAll(".nav-btn").forEach(n => n.addEventListener("click", () => {
  navMenu.classList.remove("active");
  // Reseta o ícone
  const icon = hamburger.querySelector("i");
  icon.classList.remove("fa-times");
  icon.classList.add("fa-bars");
}));
