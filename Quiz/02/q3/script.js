const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

/* Selecting all the spans in the h1 tag and then changing the color of each span to the color in the
array. */
const spans = document.querySelectorAll("h1 span");
spans.forEach((item, index) => {
  item.style.color = colors[index];
});
