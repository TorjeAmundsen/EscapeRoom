function createLogView() {
    return /*html*/ `
        <div class="log-container" id="log-container" onscroll="saveScrollPosition()">
            ${getLogMessages()}
            ${hasUnreadMessages() ? createUnreadMessagesIndicator() : ""}
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
    const unreadMessages = model.app.lastReadIndex - model.app.log.length;
    return /*html*/ `
        <div class="log-new-message-wrapper" onclick="scrollLogToBottom()">
            Unread messages: <span class="log-unread-messages">${unreadMessages}</span>
        </div>
    `;
}

function hasUnreadMessages() {
    if (model.app.log.length > model.app.lastReadIndex) return true;
    return false;
}
