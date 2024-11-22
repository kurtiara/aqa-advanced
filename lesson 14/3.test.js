const axios = require("axios");

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Request failed");
  }
}

jest.mock("axios");

test("fetchData successfully retrieves data", async () => {
  axios.get.mockResolvedValue({ data: { id: 1, title: "Test Post" } });

  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  expect(data).toEqual({ id: 1, title: "Test Post" });
});

test("fetchData handles request failure", async () => {
  axios.get.mockRejectedValue(new Error("Request failed"));

  await expect(
    fetchData("https://jsonplaceholder.typicode.com/posts/invalid")
  ).rejects.toThrow("Request failed");
});
