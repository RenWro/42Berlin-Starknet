
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

  const buttonContainer = document.getElementById('dynamic-button-container');
  buttonContainer.innerHTML = `
    <button class="main-button" id="deploy-token-button" onclick="deployToken(event);">Deploy Token</button>
  `;
}

function deployToken(event) {
  event.preventDefault();

  const tokenName = document.getElementById('token-name').value.trim();
  const tokenSymbol = document.getElementById('token-symbol').value.trim();
  const tokenSupply = document.getElementById('token-supply').value.trim();
  const tokenAddress = document.getElementById('token-address').value.trim();

  if (!tokenName || !tokenSymbol || !tokenAddress) {
    alert("Please fill out the Name, Symbol, and Wallet Address fields before deploying the token.");
    return;
  }

  console.log("Token Name:", tokenName);
  console.log("Token Symbol:", tokenSymbol);
  console.log("Token Supply:", tokenSupply);
  console.log("Token Address:", tokenAddress);

  const tg = window.Telegram.WebApp;
  const formData = {
    name: tokenName,
    symbol: tokenSymbol,
    supply: tokenSupply,
    walletAddress: tokenAddress,
  };

  tg.sendData(JSON.stringify(formData));

  const form = document.getElementById('create-token-form');
  form.classList.add('hidden');

  const successMessage = document.getElementById('success-message');
  successMessage.classList.remove('hidden');
  successMessage.scrollIntoView({ behavior: 'smooth' });

  const buttonContainer = document.getElementById('dynamic-button-container');
  buttonContainer.innerHTML = `
    <button class="main-button" id="create-token-button" onclick="createToken();">Create Token</button>
  `;
}

function transferTokens() {
  console.log("Transfer Tokens logic here.");
}

window.createToken = createToken;
window.transferTokens = transferTokens;
window.deployToken = deployToken;
