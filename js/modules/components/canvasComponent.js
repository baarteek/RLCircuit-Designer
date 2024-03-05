export const registerCanvasEvents = () => {
    window.addEventListener("resize", resizeCanvas);
};

export const resizeCanvas = () => {
    const canvas = document.getElementById("drawingCanvas");
    const toolbar = document.getElementById("toolbar");
    const footer = document.getElementById("footer");

    const mainHeight = window.innerHeight - toolbar.offsetHeight - footer.offsetHeight;
    canvas.style.height = `${mainHeight}px`;
    canvas.height = mainHeight;
    canvas.width = sidebar.style.width === "35%" ? window.innerWidth - 250 : window.innerWidth;

    console.log(canvas.width);
    console.log(canvas.height);
};