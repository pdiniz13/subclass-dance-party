$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    $('.song').get(0).play();
  });

  $(".lineUpButton").on("click", function(event){
    var lineUpFunctionName = $(this).data('lineUp-function-name');
    var lineUpFunction = window[lineUpFunctionName];

      var $children = $('body').find('.dancer');
      $.each($children, function(){
        console.log($(this));
        $(this).finish();
        $(this).css({'left':'40px'});


      });
  });

  $(".pairUpButton").on("click", function(event){
    var pairUpFunctionName = $(this).data('pairUp-function-name');
    var pairUpFunction = window[pairUpFunctionName];
    var windowArray = [];
    if(window.dancers.length > 1){
      $('body').find('.dancer').remove()
    };
    var pairUp = function(){
    var closest = 0;
    var closestVal = 20000;
    while (0 < window.dancers.length) {
      var value = window.dancers.pop();
      if (window.dancers.length>0){
        for (var y = 0, count = window.dancers.length; y < count; y++) {
          var hypotDiff = Math.sqrt(Math.pow((window.dancers[y].top - value.top), 2) + Math.pow((window.dancers[y].left - value.left), 2));
          if (hypotDiff < closestVal) {
            closestVal = hypotDiff;
            closest = y;
          }
        }
          var left = value.left + 30;
          window.dancers[closest].setPosition(value.top, left);
          $('body').append(window.dancers[closest].$node);
          var placeholder = window.dancers.splice(closest, 1)[0];
          windowArray.push(placeholder);
      }
      $('body').append(value.$node);
      windowArray.push(value);

      closest = 0;
      closestVal = 20000;
    }

      window.dancers = windowArray;
    };
    pairUp();
  });

  $('body').on('mouseenter', '.dancer', function(){
    $('body').css({'background-image':'url("pic/rick-astley-80s-hairstyle.jpg")'});
  });

$('body').on('mouseleave', '.dancer', function(){
    $('body').css({'background-image':'none'})
  });

});









