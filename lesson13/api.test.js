const axios = require("axios");

test("Get posts1", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200);
});

test("Get posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200);
});

test("Update post 1", async () => {
  const response = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      id: 1,
      title: "Updated title for post 1",
      body: "Updated body for post 1",
      userId: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200);
});

test("Update post 2", async () => {
  const response = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/2",
    {
      id: 2,
      title: "Updated title for post 2",
      body: "Updated body for post 2",
      userId: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200);
});

test("Update post 3", async () => {
  const response = await axios.put(
    "https://jsonplaceholder.typicode.com/posts/3",
    {
      id: 3,
      title: "Updated title for post 3",
      body: "Updated body for post 3",
      userId: 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response.data);
  expect(response.status).toEqual(200);
});
