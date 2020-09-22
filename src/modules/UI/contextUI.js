import { TOOLS } from '../tools/tools.js';

function ContextUI() {
  this.context = this.createUI();
  this.updateContext(null)
}

ContextUI.prototype.createUI = function() {
  const contextWrapper = document.querySelector('#context');
  const contextElement = document.createElement('div');
  
  return contextWrapper.appendChild(contextElement);
}

ContextUI.prototype.updateContext = function(tool) {
  const { context } = this.getContextForTool(tool);
  this.context.textContent = context;
}

ContextUI.prototype.getContextForTool = function(searchById) {
  return TOOLS.find((tool) => tool.id === searchById);
}

export {
  ContextUI
}
