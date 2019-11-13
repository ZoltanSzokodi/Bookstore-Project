window.addEventListener("scroll", scrollFunction);
const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar-elements_logo");
const navbarLinks = document.querySelectorAll(".nav-l");
const cardsContainer = document.querySelector(".cards-container");
const overlayContent = document.querySelector(".overlay-content");

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

let booksArr = [];

// Fetch Data from API

async function getData() {
  const url = "https://api.myjson.com/bins/zyv02";
  await fetch(url)
    .then(res => res.json())
    .then(data => {
      data.books.forEach(book => {
        booksArr.push(book);
        
        let card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${book.cover}" alt="Avatar">
            </div>
            <div class="flip-card-back">
              <h1>${book.title}</h1> 
              <button class="card-button" data-book="${book.title}">More info</button>
            </div>
          </div>`
        cardsContainer.appendChild(card);
      })
      const cardButton = document.querySelectorAll(".card-button");
      const closeBtn = document.querySelector(".close-btn")
      cardButton.forEach(button => button.addEventListener("click", openBook))
      closeBtn.addEventListener("click", closeBook);
    })
}
getData();
// console.log(booksArr);


function openBook(e) {
  let select;
  document.getElementById("myBook").style.width = "100%";
  let bookTitle = e.target.getAttribute("data-book");
  
  booksArr.forEach(book => {
    if(bookTitle === book.title) {
      select = book
    }
  })
  // console.log(select);
  let overlayImg = document.createElement("div");
  overlayImg.className = "overlay-content_img";
  overlayImg.style.backgroundImage = `url(${select.cover})`

  overlayContent.appendChild(overlayImg);
  select = [];
  // console.log(select);
}

function closeBook() {
  let overlayImg = document.querySelector(".overlay-content_img");
  overlayImg.parentNode.removeChild(overlayImg);
  document.getElementById("myBook").style.width = "0%";
}





