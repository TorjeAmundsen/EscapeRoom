function createLogView() {
    return /*html*/ `
        <div class="log-container" id="log-container" onscroll="saveScrollPosition()">
            ${getLogMessages()}
        </div>
    `;
}
function getLogMessages() {
    let htmlString = "";
    for (const logObject of model.app.log) {
        const timestamp = logObject.timestamp.toTimeString().slice(0, 5);
        htmlString += /*html*/ `
            <div class="log-message">
                <span class="log-timestamp">${timestamp}</span> ${logObject.message}
            </div>
        `;
    }
    return htmlString;
}
