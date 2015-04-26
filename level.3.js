
var levelInfo = {
    current: 3,
    startX: 200,
    startY: 50,
    endX: width-100,
    endY: height - 50,
    endWidth: 100,
    endHeight: 50
};
var boxes = [];

var messages = [];
messages.push('You can even teleport while in air!');
messages.push('Hint: R resets you to where you started');

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
    x: width/2 - 100,
    y: height/4,
    width: width/2,
    height: height - height/4
});
boxes.push({
    x: width/4,
    y: 40,
    width: 20,
    height: height/2
});