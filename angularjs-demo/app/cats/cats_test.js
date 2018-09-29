'use strict';

describe('myApp.cats module', function() {

  beforeEach(module('myApp.cats'));

  describe('Cats controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var catsCtrl = $controller('CatsCtrl');
      expect(catsCtrl).toBeDefined();
    }));

  });
});