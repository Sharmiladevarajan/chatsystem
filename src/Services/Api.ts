import client from "./Client";


export async function createOrUpdateChat(body: object) {
  let result = await client(
   "http://localhost:8080/createOrUpdate",
    body,
    "POST",
  );
  return result;
}

export async function fetchUserData(body: object) {
    let result = await client(
     "http://localhost:8080/fetchUserData",
      body,
      "POST",
    );
    return result;
  }

  export async function fetchChatHistory(body: object) {
    let result = await client(
     "http://localhost:8080/fetchChatHistory",
      body,
      "POST",
    );
    return result;
  }

  export async function fetchAllChats(body: object) {
    let result = await client(
     "http://localhost:8080/fetchAllChats",
      body,
      "POST",
    );
    return result;
  }