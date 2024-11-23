const col1 = document.getElementById("col1");
const col3 = document.getElementById("col3");

const moveTo = (source, target, all = false) => {
    const items = [...source.querySelectorAll("label")];
    items.forEach(label => {
        const checkbox = label.querySelector("input[type='checkbox']");
        if (all || checkbox.checked) {
            checkbox.checked = false; // Uncheck before moving
            target.appendChild(label);
        }
    });
};

document.getElementById("moveAllToLeft").addEventListener("click", () => moveTo(col3, col1, true));
document.getElementById("moveToLeft").addEventListener("click", () => moveTo(col3, col1));
document.getElementById("moveToRight").addEventListener("click", () => moveTo(col1, col3));
document.getElementById("moveAllToRight").addEventListener("click", () => moveTo(col1, col3, true));