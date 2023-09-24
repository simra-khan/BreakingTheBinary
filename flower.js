function Flower(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
    this.r = 30;
    this.toDelete = false;

    this.xdir = 1;
  
    this.shiftDown = function() {
        this.xdir *= -1;
        this.y += this.r;
    }

    this.evaporate = function(){
        this.toDelete = true;
    }

    this.move = function(){
        this.x = this.x + this.xdir;
        
    }
    this.show = function(){
        noStroke();
        fill(255, 0, 200);
        image(this.img, this.x, this.y, this.r*2, this.r*2);
    }

}