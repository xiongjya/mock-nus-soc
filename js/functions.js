// get the button
var topBtn = document.getElementById("topBtn");

var rootElement = document.documentElement;

// when the user clicks on the button, scroll to the top of the document
function toTopFunction() {
  rootElement.scrollTo({
    top: 0,
    behaviour: "smooth"
  })
}

topBtn.addEventListener("click", toTopFunction);

// when the user scrolls down one screen from the top of the page, the button would then be shown
function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if ((rootElement.scrollTop / scrollTotal) > 0.80) {
    // show button
    topBtn.classList.add("showBtn");
  } else {
    // hide button
    topBtn.classList.remove("showBtn");
  }
}

document.addEventListener("scroll", handleScroll);
