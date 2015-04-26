
    var levelInfo = {
        current: 1,
        startX: width/2,
        startY: height/2 - 50,
        endX: 600,
        endY: height/2 -150,
        endWidth: 100,
        endHeight: 140
    };
    var boxes = [];

    var messages = [];
    messages.push('You can teleport by clicking the destination. Teleporting costs health the further you travel.');
    messages.push('The red circle shows how far you can travel with your current health');

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
        x: width/2 - 20,
        y: height/2 - 20 ,
        width: 40,
        height: 40
    });