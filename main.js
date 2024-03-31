let headerDivs = document.querySelectorAll(".header div");

let first = document.querySelector(".first");
let pContent = document.querySelector(".content p");

let contentData = [
  "1. Lorem ipsum dolor sit amet, consectetur adipisicing \
                laborum blanditiis reprehenderit, explicabo aspernatur \
                laborum blanditiis reprehenderit, explicabo aspernatur \
                reprehenderit, explicabo aspernatur ",
  "2. Ipsum lorem dolor sit amet, consectetur adipisicing \
                laborum blanditiis reprehenderit, explicabo aspernatur \
                laborum blanditiis reprehenderit, explicabo aspernatur \
                reprehenderit, explicabo aspernatur reprehenderit, explicabo aspernatur",
  "3. Ipsum lorem dolor sit amet, consectetur adipisicing \
                laborum blanditiis reprehenderit, explicabo aspernatur \
                laborum blanditiis lorem dolor sit ameto aspernatur \
                reprehenderit, explicabo aspernatur reprehenderit, explicabo aspernatur \
                lorem dolor sit amet adipisicing reprehenderit, explicabo aspernatur",
];

window.onload = function () {
  first.classList.add("active");
  displayContent(0);
}

function addActive() {
  headerDivs.forEach((div, index) => {
    div.addEventListener("click", () => {
      headerDivs.forEach((div) => {
        div.classList.remove("active");
      });

      div.classList.add("active");
      displayContent(index);
    });
  });
}

addActive();

function displayContent(index) {
  pContent.textContent = contentData[index];
}
