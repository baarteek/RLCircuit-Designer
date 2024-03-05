import { registerCanvasEvents } from "./modules/components/canvasComponent.js";
import { registerSidebarEvents } from "./modules/components/sidebarComponent.js";

document.addEventListener('DOMContentLoaded', () => {
    registerSidebarEvents();
    registerCanvasEvents();
});