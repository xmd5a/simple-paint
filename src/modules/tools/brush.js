import { AbstractTool } from './abstractTool.js';

function Brush() {
  AbstractTool.call(this);
}

Brush.prototype = Object.create(AbstractTool.prototype);
Brush.prototype.constructor = Brush;


Brush.prototype.handleMouseDown = function() {
  AbstractTool.prototype.handleMouseDown.call(this);
};

Brush.prototype.handleMouseUp = function(x, y, ctx) {
  AbstractTool.prototype.handleMouseUp.call(this);

  ctx.beginPath();
};

Brush.prototype.handleMouseMove = function(x, y, ctx) {
  if (!this.isDrawing) {
    return;
  }

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 8;
  ctx.lineTo(x, y);
  ctx.stroke();
};

export {
  Brush
};
