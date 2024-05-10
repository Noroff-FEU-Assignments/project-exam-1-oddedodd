/**
 *  Set the production variable to true if you want to use the production API
 */
const production = true;

let apiUrl = "";

if (production) {
  apiUrl = "https://retro-oddities.flywheelsites.com/wp-json/wp/v2/posts/";
} else {
  apiUrl = "http://retro-oddity.local/wp-json/wp/v2/posts/";
}

/**
 * Connect to the API and return all posts
 */
async function connectToApi(apiUrl) {
  let posts = [];
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error();
    }
    return (posts = response.json());
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export { connectToApi, apiUrl };
