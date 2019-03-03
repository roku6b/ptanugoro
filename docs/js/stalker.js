var icoX = 0, icoY = 0;   // アイコンの位置
var mouX = 0, mouY = 0;   // マウスの位置
var timer;

function onMouseMove() {
  mouX = event.pageX;
  mouY = event.pageY;
}
function startMouseStalker() {
  icoX = event.pageX;
  icoY = event.pageY;
  document.onmousemove = onMouseMove;
  timer = setInterval(function() {
    icoX += (icoX < mouX) ? 1 : -1;
    icoY += (icoY < mouY) ? 1 : -1;
    img.style.left = icoX + "px";
    img.style.top  = icoY + "px";

  }, 10);
}
function stopMouseStalker() {
  document.onmousemove = null;
  clearInterval(timer);
}
