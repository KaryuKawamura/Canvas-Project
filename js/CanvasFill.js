class Fill extends PaintFunction {
  constructor(contextReal, contextDraft, options) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.color = options.strokeStyle;
  }

  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp(coord, event) {
    var imageData = this.contextReal.getImageData(coord[0], coord[1], 10, 10);

    console.log(imageData);

    var pixelStack = [[coord[0], coord[1]]];
    var colorLayer;

    while (pixelStack.length) {
      let newPos = pixelStack.pop();
      let x = newPos[0];
      let y = newPos[1];

      let pixelPos = (y * this.contextReal.width + x) * 4;
      while (y-- >= 0 && matchStartColor(pixelPos)) {
        pixelPos -= this.contextReal.width * 4;
      }
      pixelPos += this.contextReal.width * 4;
      ++y;
      let reachLeft = false;
      let reachRight = false;
      while (y++ < this.contextReal.height - 1 && matchStartColor(pixelPos)) {
        colorPixel(pixelPos);

        if (x > 0) {
          if (matchStartColor(pixelPos - 4)) {
            if (!reachLeft) {
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          } else if (reachLeft) {
            reachLeft = false;
          }
        }

        if (x < this.contextReal.width - 1) {
          if (matchStartColor(pixelPos + 4)) {
            if (!reachRight) {
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }

        pixelPos += canvasWidth * 4;
      }
    }
    this.contextReal.putImageData(this.color, 0, 0);

    function matchStartColor(pixelPos) {
      var r = colorLayer.data[pixelPos];
      var g = colorLayer.data[pixelPos + 1];
      var b = colorLayer.data[pixelPos + 2];

      return r == startR && g == startG && b == startB;
    }

    function colorPixel(pixelPos) {
      colorLayer.data[pixelPos] = fillColorR;
      colorLayer.data[pixelPos + 1] = fillColorG;
      colorLayer.data[pixelPos + 2] = fillColorB;
      colorLayer.data[pixelPos + 3] = 255;
    }
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
