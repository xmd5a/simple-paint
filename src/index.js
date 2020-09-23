import { ToolbarUI } from './modules/UI/toolbarUI.js';
import { CanvasUI } from './modules/UI/canvasUI.js';
import { ContextUI } from './modules/UI/contextUI.js';
import { Tools } from './modules/tools.js';
import { ToolsFactory } from './modules/tools/toolsFactory.js';
import { Canvas } from './modules/canvas.js'

const toolbarUI = new ToolbarUI();
const canvasUI = new CanvasUI();
const contextUI = new ContextUI();
const toolsObserver = new Tools(toolbarUI.tools);
const toolsFactory = new ToolsFactory();
const canvas = new Canvas(canvasUI.canvas);

toolsObserver.attach(contextUI.updateContext.bind(contextUI));
toolsObserver.attach((tool) => {
  const currentTool = toolsFactory.createTool(tool);
  canvas.setCurrentTool(currentTool);
});
