class Draw extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.context = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.size = options.lineWidth;
  }

  onMouseDown(coord, event, options) {
    this.context.strokeStyle = options.strokeStyle;
    this.context.lineWidth = options.lineWidth;
    this.context.lineJoin = "round";
    this.context.beginPath();
    this.context.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
    console.log(this.color);
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
