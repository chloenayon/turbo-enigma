// Katherine Gershfeld

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var requestID;

var clr = function clr() {
    ctx.clearRect(0,0,538,538); // clears everything in the canvas
};

var coors = [];

var move = function move() {
    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    if (this.x==0 || this.x+(logo.width/4)==538) {
        this.dx*=-1;
    }
    if (this.y==0 || this.y+(logo.height/4)==538) {
        this.dy*=-1;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    ctx.clearRect(0,0,538,538);
    ctx.drawImage(logo,this.x,this.y,logo.width/4,logo.height/4);
    requestID = window.requestAnimationFrame(move); // repeat                   
}

var add = function add(){
    coors.push(turbo());
    console.log(coors[coors.length -1]);
    coors[coors.length - 1].bounce;
};

var turbo = function(){
    var t = {
	dx: 1,
	dy: 1,
	x: Math.floor(Math.random() * 538),
	y: Math.floor(Math.random() * 538),
	bounce: move,
	//move: screensave,
    };
    return t;
};

dvd.addEventListener("click", add); // button dvds animation
