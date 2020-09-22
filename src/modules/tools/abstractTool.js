function AbstractTool() {
  this.name = 'Abstract Tool';
  this.id = 'abstract-tool';
}

AbstractTool.prototype.handleMouseDown = function() {
  console.log('handleMouseDownAbstract');
};

Brush.prototype.handleMouseUp = function() {
  console.log('handleMouseUpAbstract');
};

Brush.prototype.handleClick = function() {
  console.log('handleClickAbstract');
};

export {
  AbstractTool
};
