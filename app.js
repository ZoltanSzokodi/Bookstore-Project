// Fetch Data from API

function getData() {
  const url = "https://api.myjson.com/bins/zyv02";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.books.forEach(book => console.log(book.cover))
    })
}
getData()




// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.addEventListener("scroll", scrollFunction);
const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.style.padding = "3rem 1rem";
    navbar.style.backgroundColor = "white";
    logo.style.fontSize = "2.5rem";
  } else {
    navbar.style.padding = "8rem 1rem";
    navbar.style.backgroundColor = "transparent";
    logo.style.fontSize = "3.5rem";
  }
}

