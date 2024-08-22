class SelectorActions {
  constructor(click, mouseOver, doubleClick, mouseMove) {
    this.click = document.querySelector(click);
    this.mouseOver = document.querySelector(mouseOver);
    this.doubleClick = document.querySelector(doubleClick);
    this.mouseMove = document.querySelector(mouseMove);
  }

  start() {
    this.click.addEventListener("click", () => {
      alert("Button clicked!");
    });

    this.mouseOver.addEventListener("mouseover", () => {
      alert("Mouse over the box!");
    });
    
    this.doubleClick.addEventListener("dblclick", () => {
      alert("Button clicked 2 times!");
    });
    
    this.mouseMove.addEventListener("mousemove", (element) => {
      const x = element.x;
      const y = element.y;
    
      console.log(`Cordinates x: ${x} ${y}`);
    });
  }

  init() {
    if (this.click && this.mouseOver && this.doubleClick && this.mouseMove) {
      this.start();
    }
  }
}

export default SelectorActions;