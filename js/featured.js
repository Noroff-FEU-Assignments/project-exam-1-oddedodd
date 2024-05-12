import { connectToApi, apiUrl } from "./api.js";

const postsContainer = document.querySelector(".posts-container");

function getFeaturedPosts() {
  connectToApi(apiUrl + "?_embed&filter[orderby]=date").then((posts) => {
    let postsTemplate = "";
    let postsTemplateCarousel = "";

    // Display the first 5 posts
    for (let i = 0; i < 5; i++) {
      console.log(
        posts[i]._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium
          .source_url
      );
      postsTemplate += `
        <div class="card">
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

// making the horizonal scroll dragable
document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.querySelector(".scrolling-wrapper");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.scrollBehavior = "auto"; // Disable smooth scrolling on drag
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // the *2 is the speed of the drag, adjust as necessary
    scrollContainer.scrollLeft = scrollLeft - walk;
  });
});

getFeaturedPosts();
