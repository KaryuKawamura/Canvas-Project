class DrawingEllipse extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.fillStyle = options.fillStyle;
    this.size = options.lineWidth;
    this.alt = false;
  }

  onMouseDown(coord, event, options) {
    this.origX = coord[0];
    this.origY = coord[1];
    this.color = options.strokeStyle;
  }
  onDragging(coord, event, options) {
    let xAxis = Math.abs((this.origX + coord[0]) / 2);
    let yAxis = Math.abs((this.origY + coord[1]) / 2);
    let xRad = Math.abs(xAxis - coord[0]);
    let yRad = Math.abs(yAxis - coord[1]);
    this.contextDraft.strokeStyle = options.fillStyle;
    this.contextDraft.lineWidth = options.lineWidth;
    // this.contextDraft.fillStyle = "red";
    console.log(this.fillStyle);
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
  onMouseUp(coord, event, options) {
    this.contextReal.beginPath();
    let xAxis = Math.abs((this.origX + coord[0]) / 2);
    let yAxis = Math.abs((this.origY + coord[1]) / 2);
    let xRad = Math.abs(xAxis - coord[0]);
    let yRad = Math.abs(yAxis - coord[1]);
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.lineWidth = options.lineWidth;
    this.contextReal.strokeStyle = options.strokeStyle;

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
