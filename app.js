window.addEventListener("scroll", scrollFunction);
const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar-elements_logo");
const navbarLinks = document.querySelectorAll(".nav-l");
const cardsContainer = document.querySelector(".cards-container");

// Fetch Data from API

function getData() {
  const url = "https://api.myjson.com/bins/zyv02";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.books.forEach(book => {
        console.log(book);

        let card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${book.cover}" alt="Avatar">
            </div>
            <div class="flip-card-back">
              <h1>${book.title}</h1> 
              <p>${book.description}</p> 
              <p>${book.language}</p>
              <p>${book.detail}</p>
            </div>
          </div>`
        cardsContainer.appendChild(card);
      })
    })
}
getData()

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "0rem";
    navbar.style.backgroundColor = "white";
    navbarLogo.style.color = "#261431";
    navbarLogo.style.fontSize = "2rem";
    navbarLinks.forEach(link => link.style.color = "#261431");
  } else {
    navbar.style.padding = "6rem 1rem 8rem";
    navbar.style.backgroundColor = "transparent";
    navbarLogo.style.color = "white";
    navbarLogo.style.fontSize = "3rem";
    navbarLinks.forEach(link => link.style.color = "white");
  }
}

