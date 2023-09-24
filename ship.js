function Ship(){
    this.x = width/2;
    this.xdir = 0;

    this.show = function(){
        fill(255);
        rectMode(CENTER);
        image(girlImage, this.x, height - 110, 60, 120); 
    }

    this.setDir = function(dir){
        this.xdir = dir;
    }
    this.move = function(dir){
        if (this.x < 0){
            this.x = 0;
          } else if (this.x > 943){
            this.x = 943;
          } else{
            this.x += this.xdir*5;
          }
    }
}