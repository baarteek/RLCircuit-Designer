import { resizeCanvas } from "./canvasComponent.js";

const openSidebar = document.getElementById("openSidebar");
const hideSlidebar = document.getElementById("hideSidebar");

export const registerSidebarEvents = () => {
    if(openSidebar && hideSlidebar) {
        openSidebar.addEventListener("click", toggleSidebar);
        hideSlidebar.addEventListener("click", toggleSidebar);
    } else {
        console.error("Sidebar elements not found");
    }
};

const toggleSidebar = () => {
    const newWidth = sidebar.style.width === "35%" ? "0" : "35%";
    sidebar.style.width = newWidth;
    resizeCanvas();
};

