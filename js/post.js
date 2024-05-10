import { connectToApi, apiUrl } from "./api.js";

const postContainer = document.querySelector(".post-container");
const documentTitle = document.querySelector("title");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function displayPost() {
  connectToApi(apiUrl + id + "?_embed").then((post) => {
    let postTemplate = `<h1 class="post-title">${post.title.rendered}</h1> ${post.content.rendered}`;
    postContainer.innerHTML = postTemplate;
    documentTitle.innerHTML = post.title.rendered + " - Retro Oddities";

    // get all images in the post and add a click event to display them in a modal
    document.querySelectorAll(".post-container img").forEach((img) => {
      img.style.cursor = "pointer";
      img.onclick = function () {
        document.getElementById("imageModal").style.display = "block";
        document.getElementById("modalImage").src = this.src;
        document.getElementById("caption").innerHTML = this.alt;
      };
    });
  });
}

// Close the modal
let modal = document.getElementById("imageModal");
document.getElementsByClassName("close")[0].onclick = function () {
  modal.style.display = "none";
};

// Click outside the modal to close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

displayPost();
