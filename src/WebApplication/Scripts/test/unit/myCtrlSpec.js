/// <reference path="../../jasmine.js"/>
/// <reference path="../../angular.js"/>
/// <reference path="../../angular-route.js"/>
/// <reference path="../../angular-mocks.js"/>
/// <reference path="../../app/my/contoller.js"/>

(function () {
    'use strict';

    describe('MyCtrl', function() {
        beforeEach(function() {
             module('myApp');
        });

        it('should create a model with 3 pugs', inject(function($controller) {
            var scope = {};

            $controller('MyCtrl', { $scope: scope });

            expect(scope.pugs.length).toBe(3);
        }));
    });
}());