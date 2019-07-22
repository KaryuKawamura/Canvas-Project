class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.ogX = [];
    this.ogY = [];
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = "#33333";
    this.contextReal.lineWidth = 6;
    this.contextDraft.lineWidth = 6;
    this.origX = coord[0];
    this.origY = coord[1];
    if (
      Math.abs(this.ogX[0] - this.origX) < 15 &&
      Math.abs(this.ogY[0] - this.origY) < 15
    ) {
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.lineTo(this.ogX[0], this.ogY[0]);
      this.contextDraft.closePath();
      this.contextReal.closePath();
      this.ogX = [];
      this.ogY = [];
    } else {
      this.ogX.push(this.origX);
      this.ogY.push(this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke();
    }
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
    this.contextReal.lineTo(coord[0], coord[1]);
    this.contextReal.stroke();
    // this.contextReal.closePath();
    // this.contextDraft.closePath();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
