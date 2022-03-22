window.onresize = resize;
window.onload = resize;
const container = document.getElementById("container");
function resize() {
  let wratio = window.innerWidth / 512;
  let hratio = window.innerHeight / 512;
  container.setAttribute("style", "transform : scale(" + Math.min(wratio, hratio) + ")");
}

const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
function update() {
  let date = new Date();
  minute.setAttribute("style", "transform: rotate(" + (date.getMinutes() * 6 + date.getSeconds() / 10) + "deg)");
  hour.setAttribute("style", "transform: rotate(" + (date.getHours() % 12 * 30 + date.getMinutes() / 2) + "deg)");
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
