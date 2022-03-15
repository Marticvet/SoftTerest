import { authService } from "./authService.js";

export async function jsonRequest(
  url,
  method = "Get",
  body = undefined,
  isAuthorized,
  skipResult = true
) {
  try {
    const headers = {};

    if (["put", "delete", "patch"].includes(method.toLowerCase())) {
      headers["Content-Type"] = "application/json";
    }

    if (isAuthorized) {
      headers["X-Authorization"] = authService.getAuthToken();
    }

    const options = {
      headers,
      method,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    if (!response.ok) {
      const message = await response.text();
      throw new Error(`${response.status}: ${response.statusText}\n${message}`);
    }

    if (skipResult) {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
}
