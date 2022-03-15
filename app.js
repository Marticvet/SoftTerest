import createPage from "./pages/create.js";
import dashboardPage from "./pages/dashboard.js";
import detailsPage from "./pages/details.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";
import viewFinder from "./viewFinder.js";
import nav from "./pages/nav.js";


(async function () {
  homePage.initiliaze(document.getElementById("home-page"));
  createPage.initiliaze(document.getElementById("idea-page"));
  detailsPage.initiliaze(document.getElementById("details"));
  loginPage.initiliaze(document.getElementById("login-page"));
  registerPage.initiliaze(document.getElementById("register-page"));
  dashboardPage.initiliaze(document.getElementById("dashboard"));
  nav.initiliaze(document.getElementById("navbar"));

  viewFinder.initiliaze(document.querySelectorAll(".link"));
  viewFinder.navigateTo("home-page");
})();
