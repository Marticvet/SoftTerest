import { ce } from "../helpers/htmlHelper.js";
import { authService } from "../services/authService.js";
import { jsonRequest } from "../services/httpService.js";
import deletePage from "./deleteDetail.js";

let section = undefined;

function initiliaze(domElement) {
  section = domElement;
}

export async function getView(detailId) {
  const getDetails = await jsonRequest(
    `http://localhost:3030/data/ideas/${detailId}`
  );

  section.querySelectorAll(".idea-details").forEach((el) => el.remove());
  section.appendChild(createIdeaDetail(getDetails));
  return section;
}

function createIdeaDetail(idea) {
  const detailDiv = ce("div", {
    "data-ownerId": idea._ownerId,
    class: "idea-details",
  });

  const img = ce("img", { class: "det-img", src: idea.img });

  const infoDiv = ce("div", { class: "desc" });
  const h2 = ce("h2", { class: "display" }, idea.title);
  const descriptionP = ce("p", { class: "infoType" }, "Description:");
  const descriptionInfoP = ce(
    "p",
    { class: "idea-description" },
    idea.description
  );

  const buttonDiv = ce("div", { class: "text-center" });
  const deleteButton = ce(
    "buttonDiv",
    { 'data-route': 'delete-detail', 'data-id': idea._id ,class: "btn debt", href: "#" },
    "Delete"
  );
  deleteButton.addEventListener("click", deletePage.deleteIdea);

  if (authService.getUserId() === idea._ownerId) {
    buttonDiv.appendChild(deleteButton);
  }

  infoDiv.appendChild(h2);
  infoDiv.appendChild(descriptionP);
  infoDiv.appendChild(descriptionInfoP);

  detailDiv.appendChild(img);
  detailDiv.appendChild(infoDiv);
  detailDiv.appendChild(buttonDiv);

  return detailDiv;
}

const detailsPage = {
  initiliaze,
  getView,
};

export default detailsPage;
