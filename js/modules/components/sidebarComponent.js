import { resizeCanvas } from "./canvasComponent.js";

export const registerSidebarEvents = () => {
    const openSidebar = document.getElementById("openSidebar");
    const hideSlidebar = document.getElementById("hideSidebar");
    
    openSidebar.addEventListener("click", toggleSidebar);
    hideSlidebar.addEventListener("click", toggleSidebar);
};

const toggleSidebar = () => {
    const newWidth = sidebar.style.width === "35%" ? "0" : "35%";
    sidebar.style.width = newWidth;
    resizeCanvas();
};

