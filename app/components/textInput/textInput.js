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

        vm.buildTable();
      }

      vm.validate = function() {
        if(vm.text && vm.text.length > 0) {
          var words = vm.text.split(/[\t ,.]+/);
          vm.wordCountValid = words.length > 5 && words.length < 500;
          vm.containsNumbers = vm.text.match(/[0-9]/);
        } else {
          console.log("no text");
          vm.wordCountValid = false;
          vm.containsNumbers = false;
        }
      }

      vm.buildTable = function() {
        if(vm.results) {
          vm.table = [];
          vm.headers = [];
          tableRows = 0;

          // build table headers and calculate table length
          _.each(vm.results, function(value, key) {
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
              row.push(vm.results[header][i]);
            });
            vm.table.push(row);
          }
        }
      }
    },
    controllerAs: 'vm',
    bindToController: true,
    template: template
  };
}

module.exports.$inject = ['AnalyseService'];
