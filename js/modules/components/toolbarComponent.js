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

export const registerToolbarEvents = (event) => {   
    Object.keys(components).forEach((key) => {
        components[key].addEventListener("click", () => {
            changeComponentImage(key);
        });
    });

    setSelectedDivEffect(event);
};

const changeComponentImage = (componentName) => {
    selectedComponent.src = componentName in components ? `img/${componentName}.png` : "img/null.png";
};

const setSelectedDivEffect = (event) => {
    const divs = document.querySelectorAll('.componentDiv');
    let lastClickedDiv = divs[0];
    lastClickedDiv.classList.add('clickedComponentDiv');

    const handleClick = (event) => {
        if (lastClickedDiv) {
            lastClickedDiv.classList.remove('clickedComponentDiv');
        }

        event.currentTarget.classList.add('clickedComponentDiv');

        lastClickedDiv = event.currentTarget;
    };

    divs.forEach( div => {
        div.addEventListener('click', handleClick);
    });
};