function AbstractTool() {
  this.isDrawing = false;
}

AbstractTool.prototype.handleMouseDown = function() {
  this.isDrawing = true;
};

AbstractTool.prototype.handleMouseUp = function() {
  this.isDrawing = false;
};

AbstractTool.prototype.handleMouseMove = function() {};

export {
  AbstractTool
};
