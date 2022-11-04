$(document).ready(function() {
  window.dancers = [];

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  $('.add').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //var dancerMakerFunction =  makeDancer;

    // make a dancer with a random position

    //if (dancerMakerFunctionName.prototype === makeBlinkyDancer) {console.log(dancerMakerFunction.constructor);}
    //console.log(dancerMakerFunction.prototype.constructor.name);
    var dancer = new dancerMakerFunction(
      getRandomArbitrary(220, 1220),
      getRandomArbitrary(320, 2140),
      Math.random() * 1000
    );
    $('.dancefloor').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.remove').on('click', function(event) {
    window.dancers.length = 0;
    $('.dancefloor').html('');
  });

  $('.dancer').on('mouseover', function(event) {
    $('.dancer').show();
  });

  $('.P1').on('click', function(event) {
    $('.add').on('click', function(event) {

      var dancerMakerFunction = makeBlinkyDancer
      var dancer = new dancerMakerFunction(
        getRandomArbitrary(220, 1220),
        getRandomArbitrary(320, 2140),
        Math.random() * 1000
      );
      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer.$node);
  });
});

