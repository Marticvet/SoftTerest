import { jsonRequest } from "../services/httpService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function initiliaze(domElement) {
  section = domElement;
  const form = section.querySelector("#create-idea");
  form.addEventListener("submit", createIdea);
}

export function getView() {
  return section;
}

async function createIdea(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const title = formData.get("title").trim();
  const description = formData.get("description").trim();
  const img = formData.get("imageURL").trim();

  if (title.length < 6 || description.length < 10 || img.length < 6) {
    alert(
      "The information about Your idea doesn't require minimum inputs length. Please enter longer information!"
    );
  }

  const idea = {
    title,
    description,
    img,
  };

  const createIdea = await jsonRequest(
    "http://localhost:3030/data/ideas",
    "Post",
    idea,
    true
  );

  form.reset();
  viewFinder.navigateTo("dashboard");
}

const createPage = {
  initiliaze,
  getView,
};

export default createPage;
