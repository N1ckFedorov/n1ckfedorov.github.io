// Constants for localStorage
const key = "address_metamask";

// Utility functions for localStorage
function saveToLocalStorage(address) {
  localStorage.setItem(key, address);
}

function removeFromLocalStorage() {
  localStorage.removeItem(key);
}

function getAddressFromLocalStorage() {
  return localStorage.getItem(key);
}

// Connect to MetaMask
async function connect() {
  if (!window.ethereum) {
    console.log("MetaMask is not installed!");
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    if (account) {
      saveToLocalStorage(account);
      updateUI(true, account);
    }
  } catch (error) {
    console.error(error);
  }
}

// Disconnect from MetaMask
function disconnect() {
  removeFromLocalStorage();
  updateUI(false);
}

// Update UI based on connection status
function updateUI(isConnected, account = null) {
  const connectButtonContainer = document.querySelectorAll(".header__button");
  const accountDisplay = document.querySelectorAll(".header__account");

  if (isConnected && account) {
    accountDisplay.forEach((container) => {
      container.innerHTML = shortenAddress(account);
    });
    connectButtonContainer.forEach((container) => {
      container.innerHTML =
        '<button class="button outlined disconnect">Disconnect</button>';
    });
  } else {
    accountDisplay.forEach((container) => {
      container.innerHTML = "";
    });
    connectButtonContainer.forEach((container) => {
      container.innerHTML = '<button class="button connect">Connect</button>';
    });
  }
}

function shortenAddress(address) {
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
}

// Check if there's an account connected on page load and update UI accordingly
function checkConnectionOnLoad() {
  const savedAccount = getAddressFromLocalStorage();
  updateUI(!!savedAccount, savedAccount);
}

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  checkConnectionOnLoad();

  const connectButtonContainer = document.querySelectorAll(".header__button");
  const mobileMenuTrigger = document.querySelector(".header__humburger");
  const mobileMenu = document.querySelector(".menu");

  // Toggle mobile menu
  mobileMenuTrigger.addEventListener("click", function () {
    mobileMenu.style.display =
      mobileMenu.style.display === "block" ? "none" : "block";
  });

  // on resize close mobile menu

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mobileMenu.style.display = "none";
    }
  });

  // Connect and Disconnect button events
  connectButtonContainer.forEach((container) => {
    container.addEventListener("click", function (event) {
      if (event.target.classList.contains("connect")) {
        connect();
      } else if (event.target.classList.contains("disconnect")) {
        disconnect();
      }
    });
  });
});
