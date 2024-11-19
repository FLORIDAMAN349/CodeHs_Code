//Radiuses
var SNOW_LOWEST_BODY_RADIUS = getWidth() * .2;
var SNOW_MIDDLE_BODY_RADIUS = SNOW_LOWEST_BODY_RADIUS * .70;
var SNOW_HEAD_BODY_RADIUS = SNOW_MIDDLE_BODY_RADIUS * .70;
//Heights
var SNOW_LOWER_HEIGHT = getHeight() - SNOW_LOWEST_BODY_RADIUS;
var SNOW_MIDDLE_HEIGHT = SNOW_LOWER_HEIGHT - SNOW_LOWEST_BODY_RADIUS - SNOW_MIDDLE_BODY_RADIUS;
var SNOW_HEAD_HEIGHT = SNOW_MIDDLE_HEIGHT - SNOW_MIDDLE_BODY_RADIUS - SNOW_HEAD_BODY_RADIUS;
var SNOW_MAN_CANVAS_POSITION_WIDTH = getWidth() * .3;
var HALF_CANVAS_HEIGHT = getWidth() / 2;
//Eye's
var EYE_RADIUS = SNOW_HEAD_HEIGHT * .035;
var yEye = SNOW_HEAD_HEIGHT - EYE_RADIUS;
var xEye1 = SNOW_MAN_CANVAS_POSITION_WIDTH - EYE_RADIUS - EYE_RADIUS;
var xEye2 = SNOW_MAN_CANVAS_POSITION_WIDTH + EYE_RADIUS + EYE_RADIUS;
//Nose 
var Nose1height = yEye + EYE_RADIUS;
var Nose1Width = xEye1 + EYE_RADIUS;
var Nose2Width = xEye2 - EYE_RADIUS;
var Nose3Height = SNOW_HEAD_BODY_RADIUS + Nose1height;
//Arms
var Arm1Height = SNOW_MIDDLE_HEIGHT;
var Arm1Width = SNOW_MAN_CANVAS_POSITION_WIDTH + SNOW_MIDDLE_BODY_RADIUS;
var Arm1EndX = Arm1Width + SNOW_MIDDLE_BODY_RADIUS;
var Arm1EndY = Arm1Height + SNOW_MIDDLE_BODY_RADIUS;

var Arm2Height = SNOW_MIDDLE_HEIGHT;
var Arm2Width = SNOW_MAN_CANVAS_POSITION_WIDTH - SNOW_MIDDLE_BODY_RADIUS;
var Arm2EndX = Arm2Width - SNOW_MIDDLE_BODY_RADIUS;
var Arm2EndY = Arm2Height + SNOW_MIDDLE_BODY_RADIUS;
//moon
var moonY = getHeight() / 6;
var moonX = SNOW_MAN_CANVAS_POSITION_WIDTH * 2.5;
var moonX2 = SNOW_MAN_CANVAS_POSITION_WIDTH * 2.6;


function main() {
    //setSize(250, 250);
    background();
    moon();
    body();
    snowParticles();
    headParts();
    arms();
}

function background() {
    let BRect = new Rectangle(getWidth(), getHeight());
    BRect.setPosition(0, 0);
    BRect.setColor("black");
    add(BRect);
}

function body() {
    //Lowest body
    let circleB1 = new Circle(SNOW_LOWEST_BODY_RADIUS);
    circleB1.setPosition(SNOW_MAN_CANVAS_POSITION_WIDTH, SNOW_LOWER_HEIGHT);
    circleB1.setColor("white"); 
    add(circleB1);
    //Middle body
    let circleB2 = new Circle(SNOW_MIDDLE_BODY_RADIUS);
    circleB2.setPosition(SNOW_MAN_CANVAS_POSITION_WIDTH, SNOW_MIDDLE_HEIGHT);
    circleB2.setColor("white"); 
    add(circleB2);
    //Head
    let circleB3 = new Circle(SNOW_HEAD_BODY_RADIUS);
    circleB3.setPosition(SNOW_MAN_CANVAS_POSITION_WIDTH, SNOW_HEAD_HEIGHT);
    circleB3.setColor("white");  
    add(circleB3);
}
function headParts() {
    //First Eye
    let circleE1 = new Circle(EYE_RADIUS);
    circleE1.setPosition(xEye1, yEye);
    circleE1.setColor("black"); 
    add(circleE1);
    //Second Eye
    let circleE2 = new Circle(EYE_RADIUS);
    circleE2.setPosition(xEye2, yEye);
    circleE2.setColor("black"); 
    add(circleE2);
    //Nose
    let polygon = new Polygon();
    polygon.addPoint(Nose1Width, Nose1height);
    polygon.addPoint(Nose2Width, Nose1height);
    polygon.addPoint(SNOW_MAN_CANVAS_POSITION_WIDTH, Nose3Height);
    polygon.setColor("orange");
    add(polygon);
    polygon.debug = false;
}

function arms() {
    let lineA1 = new Line(Arm1Width, Arm1Height, Arm1EndX, Arm1EndY);
    lineA1.setColor("brown");
    add(lineA1);
    
    let lineA2 = new Line(Arm2Width, Arm2Height, Arm2EndX, Arm2EndY);
    lineA2.setColor("brown");
    add(lineA2);
}

function snowParticles() {
        for(var i = 0; i < 1000; i++) {
        var rx = Randomizer.nextInt(.1, 2);
        var ry = Randomizer.nextInt(.1, 2);
        var x = Randomizer.nextInt(0, getWidth());
        var y = Randomizer.nextInt(0, getHeight());
        var sP = new Oval(rx, ry);
        sP.setPosition(x, y);
        sP.setColor("white");
        add(sP);
    }
}
function moon() {
    let circleM1 = new Circle(SNOW_MIDDLE_BODY_RADIUS);
    circleM1.setPosition(moonX, moonY);
    circleM1.setColor("yellow");
    add(circleM1);
    let circleM2 = new Circle(SNOW_MIDDLE_BODY_RADIUS);
    circleM2.setPosition(moonX2, moonY);
    circleM2.setColor("black");
    add(circleM2);
}

main();
