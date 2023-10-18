function saveScrollPosition() {
    const log = document.getElementById("log-container");
    model.app.scrollPosition = log.scrollTop;
}

function addToLog(message) {
    model.app.log.push({
        message: message,
        timestamp: new Date(),
    });
    model.app.scrollPosition = document.getElementById("log-container").scrollHeight;
    scrollLogToSavedPosition();
}
