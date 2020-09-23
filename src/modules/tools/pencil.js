import { AbstractTool } from './abstractTool.js';

function Pencil() {
  AbstractTool.call(this);
}

Pencil.prototype = Object.create(Pencil.prototype);
Pencil.prototype.constructor = Pencil;

Pencil.prototype.handleMouseDown = function() {
  AbstractTool.prototype.handleMouseDown.call(this);
};

Pencil.prototype.handleMouseUp = function(x, y, ctx) {
  AbstractTool.prototype.handleMouseUp.call(this);

  ctx.beginPath();
};

Pencil.prototype.handleMouseMove = function(x, y, ctx) {
  if (!this.isDrawing) {
    return;
  }

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.lineTo(x, y);
  ctx.stroke();
};

export {
  Pencil
};
