const canvas = document.getElementById("drawingCanvas");
const toolbar = document.getElementById("toolbar");
const footer = document.getElementById("footer");
const sidebar = document.getElementById("sidebar");
const mousePositionText = document.getElementById("mousePositionText")

export const resizeCanvas = () => {
    const mainHeight = window.innerHeight - toolbar.offsetHeight - footer.offsetHeight;
    canvas.style.height = `${mainHeight}px`;
    canvas.height = mainHeight;
    canvas.width = sidebar.style.width === "35%" ? window.innerWidth - 250 : window.innerWidth;
};

export const registerCanvasEvents = () => {
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener('mousemove', (event) => printMousePosition(event));
    canvas.addEventListener('mouseleave', () =>  mousePositionText.innerHTML = "Outside drawing area");
};

const getMousePosition = (event) => {
    const rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left, 
        y: event.clientY - rect.top
    };
};

const printMousePosition = (event) => {
    const position = getMousePosition(event);
    if(position) {
        mousePositionText.innerHTML = Math.floor(position.x) + ", " + Math.floor(position.y);
    } else {
        mousePositionText.innerHTML = " ";
    }
};