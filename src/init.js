$(document).ready(function() {
  window.dancers = [];

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
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
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
  });

  $('.title').on('click', function(event) {
    if (document.getElementById("Hearts").style.display === "none") {
      document.getElementById("Hearts").style.display = "block";
      document.getElementById("Hearts2").style.display = "block";
    } else {
      document.getElementById("Hearts").style.display = "none";
      document.getElementById("Hearts2").style.display = "none";
    }
  });

  var unlock = false;
  $('.tester').on('click', function(event) {
    if (unlock === false) {unlock = true; $('.tester').html('Unlocked all birds');} else {unlock = false; $('.tester').html('locked Max Birds to 8');}


  });

  function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
  }

  $('.P1').on('click', function(event) {
    let setnum = document.getElementsByClassName('parrot');
    if (unlock === true || setnum.length < 8) {
      var dancerMakerFunction = FlipDancer
      var dancer = new dancerMakerFunction(
        getRandomArbitrary(220, 1220),
        getRandomArbitrary(320, 2140),
        Math.random() * 1000
      );
      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  $('.P2').on('click', function(event) {
    let setnum = document.getElementsByClassName('dancer');
    if (unlock === true || setnum.length < 8) {
      var dancerMakerFunction = makeBlinkyDancer
      var dancer = new dancerMakerFunction(
        getRandomArbitrary(220, 1220),
        getRandomArbitrary(320, 2140),
        Math.random() * 1000
      );
      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  $('.P3').on('click', function(event) {
    let setnum = document.getElementsByClassName('penguin');
    if (unlock === true || setnum.length < 8) {
      var dancerMakerFunction = SizeDancer
      var dancer = new dancerMakerFunction(
        getRandomArbitrary(220, 1220),
        getRandomArbitrary(320, 2140),
        Math.random() * 1000
      );
      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  $('.P4').on('click', function(event) {
    let setnum = document.getElementsByClassName('penguin');
    if (unlock === true || setnum.length < 8) {
      var dancerMakerFunction = SizeDancer
      var dancer = new dancerMakerFunction(
        getRandomArbitrary(220, 1220),
        getRandomArbitrary(320, 2140),
        Math.random() * 1000
      );
      $('.dancefloor').append(dancer.$node);
      window.dancers.push(dancer.$node);
    }
  });

  var setup;
  var setData = [];

  $('.align').on('click', function(event) {
    if (!setup) {
      setData = [];
      for(let i = 0; i < window.dancers.length; i++) {
        setData.push(parseInt($(window.dancers[i]).css("top")))
        $(window.dancers[i]).animate({
          top: '-=' + (parseInt($(window.dancers[i]).css("top")) - 220) + 'px'
        }, 1000, function(){
          console.log(parseInt($(window.dancers[i]).css("top")));
        })
      }
      setup = true;
    } else if (setup === true) {
      for(let i = 0; i < window.dancers.length; i++) {
        $(window.dancers[i]).animate({
          top: '+=' + (setData[i] - 220) + 'px'
        }, 1000, function(){
          console.log(setData[i]);
        });
      }
      console.log('unanimating');
      setup = false;
    }
  });

});

