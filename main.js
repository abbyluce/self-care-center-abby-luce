var mainHeading = document.querySelector(".self-care-center");
var subHeading = document.querySelector(".type-of-message");
var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var receiveMessageButton = document.querySelector("#receive-message-button");
var displayReceivedMessage = document.querySelector("p");
var icon = document.querySelector("#icon-1");
var clearMessageButton = document.querySelector(".clear-button");
var loginPage = document.querySelector(".login-container");
var mainPage = document.querySelector(".main-page");
var loginButton = document.querySelector("#submit-name-button");
var name = document.getElementById("name-form");

receiveMessageButton.addEventListener('click', clickReceiveMessageButton);
clearMessageButton.addEventListener('click', clickClearMessageButton);
loginButton.addEventListener('click', clickLoginButton);

function pageLoad() {
  mainPage.classList.add('hidden');
}

function clickLoginButton() {
  mainPage.classList.remove('hidden');
  loginPage.classList.add('hidden');
  var userName = name.value;
  subHeading.innerHTML = `Hello, ${userName}!, which type of message would you like?`;
  console.log(name);
  console.log(name.value);
}

function clickReceiveMessageButton(event) {
  event.preventDefault();
  if (affirmationButton.checked) {
    showAffirmation();
    clearMessageButton.classList.remove('hidden');
    icon.style.display='none';
  } else if (mantraButton.checked) {
    clearMessageButton.classList.remove('hidden');
    icon.style.display='none';
    showMantra();
  }
  else {
    alert("You forgot to select an option!");
  }
}

function showAffirmation() {
  displayReceivedMessage.innerHTML = '';
  var affirmationIndex = Math.floor(Math.random() * affirmationsArray.length);
  var affirmation = affirmationsArray[affirmationIndex];
  displayReceivedMessage.innerText = `${affirmation}`
};

function showMantra() {
  displayReceivedMessage.innerHTML = '';
  var mantraIndex = Math.floor(Math.random() * mantrasArray.length);
  var mantra = mantrasArray[mantraIndex];
  displayReceivedMessage.innerText = `${mantra}`
};

function clickClearMessageButton() {
  icon.style.display="";
  displayReceivedMessage.innerText = "";
  clearMessageButton.classList.add('hidden');
  affirmationButton.checked = false;
  mantraButton.checked = false;
}
