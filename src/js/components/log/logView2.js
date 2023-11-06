function createLogView() {
    return /*html*/ `
        <div class="log-container" id="log-container" onscroll="saveScrollPosition()">
            <div class="log-messages-wrapper">
                ${getLogMessages()}
            </div>
            ${model.app.hasUnreadMessages ? createUnreadMessagesIndicator() : ""}
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

function createUnreadMessagesIndicator() {
    return /*html*/ `
        <div class="log-new-message-wrapper" onclick="scrollLogToBottom(true)">
            Unread messages below!
        </div>
    `;
}
