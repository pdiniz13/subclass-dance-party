// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');


  // this.step = function(){
  //   // the basic this doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(this.step, timeBetweenSteps);
  // };
  this.step();
  // this.setPosition = function(top, left){
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   this.$node.css(styleSettings);
  // };

  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);

};



makeDancer.prototype.step = function(floor, position){
  var context = this;
  var time = this.timeBetweenSteps;
  setTimeout(function(){ context.step(floor, position); }, time);
  //setTimeout(bind(makeDancer.prototype.step, context), time);

};

makeDancer.prototype.setPosition = function(top, left){

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


