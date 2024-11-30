// Init TWA
Telegram.WebApp.ready();
Telegram.WebApp.onEvent("themeChanged", function () {
  document.documentElement.className = Telegram.WebApp.colorScheme;
});
Telegram.WebApp.MainButton.setParams({ text: "Main Button" });
Telegram.WebApp.MainButton.onClick(function () {
  Telegram.WebApp.showAlert("Main Button was clicked");
});
Telegram.WebApp.MainButton.show();

document.getElementById('theme-switch').addEventListener('change', (event) => {
  if (event.target.checked) {
    document.body.classList.remove('dark-theme');
  } else {
    document.body.classList.add('dark-theme');
  }
});

function createToken() {
  document.getElementById('create-token-form').classList.remove('hidden');
}

function transferTokens() {
  document.getElementById('transfer-token-form').classList.toggle('hidden');
}

function deployToken() {
  // Logic for deploying the token goes here
  // On successful deployment:
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

function createNewToken() {
  document.getElementById('create-token-form').classList.add('hidden');
  document.getElementById('button-container').classList.remove('hidden');
  document.getElementById('success-message').classList.add('hidden');
}

import * as starknet from 'https://cdn.jsdelivr.net/npm/starknet@5.19.5/+esm';
const starkProvider = new starknet.SequencerProvider({ baseUrl: starknet.constants.BaseUrl.SN_MAIN });
async function getChainId() {
  const chainId = await starkProvider.getChainId();
  console.log("StarkNet Chain ID:", chainId);
}
getChainId();