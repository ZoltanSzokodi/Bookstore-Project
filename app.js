window.addEventListener("scroll", scrollFunction);
const navbar = document.querySelector(".navbar");
const navbarLogo = document.querySelector(".navbar-elements_logo");
const navbarLinks = document.querySelectorAll(".nav-l");
const cardsContainer = document.querySelector(".cards-container");

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

// Fetch Data from API
let dataArr = [];

function getData() {
  const url = "https://api.myjson.com/bins/zyv02";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      data.books.forEach(book => {
        dataArr.push(book);

        let card = document.createElement("div");
        card.className = "flip-card";
        card.innerHTML = `
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${book.cover}" alt="Avatar">
            </div>
            <div class="flip-card-back">
              <h1>${book.title}</h1> 
              <button class="card-button">More info</button>
            </div>
          </div>`
        cardsContainer.appendChild(card);
      })
      const cardButton = document.querySelectorAll(".card-button");
      cardButton.forEach(button => button.addEventListener("click", openModal))
    })
}
getData()
console.log(dataArr);


// SLIDE CONTROL

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("demo");
  const captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}



