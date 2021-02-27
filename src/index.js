import "./assets/javascript/media.js";
import "./assets/javascript/theme.js";

const needles = document.querySelectorAll(".needle");
const [nHour, nMin, nSec] = needles;

const setNeedlePosition = (needle) => {
  const now = new Date();
  let time, deg;

  switch (needle) {
    case nHour:
      time = now.getHours();
      deg = 360 / 12;
      break;
    default:
      time = needle === nSec ? now.getSeconds() : now.getMinutes();
      deg = 360 / 60;
  }

  needle.style.transform = `translateX(-50%) rotate(${time * deg}deg)`;
};

setInterval(() => {
  setNeedlePosition(nHour);
  setNeedlePosition(nMin);
  setNeedlePosition(nSec);
}, 1000);
