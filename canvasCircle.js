class DrawingCircle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#333";
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextReal.strokeStyle = "#33333";
    this.contextReal.lineWidth = 6;
    this.contextDraft.lineWidth = 6;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    console.log(coord[0] - this.origX);
    let value = Math.abs(coord[0] - this.origX);
    this.contextDraft.arc(this.origX, this.origY, value, 0, 2 * Math.PI, [
      true
    ]);
    this.contextDraft.stroke();
    this.contextDraft.closePath();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    let value = Math.abs(coord[0] - this.origX);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // this.contextReal.beginPath();
    this.contextReal.arc(this.origX, this.origY, value, 0, 2 * Math.PI, [true]);
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
