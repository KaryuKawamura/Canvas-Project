class DrawingLine extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.fillStyle = options.fillStyle;
    this.size = options.lineWidth;
  }

  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.moveTo(coord[0], coord[1]);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }
  onDragging(coord, event, options) {
    this.contextDraft.strokeStyle = options.strokeStyle;
    this.contextDraft.lineWidth = options.lineWidth;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord, event, options) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeStyle = options.strokeStyle;
    this.contextReal.lineWidth = options.lineWidth;
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}

  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }
}
