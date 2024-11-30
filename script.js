document.addEventListener('DOMContentLoaded', () => {
  // Inicializa como tema escuro
  document.body.classList.add('dark-theme');

  // Alterna entre temas ao mudar o checkbox
  document.getElementById('theme-switch').addEventListener('change', (event) => {
      if (event.target.checked) {
          document.body.classList.remove('dark-theme');
          document.body.classList.add('light-theme');
      } else {
          document.body.classList.remove('light-theme');
          document.body.classList.add('dark-theme');
      }
  });
});

function createToken() {
  // Mostra o formulário de criação de token
  document.getElementById('create-token-form').classList.remove('hidden');
  // Oculta os botões principais
  document.getElementById('button-container').classList.add('hidden');
}

function transferTokens() {
  // Lógica para transferir tokens (caso necessário)
  console.log("Transfer Tokens logic here.");
}

function deployToken() {
  // Lógica para criar o token
  showSuccessMessage();
}

function showSuccessMessage() {
  document.getElementById('button-container').classList.add('hidden');
  document.getElementById('success-message').classList.remove('hidden');
  setTimeout(() => {
      document.getElementById('button-container').classList.remove('hidden');
      document.getElementById('success-message').classList.add('hidden');
  }, 4000);
}

function cancelTokenForm() {
  // Oculta o formulário de criação de token e volta para os botões principais
  document.getElementById('create-token-form').classList.add('hidden');
  document.getElementById('button-container').classList.remove('hidden');
}

function createNewToken() {
  document.getElementById('create-token-form').classList.add('hidden');
  document.getElementById('button-container').classList.remove('hidden');
  document.getElementById('success-message').classList.add('hidden');
}
