var template = require('./resultsTable.html');

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      results: '=',
      fullStopCount: '=',
      commaCount: '='
    },
    controller: function() {},
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    link: function($scope, element, attributes, ctrl) {
      var vm = ctrl;

      // rebuild table when results are changing
      $scope.$watch("vm.results", function(results) {
        if(results) {
          vm.table = [];
          vm.headers = [];
          tableRows = 0;

          // build table headers and calculate table length
          _.each(results, function(value, key) {
            // exclude wordCount property from showing in table
            if(key !== 'wordCount') {
              // set results headers
              vm.headers.push(key);

              // set table length
              if(value.length > tableRows) {
                tableRows = value.length;
              }
            }
          });

          // build table rows
          for(var i = 0; i < tableRows; i++) {
            var row = [];
            _.each(vm.headers, function(header) {
              row.push(results[header][i]);
            });

            vm.table.push(row);
          }

        }
      });
    }
  };
}

module.exports.$inject = [];
