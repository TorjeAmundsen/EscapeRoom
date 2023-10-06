const app = document.getElementById("app");
function updateView() {
    app.innerHTML = createCombinationLock();
}

document.addEventListener("DOMContentLoaded", updateView);
