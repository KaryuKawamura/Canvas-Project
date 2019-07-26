class Nyan extends PaintFunction {
  constructor(contextReal, contextDraft, contextNyan, options) {
    super();
    this.context = contextReal;
    this.contextDraft = contextDraft;
    this.contextNyan = contextNyan;
    this.counter = 0;
  }

  onMouseDown(coord, event, counter) {
    if (this.counter === 0) {
      this.counter += 1;
      var audio = new Audio();
      audio.src = "assets/img/nyanCatAudio.mp3";
      audio.play();

      setInterval(nyan, 300);
      function nyan() {
        let image = new Image(40, 40);
        image.src = "./assets/img/nyanCat1.jpg";
        image.onload = function() {
          contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
        };
      }
      setInterval(nyan1, 400);
      function nyan1() {
        let image = new Image(40, 40);
        image.src = "./assets/img/nyanCat2.jpg";
        image.onload = function() {
          contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
        };
      }
    } else {
      setInterval(nyan, 300);
      function nyan() {
        let image = new Image(40, 40);
        image.src = "./assets/img/nyanCat1.jpg";
        image.onload = function() {
          contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
        };
      }
      setInterval(nyan1, 400);
      function nyan1() {
        let image = new Image(40, 40);
        image.src = "./assets/img/nyanCat2.jpg";
        image.onload = function() {
          contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
        };
      }
    }

    // setInterval(nyan2, 400);
    // function nyan2() {
    //   let image = new Image(40, 40);
    //   image.src = "./assets/img/nyanCat2.jpg";
    //   image.onload = function() {
    //     contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    //   };
    // }
  }
  onDragging(coord, event) {
    // setInterval(nyan, 200);
    // function nyan() {
    //   let image = new Image(40, 40);
    //   image.src = "./assets/img/nyanCat.jpg";
    //   image.onload = function() {
    //     contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    //   };
    // }
    // setInterval(nyan1, 300);
    // function nyan1() {
    //   let image = new Image(40, 40);
    //   image.src = "./assets/img/nyanCat1.jpg";
    //   image.onload = function() {
    //     contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    //   };
    // }
    // setInterval(nyan2, 400);
    // function nyan2() {
    //   let image = new Image(40, 40);
    //   image.src = "./assets/img/nyanCat2.jpg";
    //   image.onload = function() {
    //     contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    //   };
    // }
  }
  onMouseUp(coord, event) {
    // let image = new Image(50, 50);
    // this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    // image.src = "./assets/img/nyaCatTail.jpg";
    // image.onload = function() {
    //   contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    // };
    // image.src = "./assets/img/nyaCat.jpg";
    // image.onload = function() {
    //   contextReal.drawImage(image, coord[0] - 75, coord[1] - 75, 100, 100);
    // };
  }
}
