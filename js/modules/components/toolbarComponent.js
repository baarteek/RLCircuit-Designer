const components = {
    cursor: document.getElementById("cursor"),
    wire: document.getElementById("wire"),
    voltageSource: document.getElementById("voltageSource"),
    switchComponent: document.getElementById("switchComponent"),
    resistor: document.getElementById("resistor"),
    capacitor: document.getElementById("capacitor"),
    inducotr: document.getElementById("inductor")
};

const selectedComponent = document.getElementById("selectedComponentImg");

export const registerToolbarEvents = () => {   
    components.cursor.addEventListener("click", () => changeComponentImage("cursor"));
    components.wire.addEventListener("click", () => changeComponentImage("wire"));
    components.voltageSource.addEventListener("click", () => changeComponentImage('voltageSource'));
    components.switchComponent.addEventListener("click", () => changeComponentImage("switch"));
    components.resistor.addEventListener("click", () => changeComponentImage("resistor"));
    components.capacitor.addEventListener("click", () => changeComponentImage("capacitor"));
    components.inducotr.addEventListener("click", () => changeComponentImage("inductor"));
};

const changeComponentImage = (componentName) => {
    if(selectedComponent) {
        selectedComponent.src = "img/"+componentName+".png";
    } else {
        selectedComponent.src = "img/null.png";
    }
}