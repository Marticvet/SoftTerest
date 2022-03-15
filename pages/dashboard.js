import { jsonRequest } from "../services/httpService.js";
import { ce } from "../helpers/htmlHelper.js";
import viewFinder from "../viewFinder.js";
let section = undefined;

function initiliaze(domElement) {
  section = domElement;
}

function getView() {
  getAllIdeas();
  return section;
}

async function getAllIdeas() {
  const url =
    "http://localhost:3030/data/ideas";
  const allIdeas = await jsonRequest(url);

  section.querySelectorAll("div").forEach((el) => el.remove());
  section.querySelectorAll("h1").forEach((el) => el.remove());

  if (allIdeas) {
    allIdeas.forEach((idea) => {
      section.appendChild(createIdea(idea));
    });
  } else {
    const h1 = ce(h1, "No ideas yet! Be the first one :)");
    section.appendChild(h1);
  }
}

function createIdea(idea) {
  const detailDiv = ce("div", {
    "data-_ownerId": idea._ownerId,
    class: "card overflow-hidden current-card details",
    style: "width: 20rem; height: 18rem;",
  });

  const cardDiv = ce("div", { class: "card-body" });
  const recipeP = ce("p", { class: "card-text" }, idea.title);

  const img = ce("img", {
    class: "card-image",
    src: `${idea.img}`,
    alt: "Card image cap",
  });
  const anchor = ce(
    "a",
    {'data-id': idea._id ,"data-route": "details", class: "btn link", href: "#" },
    "Details"
  );

  anchor.addEventListener("click", viewFinder.changeViewHandler)
  cardDiv.appendChild(recipeP);

  detailDiv.appendChild(cardDiv);
  detailDiv.appendChild(img);
  detailDiv.appendChild(anchor);

  return detailDiv;
}

const dashboardPage = {
  initiliaze,
  getView,
};

export default dashboardPage;
