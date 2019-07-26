class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.fillStyle = options.fillStyle;
  }

  onMouseDown(coord, event, options) {
    this.contextReal.fillStyle = options.fillStyle;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event, options) {
    this.contextDraft.lineWidth = options.lineWidth;
    this.contextReal.lineWidth = options.lineWidth;
    this.contextReal.strokeStyle = options.strokeStyle;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    let value = Math.abs(coord[0] - this.origX);
    this.contextDraft.arc(this.origX, this.origY, value, 0, 2 * Math.PI, [
      true
    ]);
    console.log(this.color);
    this.contextDraft.stroke();
    this.contextDraft.closePath();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    let value = Math.abs(coord[0] - this.origX);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, value, 0, 2 * Math.PI, [true]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
window.addEventListener("keydown", checkKeyPressdown, false);

function checkKeyPressdown(key) {
  if (key.keyCode == "18") {
    currentFunction = new DrawingCircle(contextReal, contextDraft, options);
  }
}

window.addEventListener("keyup", checkKeyPressup, false);

function checkKeyPressup(key) {
  if (key.keyCode == "18") {
    currentFunction = new DrawingEllipse(contextReal, contextDraft, options);
  }
}
