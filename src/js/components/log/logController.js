function saveScrollPosition() {
    const log = document.getElementById("log-container");
    model.app.scrollPosition = log.scrollTop;
}

function addToLog(message) {
    model.app.log.push({
        message: message,
        timestamp: new Date(),
    });
    saveScrollPosition();
    const log = document.getElementById("log-container");
    console.log("isScrolledToBottom returns:", isScrolledToBottom(log));
    /* if (isScrolledToBottom(log)) {
        //
    } */
}

function isScrolledToBottom(element) {
    const wrapperHeight = element.getBoundingClientRect().height;
    console.log("wrapperHeight:", wrapperHeight, "element.scrollHeight:", element.scrollHeight);
    if (element.scrollHeight < wrapperHeight) return true;
}

function scrollLogToBottom() {
    model.app.scrollPosition = document.getElementById("log-container").scrollHeight;
    updateView();
}
