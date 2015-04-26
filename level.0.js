

    var levelInfo = {
        current: 0,
        startX: 220,
        startY: 200,
        endX: 600,
        endY: height/2 -150,
        endWidth: 100,
        endHeight: 140
    };

    var messages = [];
    messages.push('You are the small red square! Reach the big red square!');
    messages.push('Press WASD/Space to move. Press R to restart the level!');

    var boxes = [];
    // dimensions
    boxes.push({
        x: 0,
        y: 0,
        width: width,
        height: 40
    });
    boxes.push({
        x: 0,
        y: 0,
        width: 10,
        height: height
    });
    boxes.push({
        x: 0,
        y: height - 20,
        width: width,
        height: 20
    });
    boxes.push({
        x: width -10,
        y: 0,
        width: 10,
        height: height
    });
    // end dimensions

    boxes.push({
        x: 200,
        y: height/2 - 100,
        width: 40,
        height: 40
    });
    boxes.push({
        x: 400,
        y: height/2 - 100,
        width: 40,
        height: 40
    });