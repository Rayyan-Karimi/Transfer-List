const col1 = document.getElementById("col1");
const col3 = document.getElementById("col3");


// Main movement function
const moveTo = (source, target, all = false) => {
    const items = [...source.querySelectorAll("label")];
    items.forEach(label => {
        const checkbox = label.querySelector("input[type='checkbox']");
        if (all || checkbox.checked) {
            checkbox.checked = false;
            target.appendChild(label);
        }
    });
    updateButtonState();
};


// Update the button state
const updateButtonState = () => {
    const hasItemsCol1 = col1.querySelectorAll("label").length > 0;
    const hasItemsCol3 = col3.querySelectorAll("label").length > 0;
    const hasCheckedCol1 = [...col1.querySelectorAll("input[type='checkbox']")].some(checkbox => checkbox.checked);
    const hasCheckedCol3 = [...col3.querySelectorAll("input[type='checkbox']")].some(checkbox => checkbox.checked);

    document.getElementById("moveAllToLeft").disabled = !hasItemsCol3;
    document.getElementById("moveAllToRight").disabled = !hasItemsCol1;
    document.getElementById("moveToRight").disabled = !hasCheckedCol1;
    document.getElementById("moveToLeft").disabled = !hasCheckedCol3;
};


// use movement buttons
const movementButtons = document.querySelector(".buttons")
movementButtons.addEventListener("click", (event) => {
    if (event.target.classList.contains("movement-button")) {
        const action = event.target.dataset.button;
        switch (action) {
            case "moveAllToLeft":
                moveTo(col3, col1, true);
                break;
            case "moveToLeft":
                moveTo(col3, col1);
                break;
            case "moveToRight":
                moveTo(col1, col3);
                break;
            case "moveAllToRight":
                moveTo(col1, col3, true);
                break;
            default:
                console.error("Unknown action:", action);
        }
        console.log(`Clicked button for action: ${action}`);
    }
})


// Change button states based on checkbox selection
document.body.addEventListener("change", (event) => {
    if (event.target.type === "checkbox")
        updateButtonState();
});
updateButtonState();
