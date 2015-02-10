var makeBouncyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  //this.$node.top = $("body").height() * Math.random();
 var value = $("body").height() * Math.random() + 'px'
  // if(value === '100px' || value === undefined){
  //   var value = '0px';
  // } else {
  //   value = '100px'
  // }
  this.$node.animate({top: value});

  console.log(this.$node.offsetTop);
};