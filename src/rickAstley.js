var makeRickAstley = function(top, left, timeBetweenSteps){
  makePopDancer.call(this, top, left, timeBetweenSteps);
};

makeRickAstley.prototype = Object.create(makePopDancer.prototype);
makeRickAstley.prototype.constructor = makeRickAstley;

makeRickAstley.prototype.step = function(){
  makePopDancer.prototype.step.call(this);
  var value = $("body").width() * Math.random() + 'px';
  this.$node.attr("id", "rick");
  this.$node.animate({left: value});

};
