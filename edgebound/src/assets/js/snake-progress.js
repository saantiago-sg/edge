window.onscroll = function() {
    snakeProgress()
};

function snakeProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector("#bar").style.width = scrolled + "%";
}