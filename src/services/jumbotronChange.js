function changeText(text) {
  document.getElementsByClassName("h1Jumbotron")[0].innerHTML = text;
}

function changeImage(image) {
  const elements = document.getElementsByClassName("imgJumbotron");
  for (let i = 0; i < 2; i++) {
    elements[i].setAttribute("src", image);
  }
}

export default {
  changeText,
  changeImage,
};
