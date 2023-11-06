function saveScrollPosition() {
    const log = document.getElementById("log-container");
    model.app.scrollPosition = log.scrollTop;
    model.app.isScrolledToBottom = isScrolledToBottom(log);
    if (model.app.isScrolledToBottom) {
        model.app.hasUnreadMessages = false;
    }
}

function addToLog(message) {
    const log = document.getElementById("log-container");
    const isAtBottom = isScrolledToBottom(log);
    model.app.isScrolledToBottom = isAtBottom;
    model.app.log.push({
        message: message,
        timestamp: new Date(),
    });
    if (!isAtBottom) {
        model.app.hasUnreadMessages = true;
    } else {
        model.app;
    }
}

function isScrolledToBottom(element) {
    const wrapperHeight = element.getBoundingClientRect().height;
    return element.scrollHeight - element.scrollTop < wrapperHeight;
}

function scrollLogToBottom(fromClick = false) {
    const log = document.getElementById("log-container");
    model.app.scrollPosition = log.scrollHeight;
    log.scrollTop = log.scrollHeight;
    model.app.isScrolledToBottom = true;
    model.app.hasUnreadMessages = false;
    if (fromClick) updateView();
}

function scrollLogToSavedPosition() {
    if (model.app.isScrolledToBottom) {
        scrollLogToBottom();
        return;
    }
    const position = model.app.scrollPosition;
    const log = document.getElementById("log-container");
    log.scrollTop = position;
}

function devFillLog(amount) {
    for (let i = 0; i < amount; i++) {
        addToLog("Filler message!");
    }
    /* model.app.isScrolledToBottom = true; */
    updateView();
}
