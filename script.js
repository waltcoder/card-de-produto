function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("addDynamicImg");

  const changeIcon = document.querySelector(".icon");
  const sofa = document.querySelector(".sofa");

  if (html.classList.contains("addDynamicImg")) {
    changeIcon.setAttribute("src", "./assets/x.svg");
    sofa.setAttribute("src", "./assets/sofa.gif");
  } else {
    changeIcon.setAttribute("src", "./assets/vector.svg");
    sofa.setAttribute("src", "./assets/sofa.png");
  }
}
