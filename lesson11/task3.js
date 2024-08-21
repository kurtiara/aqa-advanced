async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching todo:", error);
  }
}

async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

async function fetchAllData() {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log("Promise.all results:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Error in Promise.all:", error);
  }
}

async function fetchRaceData() {
  try {
    const result = await Promise.race([getTodo(), getUser()]);
    console.log("Promise.race result:", result);
  } catch (error) {
    console.error("Error in Promise.race:", error);
  }
}

fetchAllData();
fetchRaceData();
