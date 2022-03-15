import homePage from "../pages/home.js";
import { jsonRequest } from "./httpService.js";

export function setAuthToken(token) {
  localStorage.setItem("token", token);
}
export function getAuthToken() {
  return localStorage.getItem("token");
}

export function setUserId(userId) {
  localStorage.setItem("userId", userId);
}

export function getUserId() {
  return localStorage.getItem("userId");
}

export function isLoggedIn() {
  return localStorage.getItem("token") !== null;
}

export async function logout() {
  const result = await jsonRequest(
    "http://localhost:3030/users/logout",
    'Get',
    undefined,
    true,
    false);

  localStorage.clear();
  return homePage.getView();
}


export const authService = {
  setAuthToken,
  getAuthToken,
  setUserId,
  getUserId,
  isLoggedIn,
  logout,
};
