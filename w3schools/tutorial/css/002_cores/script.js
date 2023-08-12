function mudargb() {
  const res = document.getElementById("rgbres");
  const txtred = document.getElementById("txtred");
  const txtgreen = document.getElementById("txtgreen");
  const txtblue = document.getElementById("txtblue");

  let red = Number(txtred.value) + 0;
  let green = Number(txtgreen.value) + 0;
  let blue = Number(txtblue.value) + 0;

  // prettier-ignore
  if ((red + green + blue) >= 382) {
    res.style.color = "black";
  } else {
    res.style.color = "white";
  }

  res.style.background = `rgb(${red},${green},${blue})`;
  res.innerHTML = `RGB(${red},${green},${blue})`;
}
