//side navigation onClick functions
function openNav() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

function closeNav() {
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

//fullpage scroll
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
});

//methods
fullpage_api.setAllowScrolling(false);
