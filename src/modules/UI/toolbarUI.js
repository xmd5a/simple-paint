import { TOOLS } from '../tools/tools.js'
import { pipe } from '../../utils/pipe.js';

function ToolbarUI() {
  this.createUI();
}

ToolbarUI.prototype.createUI = function() {
  pipe(this.prepareTools, this.createToolButtons)(TOOLS);
};

ToolbarUI.prototype.prepareTools = function(tools) {
  return tools.filter(({ id }) => id !== null);
}

ToolbarUI.prototype.createToolButtons = function(tools) {
  const toolbarElement = document.querySelector('#toolbar');

  tools.forEach(({ name, id }) => {
    const toolElement = document.createElement('li');
    toolElement.setAttribute('data-toolid', id);
    toolElement.classList.add(id);
    toolElement.innerHTML = name;

    toolbarElement.appendChild(toolElement);
  });
}

export {
  ToolbarUI
};
