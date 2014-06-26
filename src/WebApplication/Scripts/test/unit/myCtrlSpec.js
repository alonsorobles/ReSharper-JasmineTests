// Reference paths are needed by the Resharper Jasmine test runner to load the 
// Javascript file dependencies needed for the tests to execute correctly.

// Resharper does not use any reference paths in the _refernces.js file that VS uses 
// for IntelliSense.

// The net result is that every Jasmine test file requires this type of ceremony for 
// successful executing using the Resharper Jasmine runner. 

// This line is used to ensure VS Intellicense and eliminate ReSharper warnings.
/// <reference path="../../jasmine.js"/>

// These are the other javascript files that need to be loaded prior to the execution
// of the tests.
/// <reference path="../../angular.js"/>
/// <reference path="../../angular-route.js"/>
/// <reference path="../../angular-mocks.js"/>
/// <reference path="../../app/my/contoller.js"/>

(function () {
    'use strict';

    describe('MyCtrl', function() {
        // The argument in a beforeEach function call must be an anonymous function.
        // Otherwise, the Resharper Jasmine runner will not run the tests.
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
