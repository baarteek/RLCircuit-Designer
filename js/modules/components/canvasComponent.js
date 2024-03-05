const canvas = document.getElementById("drawingCanvas");
const toolbar = document.getElementById("toolbar");
const footer = document.getElementById("footer");
const sidebar = document.getElementById("sidebar");
const mousePositionText = document.getElementById("mousePositionText")
const scaleText = document.getElementById("scaleText");
const ctx = canvas.getContext("2d");
let scale = 1;

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
    canvas.addEventListener('wheel', zoom);
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
        mousePositionText.innerHTML = Math.round(position.x) + ", " + Math.round(position.y);
    } else {
        mousePositionText.innerHTML = " ";
    }
};

const printScaleText = () => {
    let rounded = parseFloat(scale.toFixed(1));
    scaleText.innerHTML = "Scale: x" + rounded;
};

const renderScene = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(scale, scale);

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
};

const zoom = (event) => {
    event.preventDefault();
    const scaleStep = 0.1;
    const minScale = 0.1;
    const maxScale = 5;
    const direction = event.deltaY < 0 ? 1 : -1;
    scale += direction * scaleStep;
    scale = Math.min(Math.max(minScale, scale), maxScale);
    renderScene();
    printScaleText();
};