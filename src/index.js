import { ToolbarUI } from './modules/UI/toolbarUI.js';
import { CanvasUI } from './modules/UI/canvasUI.js';
import { ContextUI } from './modules/UI/contextUI.js';
import { Tools } from './modules/tools.js';

const toolbarUI = new ToolbarUI();
const canvasUI = new CanvasUI();
const contextUI = new ContextUI();
const toolsObserver = new Tools(toolbarUI.tools);

toolsObserver.attach(contextUI.updateContext.bind(contextUI));