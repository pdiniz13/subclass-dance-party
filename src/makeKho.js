/**
 * Created by ppp on 2/12/2015.
 */
/**
 * Created by ppp on 2/12/2015.
 */
var makeKo = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  var html = "<div id=\"ko\" class=\"person\">\n    <div class=\"person-head\"></div>\n    <div class=\"person-body\"></div>\n    <div class=\"person-arm person-arm-l\"></div>\n    <div class=\"person-arm person-arm-r\"></div>\n    <div class=\"person-leg person-leg-l\"></div>\n    <div class=\"person-leg person-leg-r\"></div>\n</div>";
  this.$node.html(html);
  this.$node.attr("id", "gangnam");
};

makeKo.prototype = Object.create(makeDancer.prototype);
makeKo.prototype.constructor = makeKo;

makeKo.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};