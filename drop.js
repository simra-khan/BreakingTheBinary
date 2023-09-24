function Drop(x, y, img){
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
    this.img = img; // Store the image for the drop

    this.show = function(){
        noStroke();
        fill(150, 0, 200);
        image(this.img, this.x, this.y, this.r*2, this.r*2); 
    }

    this.evaporate = function(){
        this.toDelete = true;
    }

    this.hits = function(flower){
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r) {
            return true;
        } else {
            return false;
        }
    }

    this.move = function(){
        this.y = this.y - 7;
    }

}