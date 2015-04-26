
var levelInfo = {
    current: 2,
    startX: 120,
    startY: height - 120,
    endX: 100,
    endY: 150,
    endWidth: 80,
    endHeight: 80
};


var messages = [];
messages.push('You can teleport into the end-zone.');
messages.push('But you will need to save your health to do it!');

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
    x: width - width/4,
    y: height - 100,
    width: width/4,
    height: 10
});

boxes.push({
    x: width/2,
    y: height - 200,
    width: width/4 - 30,
    height: 10
})

boxes.push({
    x: width/4 - 30,
    y: height - 300,
    width: width/4,
    height: 10
})

//altenate path


boxes.push({
    x: 10,
    y: height/2,
    width: 10,
    height: 20
});
boxes.push({
    x: 10,
    y: height/2 - 100,
    width: 10,
    height: 20
});