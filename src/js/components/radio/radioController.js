setInterval;

function startRadio() {
    const room = model.room.global;
    room.radioPlaying = true;
}

function playRadioLine() {
    model.app.log.push({
        message: room.radioLines.shift(),
        timestamp: new Date(),
    });
}
