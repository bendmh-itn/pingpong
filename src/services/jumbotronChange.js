function changeText(text) {
  const titles = document.getElementsByClassName("h1Jumbotron");
  for (let i = 0; i < titles.length; i++) {
    titles[i].innerHTML = text;
  }
}

function changeImage(image) {
  const elements = document.getElementsByClassName("imgJumbotron");
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("src", image);
  }
}

export default {
  changeText,
  changeImage,
};
