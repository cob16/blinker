
var boxes = [];

var messages = [];
messages.push(' ');
messages.push('Mere walls can not stop you...');

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
    x: 0,
    y: 100,
    width: width/4,
    height: height * 0.66
});

boxes.push({
    x: width/2,
    y:  height/4,
    width: 20,
    height: height/5
});

boxes.push({
    x: width/4,
    y: height/4,
    width: width /4 ,
    height: height/8
});

boxes.push({
    x: width/2,
    y: height/2 - 35,
    width: width /4 ,
    height: height/8
});

boxes.push({
    x: width * 0.75,
    y: height/4,
    width: 20,
    height: height/4 + 52
});

boxes.push({
    x: width/3,
    y: height * 0.75,
    width: width/2 - 70,
    height: height * 0.75
});

boxes.push({
    x: height/3 + 50,
    y: height/2,
    width: 40,
    height: height * 0.75
});

boxes.push({
    x: width * 0.85,
    y: height * 0.75,
    width: 40,
    height: height/4
});

var levelInfo = {
    current: 4,
    startX: 25,
    startY: 50,
    endX: 0,
    endY: height - 140,
    endWidth: width/4,
    endHeight: 150
};