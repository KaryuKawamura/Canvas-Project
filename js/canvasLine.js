class DrawingLine extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#33333";
    this.contextReal.lineWidth = 6;
    this.contextDraft.lineWidth = 6;
    this.origX = coord[0];
    this.origY = coord[1];
    this.contextDraft.moveTo(coord[0], coord[1]);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }
  onDragging(coord, event) {
    this.contextDraft.fillStyle = "#eaeaeaea";
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
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
