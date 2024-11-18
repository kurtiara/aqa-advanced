const axios = require("axios");

async function fetchWithError() {
  try {
    await axios.get("https://jsonplaceholder.typicode.com/invalid-url");
  } catch (error) {
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else if (error.request) {
      return "Error: No response received";
    } else {
      return `Error: ${error.message}`;
    }
  }
}

test("fetchWithError handles error correctly", async () => {
  const errorMessage = await fetchWithError();
  expect(errorMessage).toContain("Error:");
});
