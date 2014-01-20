'use strict';

angular.module('lmisChromeApp')
  .controller('InventoryCtrl', function ($scope) {
         $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.showWeeks = true;
        $scope.toggleWeeks = function () {
            $scope.showWeeks = ! $scope.showWeeks;
        };

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        //$scope.disabled = function(date, mode) {
          //  return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        //};

        $scope.toggleMin = function() {
            //$scope.minDate = ( $scope.minDate ) ? null : new Date();
            $scope.minDate = null;
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            'year-format': "'yy'",
            'starting-day': 1
        };

        $scope.format = 'MMMM yyyy';

  });