var makeBouncyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function(floor, position){
  //this.$node.top = $("body").height() * Math.random();

  var floor = this.top;
  var position;
  if (position === floor){
    position = floor - (Math.floor(Math.random() * 500));
    this.$node.css({"border-radius": "10px"});
  }
  else{
    position = floor;
    this.$node.css({"border-radius": "0px"});
  }
  makeDancer.prototype.step.call(this, floor, position);
  //makeDancer.prototype.step.call(this, floor, value);

  // if(value === '100px' || value === undefined){
  //   var value = '0px';
  // } else {
  //   value = '100px'
  // }
  this.$node.animate({top: position + "px"});

};