(function () {
  'use strict';

  module.exports = function($scope) {
    $scope.$watch("vm.results", function(results) {
      vm.headers = results.keys();
    });
  };

  module.exports.$inject = ['$scope'];

})();
