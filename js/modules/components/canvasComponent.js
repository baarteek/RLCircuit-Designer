const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const toolbar = document.getElementById("toolbar");
const footer = document.getElementById("footer");
const sidebar = document.getElementById("sidebar");
const mousePositionText = document.getElementById("mousePositionText")
const scaleText = document.getElementById("scaleText");
let scale = 1;

export const resizeCanvas = () => {
    const mainHeight = window.innerHeight - toolbar.offsetHeight - footer.offsetHeight;
    canvas.style.height = `${mainHeight}px`;
    canvas.height = mainHeight;
    canvas.width = sidebar.style.width === "35%" ? window.innerWidth - 250 : window.innerWidth;
    ctx.scale(scale, scale);
    renderScene();
};

export const registerCanvasEvents = () => {
    const canvas = document.getElementById("drawingCanvas");
    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener('mousemove', (event) => printMousePosition(event));
    canvas.addEventListener('mouseleave', () =>  mousePositionText.innerHTML = "Outside drawing area");
    canvas.addEventListener('wheel', zoom);
    resizeCanvas();
};

const getMousePosition = (event) => {
    const canvas = document.getElementById("drawingCanvas");
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
    let rounded = parseFloat((scale * 100).toFixed(0));
    scaleText.innerHTML = rounded + "%";
};

const renderScene = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();
};

const zoom = (event) => {
    event.preventDefault();
    const scaleStep = 0.1;
    const minScale = 0.1;
    const oldScale = scale;
    const maxScale = 5;
    const direction = event.deltaY < 0 ? 1 : -1;
    scale += direction * scaleStep;
    scale = Math.min(Math.max(minScale, scale), maxScale);

    const mousePos = getMousePosition(event);
    const scaleRatio = scale / oldScale;
    const dx = (mousePos.x - mousePos.x * scaleRatio);
    const dy = (mousePos.y - mousePos.y * scaleRatio);

    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(scale, scale);
    ctx.translate(dx, dy);

    renderScene();
    printScaleText();
};