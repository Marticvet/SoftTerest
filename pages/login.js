import { authService } from "../services/authService.js";
import { jsonRequest } from "../services/httpService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function initiliaze(domElement) {
  section = domElement;
  const form = section.querySelector("#login-form");
  form.addEventListener("submit", loginUser);
}

export function getView() {
  return section;
}

async function loginUser(event) {
  try {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();

    const user = {
      email,
      password,
    };
    const loginUser = await jsonRequest(
      "http://localhost:3030/users/login",
      "Post",
      user,
      false
    );

    if (!loginUser) {
      alert("Email adress or password isn't correct");
      form.reset();
      return;
    }

    authService.setAuthToken(loginUser.accessToken);
    authService.setUserId(loginUser._id);

    form.reset();

    viewFinder.navigateTo("home-page");
  } catch (err) {
    console.error(err);
  }
}

const loginPage = {
  initiliaze,
  getView,
};

export default loginPage;
