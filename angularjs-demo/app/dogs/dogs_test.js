'use strict';

describe('myApp.dogs module', function() {

  beforeEach(module('myApp.dogs'));

  describe('Dogs controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var dogsCtrl = $controller('DogsCtrl');
      expect(dogsCtrl).toBeDefined();
    }));

  });
});