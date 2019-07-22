class DrawingEllipse extends PaintFunction {
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
    let xAxis = Math.abs((this.origX + coord[0]) / 2);
    let yAxis = Math.abs((this.origY + coord[1]) / 2);
    let xRad = Math.abs(xAxis - coord[0]);
    let yRad = Math.abs(yAxis - coord[1]);
    this.contextReal.strokeStyle = "#33333";
    this.contextReal.lineWidth = 6;
    this.contextDraft.lineWidth = 6;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.ellipse(
      this.origX,
      this.origY,
      xRad,
      yRad,
      0,
      0,
      2 * Math.PI,
      [true]
    );
    this.contextDraft.stroke();
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextReal.beginPath();
    let xAxis = Math.abs((this.origX + coord[0]) / 2);
    let yAxis = Math.abs((this.origY + coord[1]) / 2);
    let xRad = Math.abs(xAxis - coord[0]);
    let yRad = Math.abs(yAxis - coord[1]);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.ellipse(
      this.origX,
      this.origY,
      xRad,
      yRad,
      0,
      0,
      2 * Math.PI,
      [true]
    );
    this.contextReal.stroke();
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
