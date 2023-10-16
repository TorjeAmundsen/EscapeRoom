function startRadio() {
    const room = model.room.global;
    room.radioPlaying = true;
    model.app.log.push({
        message: room.radioLines.shift(),
        timestamp: new Date(),
    });
}
//curently only gives one line
