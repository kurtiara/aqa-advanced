const axios = require("axios");

async function fetchWithHeadersAndParams() {
  return axios.get("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Custom-Header": "CustomValue",
    },
    params: {
      userId: 1,
    },
  });
}

jest.mock("axios");

test("fetchWithHeadersAndParams includes custom headers and params", async () => {
  axios.get.mockResolvedValue({ status: 200, data: [] });

  await fetchWithHeadersAndParams();

  expect(axios.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: {
        "Custom-Header": "CustomValue",
      },
      params: {
        userId: 1,
      },
    }
  );
});
