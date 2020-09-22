function Tools(toolBtns) {
  this.observers = [];

  toolBtns.forEach((tool) => {
    tool.addEventListener('click', this.notify.bind(this, tool));
  });
};

Tools.prototype.notify = function(tool) {
  const toolId = tool.getAttribute('data-toolid');

  this.observers.forEach((observer) => {
    observer(toolId);
  });
};

Tools.prototype.attach = function(observer) {
  this.observers = [...this.observers, observer];
};

export {
  Tools
};
