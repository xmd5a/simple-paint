import { TOOLS } from './tools/tools.js';

function Tools(toolBtns) {
  this.observers = [];

  toolBtns.forEach((tool) => {
    const toolId = tool.getAttribute('data-toolid');
    tool.addEventListener('click', this.notify.bind(this, TOOLS[toolId]));
  });
};

Tools.prototype.notify = function(tool) {
  this.observers.forEach((observer) => {
    observer(tool);
  });
};

Tools.prototype.attach = function(observer) {
  this.observers = [...this.observers, observer];
};

export {
  Tools
};
