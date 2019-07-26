///Initiation of Canvas draft and real elements
let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
var canvasArr = [];
var counterCanvas = -1;
let dragging = false;
let options = {
  strokeStyle: "",
  fillStyle: "",
  lineWidth: "",
  lineCap: "round"
};

// console.log("Main Class PaintFunction");

///First initiation of the Paint parent class function
class PaintFunction {
  constructor() {
    // console.log("Main Class PaintFunction");
  }

  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

$("#pixel").change(() => {
  options.lineWidth = $("#pixel").val();
  console.log(options.lineWidth);
});

//Get Color Pallette value on click
$("#flat").change(function() {
  options.strokeStyle = $("#flat").val();
  options.fillStyle = $("#flat").val();
  // console.log(options.strokeStyle)
  // console.log(options.fillStyle)
  console.log(options.strokeStyle);
});

saveState = () => {
  counterCanvas++;
  canvasArr.push(canvasReal.toDataURL());
};

undoState = () => {
  if (counterCanvas > 0) {
    counterCanvas--;
    console.log(counterCanvas);
    var canvasPic = new Image();
    canvasPic.src = canvasArr[counterCanvas];
    canvasPic.onload = () => {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(canvasPic, 0, 0);
    };
  } else if (counterCanvas <= 0) {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    counterCanvas = -1;
    console.log(counterCanvas);
  }
};

redoState = () => {
  if (counterCanvas + 1 < canvasArr.length) {
    console.log(counterCanvas);
    counterCanvas++;
    console.log(counterCanvas);
    var canvasPic = new Image();
    canvasPic.src = canvasArr[counterCanvas];
    canvasPic.onload = () => {
      contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
      contextReal.drawImage(canvasPic, 0, 0);
    };
  }
};

//Event Listener below
$("#canvas-draft").mousedown(function(e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  ////#2 on Button Event --> CurrentFunction--> on MouseDown in DrawingRect/DrawingLine Class
  currentFunction.onMouseDown([mouseX, mouseY], e, options);
  dragging = true;
});

$("#canvas-draft").mousemove(function(e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e, options);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function(e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e, options);
  saveState();
});

$("#canvas-draft").mouseleave(function(e) {
  dragging = false;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function(e) {
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});
