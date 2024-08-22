const button = document.querySelector("#click");
const box = document.querySelector("#box");
const doubleClick = document.querySelector("#double-click");
const cordinate = document.querySelector("#cordinate");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

box.addEventListener("mouseover", () => {
  alert("Mouse over the box!");
});

doubleClick.addEventListener("dblclick", () => {
  alert("Button clicked 2 times!");
});

cordinate.addEventListener("mousemove", (element) => {
  const x = element.x;
  const y = element.y;

  console.log(`Cordinates x: ${x} ${y}`);
});