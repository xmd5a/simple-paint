import { TOOLS } from '../tools/tools.js'
import { pipe } from '../../utils/pipe.js';

function ToolbarUI() {
  this.tools = [];
  this.createUI();
};

ToolbarUI.prototype.createUI = function() {
  this.prepareTools(TOOLS);
};

ToolbarUI.prototype.prepareTools = function(tools) {
  const toolbarElement = document.querySelector('#toolbar');

  for(const tool of tools) {
    const { id, name, icon } = tool;
    const toolElement = this.createToolButtons(id, name, icon);
    this.tools = [...this.tools, toolElement];

    toolbarElement.appendChild(toolElement);
  };
}

ToolbarUI.prototype.createToolButtons = function(id, name, icon) {
  const toolElement = document.createElement('li');
  toolElement.setAttribute('data-toolid', id);
  toolElement.classList.add(id);
  toolElement.classList.add('tool');
  toolElement.innerHTML = `${icon}<br />${name}`;

  return toolElement;
};

export {
  ToolbarUI
};
