import { connectToApi, apiUrl } from "./api.js";

const postsContainer = document.querySelector(".blog-container");
let currentPage = 1;
const postsPerPage = 10;

function getFeaturedPosts() {
  const url = `${apiUrl}?_embed&filter[orderby]=date&page=${currentPage}&per_page=${postsPerPage}`;
  connectToApi(url)
    .then((posts) => {
      if (posts.length > 0) {
        posts.forEach((post) => {
          const postElement = document.createElement("div");
          console.log(post);
          postElement.innerHTML = `
          <div class="post">
          <div class="post-image">
          <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post.title.rendered}" />
          </div>
          <div class="post-content">
          <h3><a href="post.html?id=${post.id}">${post.title.rendered}</a></h3>
          <p>${post.excerpt.rendered}</p>
          <p><a href="post.html?id=${post.id}" class="btn-red btn-full">Read post</a></p>
          </div>
          </div>
        `;
          postsContainer.appendChild(postElement);
        });
        // Check if the posts array is less than the posts per page
        if (posts.length < postsPerPage) {
          document.querySelector("#loadMore").style.display = "none";
        } else {
          currentPage++; // Only increment the page if full page of posts was loaded
        }
      } else {
        // No posts to load, hide the button
        document.querySelector("#loadMore").style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
      document.querySelector("#loadMore").style.display = "none"; // Hide the button if there is an error
    });
  // Hide the spinner when posts are loaded
  document.querySelector(".spinner").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  getFeaturedPosts();
  document.getElementById("loadMore").addEventListener("click", function () {
    getFeaturedPosts();
  });
});
