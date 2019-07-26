// class DrawingPolygon extends PaintFunction {
//   constructor(contextReal, contextDraft, options) {
//     super();
//     this.contextReal = contextReal;
//     this.contextDraft = contextDraft;
//     this.color = options.strokeStyle;
//     this.fillStyle = options.fillStyle;
//     this.ogX = [];
//     this.ogY = [];
//   }

//   onMouseDown(coord, event) {
//     this.origX = coord[0];
//     this.origY = coord[1];
//     if (
//       Math.abs(this.ogX[0] - this.origX) < 15 &&
//       Math.abs(this.ogY[0] - this.origY) < 15
//     ) {
//       this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//       this.contextReal.lineTo(this.ogX[0], this.ogY[0]);
//       this.contextDraft.closePath();
//       this.contextReal.closePath();
//       this.ogX = [];
//       this.ogY = [];
//     } else {
//       this.ogX.push(this.origX);
//       this.ogY.push(this.origY);
//       this.contextReal.lineTo(coord[0], coord[1]);
//       this.contextReal.stroke();
//     }
//   }
//   onDragging(coord, event) {
//     this.contextDraft.strokeStyle = this.color;
//     this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
//     this.contextDraft.beginPath();
//     this.contextDraft.moveTo(this.origX, this.origY);
//     this.contextDraft.lineTo(coord[0], coord[1]);
//     this.contextDraft.stroke();
//     console.log(this.color);
//   }

//   onMouseMove() {}
//   onMouseUp(coord, event) {
//     this.contextReal.lineTo(coord[0], coord[1]);
//     this.contextReal.strokeStyle = this.color;
//     console.log(this.color);
//     this.contextReal.stroke();
//     // this.contextReal.closePath();
//     // this.contextDraft.closePath();
//   }
//   onMouseLeave() {}
//   onMouseEnter() {}
// }

class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
    this.fillStyle = options.fillStyle;
    this.size = options.lineWidth;
    this.xArr = [];
    this.yArr = [];
  }

  onMouseDown([startX, startY], event) {
    this.startX = startX;
    this.startY = startY;
  }

  onDragging([dragX, dragY], event, options) {
    // check if its the first dot
    if (this.xArr.length === 0) {
      this.contextDraft.lineWidth = options.lineWidth;
      this.contextDraft.fillStyle = options.fillStyle;
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.startX, this.startY);
      this.contextDraft.lineTo(dragX, dragY);
      this.contextDraft.stroke();
    }
  }

  onMouseMove() {}
  onMouseUp([endX, endY], event, options) {
    // if it is the first dot, begin the path
    if (this.xArr.length === 0) {
      console.log("Path began");
      this.contextReal.beginPath();
    }

    // clear everything on draft ctx
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

    // set styles of real ctx
    this.contextReal.strokeStyle = options.strokeStyle;
    this.contextReal.lineWidth = options.lineWidth;

    // move to mousedown coord if its the first dot
    if (this.xArr.length !== 0) {
      this.contextReal.moveTo(this.xArr[-1], this.yArr[-1]);
    } else {
      this.contextReal.moveTo(this.startX, this.startY);
    }

    // when there is more than one dot,
    // check if click spot is close enough
    // to close path
    if (
      Math.abs(this.xArr[0] - endX) < 15 &&
      Math.abs(this.yArr[0] - endY) < 15 &&
      this.xArr.length > 1
    ) {
      // if close, close path
      this.contextReal.closePath();
      console.log("Path ended");
      this.xArr = [];
      this.yArr = [];
    } else {
      // add mousedown coord
      this.xArr.push(this.startX);
      this.yArr.push(this.startY);

      // draw a line to mouseup
      this.contextReal.lineTo(endX, endY);

      // check if its first edge
      if (this.xArr.length === 0) {
        // if first edge, add mouseup coord in arr
        this.xArr.push(endX);
        this.yArr.push(endY);
      }
    }

    this.contextReal.stroke();
    console.table(this.xArr);
    console.table(this.yArr);
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
