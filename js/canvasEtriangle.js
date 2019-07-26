class DrawingEtriangle extends PaintFunction {
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
    this.origX = coord[0];
    this.origY = coord[1];
    this.xArr.push(this.origX);
    this.yArr.push(this.origY);
    console.log(this.xArr[0]);
    console.log(this.yArr[0]);
  }
  onDragging(coord, event, options) {
    this.counter === 0;
    this.contextDraft.strokeStyle = options.strokeStyle;
    this.contextDraft.lineWidth = options.lineWidth;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.origX, this.origY);
    let a = this.xArr[0] - coord[0];
    let b = this.yArr[0] - coord[1];
    let c = Math.sqrt(a * a + b * b);
    let height = c * (Math.sqrt(3) / 2);
    this.contextDraft.moveTo(this.xArr[0], this.yArr[0]);
    this.contextDraft.lineTo(this.xArr[0] + c / 2, this.yArr[0] + height);
    this.contextDraft.lineTo(this.xArr[0] - c / 2, this.yArr[0] + height);
    this.contextDraft.lineTo(this.xArr[0], this.yArr[0]);
    this.contextDraft.stroke();
    this.contextDraft.closePath();
    console.log(this.xArr[0], this.yArr[0], c);
  }

  onMouseMove() {}
  onMouseUp(coord, event, options) {
    this.contextReal.strokeStyle = options.strokeStyle;
    this.contextReal.lineWidth = options.lineWidth;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextReal.moveTo(this.origX, this.origY);
    let a = this.xArr[0] - coord[0];
    let b = this.yArr[0] - coord[1];
    let c = Math.sqrt(a * a + b * b);
    let height = c * (Math.sqrt(3) / 2);
    this.contextReal.moveTo(this.xArr[0], this.yArr[0]);
    this.contextReal.lineTo(this.xArr[0] + c / 2, this.yArr[0] + height);
    this.contextReal.lineTo(this.xArr[0] - c / 2, this.yArr[0] + height);
    this.contextReal.lineTo(this.xArr[0], this.yArr[0]);
    this.contextReal.stroke();
    this.contextReal.closePath();
    console.log(this.xArr[0], this.yArr[0], c);

    this.contextReal.stroke();
    this.counter = 0;
    this.xArr = [];
    this.yArr = [];
    this.xArr2 = [];
    this.yArr2 = [];
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
window.addEventListener("keydown", checkKeyPressdown, false);

function checkKeyPressdown(key) {
  if (key.keyCode == "16") {
    currentFunction = new DrawingEtriangle(contextReal, contextDraft, options);
  }
}

window.addEventListener("keyup", checkKeyPressup, false);

function checkKeyPressup(key) {
  if (key.keyCode == "16") {
    currentFunction = new DrawingEtriangle(contextReal, contextDraft, options);
  }
}
