const polaroidRow = document.getElementById("row-board");
const polaroidNumber = 6;

fetch("https://jsonplaceholder.typicode.com/photos?_limit= " + polaroidNumber)
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts.url);

    posts.forEach((post) => {
      polaroidRow.innerHTML += `
        <div class="polaroid" id="row-polaroid">
            <div class="pin"></div>
            <div class="photo">
              <img src="
              ${post.url}"
              />
            </div>
            <p class="caption">
              ${post.title}
            </p>
        </div> `;
    });
  });
