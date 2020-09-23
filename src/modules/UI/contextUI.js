import { TOOLS } from '../tools/tools.js';

function ContextUI() {
  this.context = this.createUI();
  this.updateContext(TOOLS.default)
};

ContextUI.prototype.createUI = function() {
  const contextWrapper = document.querySelector('#context');
  const contextElement = document.createElement('div');
  
  return contextWrapper.appendChild(contextElement);
};

ContextUI.prototype.updateContext = function(tool) {
  this.context.innerHTML = tool?.context || '🤷‍♂️ &nbsp; undefined tool';
};

export {
  ContextUI
};
