
    var levelInfo = {
        current: 1,
        startX: width/4 - 5,
        startY: height/2 - 100,
        endX: width-100,
        endY: height/2 -150,
        endWidth: 100,
        endHeight: 150
    };
    var boxes = [];

    var messages = [];
    messages.push('Click to teleport where you want to go! Teleporting costs health the further you travel.');
    messages.push('The red circle shows how far you can travel with your remaining health.');

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
        x: width/4 - 20,
        y: height - height/4 - 60,
        width: 40,
        height: 20
    });
    boxes.push({
        x: width/2 - 60,
        y: height/2,
        width: 500,
        height: 20
    });