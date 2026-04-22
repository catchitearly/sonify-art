let currentLens = 'prism';
let micData = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('stage');
}

function draw() {
    background(255);
    if (isRecording) {
        micData = getAudioData();
        renderPrism(micData);
    }
}

function renderPrism(data) {
    push();
    translate(width/2, height/2);
    noFill();
    stroke(99, 102, 241, 150);
    
    beginShape();
    for (let i = 0; i < data.length; i++) {
        let r = map(data[i], 0, 255, 50, 250);
        let x = r * cos(i);
        let y = r * sin(i);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}
