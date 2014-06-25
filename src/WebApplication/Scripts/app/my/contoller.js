(function() {
    'use strict';

    var myApp = angular.module('myApp', []);

    myApp.controller('MyCtrl', function($scope) {
        $scope.pugs = [
            {
                name: 'MooShu', 
                description: 'A bite sized fawn pug who loved to cuddle and snuggle. She was a boisterous singer.'
            },
            {
                name: 'KungPao',
                description: 'A wall eyed black pug who is scared of her own shadow. She enjoys dark ales and medium rare steak.'
            },
            {
                name: 'Wonton',
                description: 'A young fawn pug with a deep gaze that melts you heart. If you look away, he is likely to pee on  your foot.'
            }
        ];
    });
}());