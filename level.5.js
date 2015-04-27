
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
    x: width * 0.66,
    y:  height/8,
    width: 20,
    height: height * 0.55
});

boxes.push({
    x: 50,
    y: height/2 - 20,
    width: 100 ,
    height: 20
});

boxes.push({
    x: width/5,
    y: height * 0.61,
    width: 20 ,
    height: 20
});

boxes.push({
    x: 0,
    y: height * 0.75,
    width: width/3,
    height: height/4
});

boxes.push({
    x: width * 0.66,
    y: height * 0.75,
    width : width * 0.60,
    height : height/4
});

boxes.push({
    x: height/4 + height/8,
    y: height/4,
    width: 40,
    height: height * 0.75
});


var levelInfo = {
    current: 5,
    startX: 50,
    startY: height * 0.66,
    endX: width - 50,
    endY: height/2 + 40,
    endWidth: 50,
    endHeight: 140
};