const col1 = document.getElementById("col1");
const col3 = document.getElementById("col3");

const moveTo = (source, target, all = false) => {
    const items = [...source.querySelectorAll("label")];
    items.forEach(label => {
        const checkbox = label.querySelector("input[type='checkbox']");
        if (all || checkbox.checked) {
            checkbox.checked = false; // Uncheck before moving
            target.appendChild(label); // Append to target column
        }
    });
    updateButtonState(); // Check and update button states after moving
};

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

const addCheckboxListeners = () => {
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateButtonState);
    });
}

updateButtonState();
addCheckboxListeners();


// Button event listeners
document.getElementById("moveAllToLeft").addEventListener("click", () => moveTo(col3, col1, true));
document.getElementById("moveToLeft").addEventListener("click", () => moveTo(col3, col1));
document.getElementById("moveToRight").addEventListener("click", () => moveTo(col1, col3));
document.getElementById("moveAllToRight").addEventListener("click", () => moveTo(col1, col3, true));
