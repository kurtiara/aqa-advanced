function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching todo:", error));
}

function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching user:", error));
}

Promise.all([getTodo(), getUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log("Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);
  })
  .catch((error) => console.error("Error in Promise.all:", error));

Promise.race([getTodo(), getUser()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((error) => console.error("Error in Promise.race:", error));
