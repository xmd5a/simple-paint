import { TOOLS } from "./tools/tools.js";
import { AbstractTool } from './tools/abstractTool.js';

function Canvas(canvasUI) {
  this.canvas = canvasUI;
  this.ctx = canvasUI.getContext('2d');
  this.currentTool = new AbstractTool();
  this.handleCanvasActions();
};

Canvas.prototype.setCurrentTool = function(tool) {
  this.currentTool = tool;
};

Canvas.prototype.handleCanvasActions = function() {
  this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
  this.canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
  this.canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
};

Canvas.prototype.handleMouseMove = function(e) {
  const { x, y } = getMousePoisition(e);
  this.currentTool.handleMouseMove(x, y, this.ctx);
}


Canvas.prototype.handleMouseDown = function(e) {
  const { x, y } = getMousePoisition(e);
  this.currentTool.handleMouseDown(x, y, this.ctx);
}

Canvas.prototype.handleMouseUp = function(e) {
  const { x, y } = getMousePoisition(e);
  this.currentTool.handleMouseUp(x, y, this.ctx);
}

function getMousePoisition(e) {
  return {
    x: e.offsetX,
    y: e.offsetY
  };
}

export {
  Canvas
};
