class DrawingArc extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.fillStyle = options.fillStyle;
    this.size = options.lineWidth;
    this.counter = 0;
    this.xArr = [];
    this.yArr = [];
    this.xArr2 = [];
    this.yArr2 = [];
  }

  onMouseDown(coord, event) {
    if (this.counter === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.xArr.push(this.origX);
      this.yArr.push(this.origY);
      console.log(this.xArr[0]);
      console.log(this.yArr[0]);
    }
  }
  onDragging(coord, event, options) {
    if (this.counter === 0) {
      this.contextDraft.strokeStyle = options.strokeStyle;
      this.contextDraft.lineWidth = options.lineWidth;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();
    } else {
      this.contextReal.strokeStyle = options.strokeStyle;
      this.contextReal.lineWidth = options.lineWidth;
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.xArr[0], this.yArr[0]);
      this.contextDraft.quadraticCurveTo(
        coord[0],
        coord[1],
        this.xArr2[0],
        this.yArr2[0]
      );
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp(coord, event, options) {
    if (this.counter === 0) {
      this.xArr2.push(coord[0]);
      this.yArr2.push(coord[1]);
      this.counter = 1;
      console.log(this.counter);
    } else {
      this.contextReal.strokeStyle = options.strokeStyle;
      this.contextReal.lineWidth = options.lineWidth;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextReal.moveTo(this.xArr[0], this.yArr[0]);
      this.contextReal.quadraticCurveTo(
        coord[0],
        coord[1],
        this.xArr2[0],
        this.yArr2[0]
      );

      this.contextReal.stroke();
      this.counter = 0;
      this.xArr = [];
      this.yArr = [];
      this.xArr2 = [];
      this.yArr2 = [];
    }

    console.table(this.xArr2);
    console.table(this.yArr2);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
