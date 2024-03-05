document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawingCanvas");
    const sidebar = document.getElementById("sidebar");
    const openSidebar = document.getElementById("openSidebar");
    const hideSlidebar = document.getElementById("hideSidebar");

    
    function resizeCanvas() {
        const mainHeight = window.innerHeight - toolbar.offsetHeight - footer.offsetHeight;
        canvas.style.height = `${mainHeight}px`;
        canvas.height = mainHeight;
        canvas.width = sidebar.style.width === "25%" ? window.innerWidth - 250 : window.innerWidth;
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); 

    const toggleSidebar = () => {
        const newWidth = sidebar.style.width === "25%" ? "0" : "25%";
        sidebar.style.width = newWidth;
        resizeCanvas();
    };
    
    openSidebar.addEventListener("click", toggleSidebar);
    hideSlidebar.addEventListener("click", toggleSidebar);
});
