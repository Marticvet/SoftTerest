import { jsonRequest } from "../services/httpService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function initiliaze(domElement) {
  section = domElement;
  const form = section.querySelector("#register-form");
  form.addEventListener("submit", registerUser);
}

export async function getView() {
  return section;
}

async function registerUser(event) {
  try {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const rePassword = formData.get("repeatPassword").trim();

    if (email.length < 3 || password.length < 3 || password !== rePassword) {
      alert("Email adress must be valid or passwords aren't matching!");
    }

    const user = {
      email,
      password,
    };

    const newUser = await jsonRequest(
      "http://localhost:3030/users/register",
      "Post",
      user
    );

    form.reset();

    if (newUser) {
      viewFinder.navigateTo("home-page");
    }
  } catch (err) {
    console.error(err);
  }
}

const registerPage = {
  initiliaze,
  getView,
};

export default registerPage;
