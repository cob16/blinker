
var boxes = [];

var messages = [];
messages.push(' ');
messages.push(' ');

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
    x: width/4,
    y:  height * 0.75,
    width: 20,
    height: height * 0.75
});

boxes.push({
    x: width/4 + 100,
    y:  height * 0.66,
    width: 20,
    height: 20
});

boxes.push({
    x: width/2,
    y:  height/2,
    width: 20,
    height: height * 0.75
});

boxes.push({
    x: width/2,
    y:  height * 0.75,
    width: width/4,
    height: height/4
});


boxes.push({
    x: width * 0.75,
    y:  40,
    width: 25,
    height: height/2
});

boxes.push({
    x: width * 0.65,
    y:  height/2 + 50,
    width: 25,
    height: height/2
});

boxes.push({
    x: width * 0.75,
    y: height * 0.75,
    width: 20,
    height: height/2
});

boxes.push({
    x: width * 0.75 + 100,
    y: height/2,
    width: 20,
    height: height/2
});

boxes.push({
    x: width * 0.75 + 50,
    y: height/2 - 75,
    width: 20,
    height: 20
});

boxes.push({
    x: width * 0.75,
    y: height/4 + 25,
    width: 70,
    height: 20
});

var levelInfo = {
    current: 6,
    startX: 50,
    startY: height * 0.75,
    endX: width * 0.75,
    endY: 40,
    endWidth: width/4,
    endHeight: 100
};