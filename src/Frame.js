function Frame() {

};




function Frame() {

  this.PinCount = 10;
  this.RollCount = 0;
  this.isOver = false;

};


Frame.prototype.PinDown = function(number) {

  if(this.RollCount < 2) {
    this.PinCount = (this.PinCount - number);
    this.RollCount = (this.RollCount + 1);
  }
  else {
    this.isOver = true;
  };
};
