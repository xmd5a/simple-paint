import { Brush } from './brush.js';
import { Pencil } from './pencil.js';
import { Square } from './square.js';
import { TOOLS } from './tools.js';

function ToolsFactory() {
  this.brush = new Brush;
  this.pencil = new Pencil;
  this.square = new Square;
};

ToolsFactory.prototype.createTool = function(tool) {
  switch (tool) {
    case TOOLS.brush:
      return this.brush;

    case TOOLS.pencil:
      return this.pencil;

    case TOOLS.square:
      return this.square;

    default:
      break;
  }
};

export {
  ToolsFactory
};
