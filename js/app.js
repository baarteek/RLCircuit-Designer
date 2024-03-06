import { registerCanvasEvents } from "./modules/components/canvasComponent.js";
import { registerSidebarEvents } from "./modules/components/sidebarComponent.js";
import { registerToolbarEvents } from "./modules/components/toolbarComponent.js";

document.addEventListener('DOMContentLoaded', () => {
    registerSidebarEvents();
    registerCanvasEvents();
    registerToolbarEvents();
});