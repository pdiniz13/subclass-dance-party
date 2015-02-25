var makePopDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  var newArray = ['red', 'green', 'blue', 'yellow', 'purple'];

  var count = Math.floor(Math.random()*newArray.length+1);
  var value = '10px solid ' + newArray[count];
  this.$node.css({border: value});
  this.$node.addClass('rotatingDancer');
};