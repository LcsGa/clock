const body = document.querySelector("body");

const setDimensionsStyle = () => {
  const dimensions = [window.innerWidth, window.innerHeight];
  if (dimensions[0] >= dimensions[1]) {
    body.classList.add("wider");
    body.classList.remove("higher");
  } else {
    body.classList.add("higher");
    body.classList.remove("wider");
  }
};

window.addEventListener("load", setDimensionsStyle);
window.addEventListener("resize", setDimensionsStyle);
