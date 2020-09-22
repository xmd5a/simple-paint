import { pipe } from '../../utils/pipe.js';

function CanvasUI() {
  this.canvas = this.createUI();
};

CanvasUI.prototype.createUI = function() {
  const canvasWrapper = document.querySelector('#canvas');
  const canvasElement = pipe(getElementSize, createCanvas)(canvasWrapper);

  return canvasWrapper.appendChild(canvasElement);
};

function getElementSize(wrapperNode) {
  const canvasWrapperBounding = wrapperNode.getBoundingClientRect()
  const { width, height } = canvasWrapperBounding;

  return {
    width,
    height
  }
};

function createCanvas({ width, height }) {
  const canvasElement = document.createElement('canvas');
  canvasElement.width = width;
  canvasElement.height = height;

  return canvasElement;
};

export {
  CanvasUI
};
