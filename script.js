console.log("Site carregado com sucesso!");

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário clica no botão
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Muda o ícone do botão dependendo do tema
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
