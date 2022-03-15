import { jsonRequest } from "../services/httpService.js";
import viewFinder from "../viewFinder.js";

export async function deleteIdea(event) {
  const detailId = event.target.dataset.id;
   const deleteResult = await jsonRequest(`http://localhost:3030/data/ideas/${detailId}`, 'Delete', undefined, true);

   viewFinder.navigateTo('dashboard');
}

const deletePage = {
   deleteIdea
}

export default deletePage;