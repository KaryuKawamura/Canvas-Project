class Erase extends PaintFunction {
  constructor(contextReal, contextDraft, options, size) {
    super();
    this.context = contextReal;
    this.size = options.lineWidth;
  }

  onMouseDown(coord, event, options) {
    this.context.strokeStyle = "#ffffff";
    this.context.lineWidth = options.lineWidth;
    this.context.lineJoin = "round";
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }
  onDragging(coord, event) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
