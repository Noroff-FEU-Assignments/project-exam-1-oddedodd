import { connectToApi, apiUrl } from "./api.js";

const postsContainer = document.querySelector(".posts-container");

function getFeaturedPosts() {
  connectToApi(apiUrl + "?_embed&filter[orderby]=date").then((posts) => {
    let postsTemplate = "";

    // Display the first 5 posts
    for (let i = 0; i < 5; i++) {
      console.log(
        posts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium
          .source_url
      );
      postsTemplate += `
        <div class="post card">
          <img src="${posts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url}" alt="${posts[i].title.rendered}" class="posts-card-image" />
          <h3 class="card-title"><a href="post.html?id=${posts[i].id}">${posts[i].title.rendered}</a></h2>
          <p>${posts[i].excerpt.rendered}</p>
          <p class="text-center"><a href="post.html?id=${posts[i].id}" class="btn-red">Read post</a></p>
        </div>
      `;
    }
    postsContainer.innerHTML = postsTemplate;
  });
}

getFeaturedPosts();
