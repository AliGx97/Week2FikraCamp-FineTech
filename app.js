function clicked(button) {
  let div = [...button.parentNode.childNodes][2];
  div.classList.toggle("visible");
  let lists = document.querySelectorAll(".drop-items");
  lists.forEach((e) => {
    if (e != div) e.classList.remove("visible");
  });
}
