var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = blinkyDancer.step;

  // blinkyDancer.step = function(){
  //   // call the old version of step at the beginning of any call to this new version of step
  //   this.oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   this.$node.toggle();
  // };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css({"background-image": "url('pic/soccer-ball.png')", "border": "0px", "height": "20px", "width" : "20px" });
  this.$node.toggle();

};

// var newBlinkyDancer = new makeBlinkyDancer(10, 20, 100);