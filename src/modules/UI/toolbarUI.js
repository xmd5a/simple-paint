import { TOOLS } from '../tools/tools.js'
import { pipe } from '../../utils/pipe.js';

function ToolbarUI() {
  this.tools = [];
  this.createUI();
};

ToolbarUI.prototype.createUI = function() {
  pipe(this.prepareTools, this.createToolButtons.bind(this))(TOOLS);
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
    this.tools = [...this.tools, toolElement];

    toolbarElement.appendChild(toolElement);
  });
};

export {
  ToolbarUI
};
