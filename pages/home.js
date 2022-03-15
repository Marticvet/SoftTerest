import { authService } from "../services/authService.js";

let section = undefined;

function initiliaze(domElement) {
  section = domElement;
}

function getView() {
  const homeButton = document.getElementById("home-btn");
  const createButton = document.getElementById("create-btn");
  const logoutButton = document.getElementById("logout-btn");
  const loginButton = document.getElementById("login-btn");
  const registerButton = document.getElementById("register-btn");

  if (authService.isLoggedIn() === true) {
    createButton.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
    loginButton.classList.add("hidden");
    registerButton.classList.add("hidden");
    homeButton.classList.remove('hidden')
  } else {
    homeButton.classList.add('hidden')
    createButton.classList.add("hidden");
    logoutButton.classList.add("hidden");
    loginButton.classList.remove("hidden");
    registerButton.classList.remove("hidden");
  }
  return section;
}

const homePage = {
  initiliaze,
  getView,
};

export default homePage;
