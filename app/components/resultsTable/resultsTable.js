var template = require('./resultsTable.html');

module.exports = function() {
  return {
    restrict: 'E',
    scope: {
      table: '=',
      headers: '=',
      fullStopCount: '@',
      commaCount: '@',
      wordCount: '@'
    },
    controller: function() {},
    controllerAs: 'vm',
    bindToController: true,
    template: template
  };
}

module.exports.$inject = [];
