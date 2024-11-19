function main() {
    let run = readBoolean("Would you like to run the code true/false (MASSIVE LAG WARNING IT MIGHT FREEZE OR BREAK YOUR BROWSER) ");
    if (run) {
        drawCircle1();
        drawRectangle1();
        drawRectangle2();
        drawCircle2();
        
    }
}

function drawRectangle1() {
    for(var i = 0; i < 250000; i++) {
        var w = Randomizer.nextInt(5, 50);
        var h = Randomizer.nextInt(5, 50);
        var rx = Randomizer.nextInt(0, 200-w);
        var ry = Randomizer.nextInt(0, 240-h);
        var rect1 = new Rectangle(w, h);
        rect1.setPosition(rx, ry);
        rect1.setColor(Randomizer.nextColor());
        add(rect1);
    }
}
function drawCircle1() {
    for(var i = 0; i < 250000; i++) {
        var r = Randomizer.nextInt(5, 50);
        var cx = Randomizer.nextInt(200+r, 400-r);
        var cy = Randomizer.nextInt(r, 240-r);
        var circ1 = new Circle(r);
        circ1.setPosition(cx, cy);
        circ1.setColor(Randomizer.nextColor());
        add(circ1);
    }
}
function drawRectangle2() {
    for(var i = 0; i < 250000; i++) {
        var w = Randomizer.nextInt(5, 50);
        var h = Randomizer.nextInt(5, 50);
        var rx = Randomizer.nextInt(200, 400-w);
        var ry = Randomizer.nextInt(240, 480-h);
        var rect1 = new Rectangle(w, h);
        rect1.setPosition(rx, ry);
        rect1.setColor(Randomizer.nextColor());
        add(rect1);
    }
}
function drawCircle2() {
    for(var i = 0; i < 250000; i++) {
        var r = Randomizer.nextInt(5, 50);
        var cx = Randomizer.nextInt(r, 200-r);
        var cy = Randomizer.nextInt(240+r, 480-r);
        var circ1 = new Circle(r);
        circ1.setPosition(cx, cy);
        circ1.setColor(Randomizer.nextColor());
        add(circ1);
    }
}
main();
