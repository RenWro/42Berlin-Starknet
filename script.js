document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-theme');

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
  const form = document.getElementById('create-token-form');
  form.classList.remove('hidden'); 
  form.scrollIntoView({ behavior: 'smooth' });
}

function transferTokens() {
  console.log("Transfer Tokens logic here.");
}

function deployToken(event) {
  event.preventDefault();

  const tokenName = document.getElementById('token-name').value;
  const tokenSymbol = document.getElementById('token-symbol').value;
  const tokenSupply = document.getElementById('token-supply').value;
  const tokenAddress = document.getElementById('token-address').value;

  console.log("Token Name:", tokenName);
  console.log("Token Symbol:", tokenSymbol);
  console.log("Token Supply:", tokenSupply);
  console.log("Token Address:", tokenAddress);

  const form = document.getElementById('create-token-form');
  form.classList.add('hidden');

  const successMessage = document.getElementById('success-message');
  successMessage.classList.remove('hidden');
  successMessage.scrollIntoView({ behavior: 'smooth' }); // Rola até a mensagem de sucesso
}

window.createToken = createToken;
window.transferTokens = transferTokens;
window.deployToken = deployToken;
