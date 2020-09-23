import { AbstractTool } from './abstractTool.js';

function Square() {
  AbstractTool.call(this);
}

Square.prototype = Object.create(AbstractTool.prototype);
Square.prototype.constructor = Square;

Square.prototype.handleMouseUp = function(x, y, ctx) {
  ctx.lineWidth = 8;
  ctx.strokeStyle = "red";
  ctx.strokeRect(x, y, 100, 100);
};

export {
  Square
};
