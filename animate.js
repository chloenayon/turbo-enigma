var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var coors = [];

var add = function add(){
    coors.push(turbo());
};

var turbo = function(){
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    var move = function move() {
	ctx.clearRect(this.x, this.y, logo.width/6, logo.height/6);
   	if (this.x==0 || Math.floor(this.x+(logo.width/6))==538) {
        	this.dx*=-1;
    	}
    	if (this.y==0 || Math.floor(this.y+(logo.height/6))==538) {
        	this.dy*=-1;
    	}
    	this.x+=this.dx;
    	this.y+=this.dy;
    	ctx.drawImage(logo,this.x,this.y,logo.width/6,logo.height/6);               
    };	
    var t = {
	dx: 1,
	dy: 1,
	x: Math.floor(Math.random() * (520-logo.width/6)-15)+15,
	y: Math.floor(Math.random() * (520-logo.height/6)-15)+15,
	move: move
    };
    return t;
};

var bounce = function() {
    var animate = function() {
	for (var i=0; i<coors.length; i++) {
	    coors[i].move();
	}
	id=window.requestAnimationFrame(animate);
    }
    var id=window.requestAnimationFrame(animate);
}

bounce();

dvd.addEventListener("click", add); // button dvds animation
