var FlipDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="parrot"><img src="Resources/parrot1.gif" class="bird D2"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

};

FlipDancer.prototype = Object.create(makeDancer.prototype);
FlipDancer.prototype.constructor = FlipDancer;

FlipDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //toggle();
};