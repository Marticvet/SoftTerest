import createPage from "./pages/create.js";
import dashboardPage from "./pages/dashboard.js";
import deletePage from "./pages/deleteDetail.js";
import detailsPage from "./pages/details.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";
import { authService } from "./services/authService.js";

const views = {
  "home-page": async () => await homePage.getView(),
  "login-page": async () => await loginPage.getView(),
  "register-page": async () => await registerPage.getView(),
  details: async (id) => await detailsPage.getView(id),
  "create-page": async () => await createPage.getView(),
  dashboard: async () => await dashboardPage.getView(),
  'logout': async () =>  await authService.logout(),
  'delete-detail': async (id) => await deletePage.deleteIdea(id)
};

function initiliaze(allLinkElements,) {
  allLinkElements.forEach((a) =>
    a.addEventListener("click", changeViewHandler)
  );
}

export async function changeViewHandler(event) {
  const element = event.target.matches(".link")
    ? event.target
    : event.target.closest(".link");
  const route = element.dataset.route;
  const id = element.dataset.id;
  navigateTo(route, id);
}

export async function navigateTo(route, id) {
  if (views.hasOwnProperty(route)) {
    const view = await views[route](id);
    const appElement = document.getElementById("application");
    
    appElement.querySelectorAll(".view").forEach((v) => v.remove());
    appElement.appendChild(view);
  }
}

const viewFinder = {
  initiliaze,
  changeViewHandler,
  navigateTo,
};

export default viewFinder;
