var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var coors = [];

var add = function add(){
    coors.push(turbo());
};

var turbo = function(){
    var move = function move() {
	var dims = 30;
	ctx.clearRect(this.x, this.y, dims, dims);
   	if (this.x==0 || Math.floor(this.x+(dims))==538) {
        	this.dx*=-1;
    	}
    	if (this.y==0 || Math.floor(this.y+(dims))==538) {
        	this.dy*=-1;
    	}
    	this.x+=this.dx;
    	this.y+=this.dy;
	ctx.fillStyle = "rgb(" + this.r.toString() + "," + this.g.toString() + "," + this.b.toString() + ")";
	ctx.fillRect(this.x, this.y,dims,dims);
    };	
    var t = {
	r: 255,
	g: 0, 
	b: 255,
	dx: 1,
	dy: 1,
	//remember to change the numbers (V) if you change dims
	x: Math.floor(Math.random() * (490)-15)+15,
	y: Math.floor(Math.random() * (490)-15)+15,
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

var theThing = function(){
    coors = coors.map(function(){
	
    });
};

bounce();

dvd.addEventListener("click", add); // button dvds animation

//doThing.addeventListener("click", theThing);
