(function () {
    'use strict';

    describe('resharper jasmine testrunner', function () {
        describe('simplest possible test', function () {
            it('should execute', function () {
                expect(true).toBe(true);
            });
        });

        describe('simple test using non-existent valid javascript', function() {
            it('should execute and fail', function() {
                var thing = callToUndefinedFunction();
                expect(thing).toBe(undefined);
            });
        });

        describe('simple test definitions with injections and beforeEach blocks', function() {

            var inject = function (cb) {
                cb(1);
            }

            var value;

            beforeEach(function() {
                inject(function(val) {
                    value = val;
                });
            });

            it('beforeEach should wrap the injection in an anonymous function to execute', function() {
                inject(function(val) {
                    value += val;
                    expect(value).toBe(2);
                });
            });

            it('it will execute without wrapping the injection in an anonymous function', inject(function (val) {
                    var myValue = val;
                    expect(myValue).toBe(1);
            }));
        });

        describe('another simple test definitions with injections and beforeEach blocks', function () {

            var inject = function (cb) {
                cb(1);
            }

            var value;

            beforeEach(
                inject(function(val) {
                    value = val;
                }));

            it('beforeEach with injection that is not wrapped in an anonymous function will cause tests to not be run', function () {
                inject(function (val) {
                    value += val;
                    expect(value).toBe(2);
                });
            });
        });
    });
}());