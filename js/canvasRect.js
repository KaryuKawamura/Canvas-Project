class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.fillStyle = options.fillStyle;
  }

  onMouseDown(coord, event, options) {
    this.contextReal.fillStyle = options.fillStyle;
    this.origX = coord[0];
    this.origY = coord[1];
    console.log(this.fillstyle);
  }
  onDragging(coord, event, options) {
    this.contextDraft.fillStyle = options.fillStyle;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
