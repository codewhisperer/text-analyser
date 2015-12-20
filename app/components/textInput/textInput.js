var template = require('./textInput.html');

module.exports = function(analyseService) {
  return {
    restrict: 'E',
    scope: {
    },
    controller: function() {
      var vm = this;
      vm.textValid = false;
      
      vm.analyse = function() {
        // convert entered text to lower case
        var text = vm.text.toLowerCase();

        vm.results = analyseService.analyse(text);
        vm.commaCount = analyseService.countCommas(text);
        vm.fullStopCount = analyseService.countFullStops(text);
      }
    },
    controllerAs: 'vm',
    bindToController: true,
    template: template,
    link: function($scope, element, attributes, ctrl) {
      var vm = ctrl;

      $scope.$watch('vm.text', function(text) {
        if(text && text.length > 0) {
          var words = text.split(/[\t ,.]+/);
          vm.wordCountValid = words.length > 5 && words.length < 500;
          vm.containsNumbers = text.match(/[0-9]/);
        } else {
          console.log("no text");
          vm.containsNumbers = false;
        }
      });

    }
  };
}

module.exports.$inject = ['AnalyseService'];
