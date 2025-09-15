let currentSize = 16; // početna veličina fonta

function changeFontSize(delta) {
  currentSize += delta;
  if (currentSize < 10) currentSize = 10;   // minimum
  if (currentSize > 40) currentSize = 40;   // maksimum
  document.body.style.fontSize = currentSize + "px";
}
