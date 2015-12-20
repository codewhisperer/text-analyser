(function () {
  'use strict';

  // include libs
  var angular = require('angular');
  window._ = require('lodash');
  require('../bower_components/bootstrap/dist/css/bootstrap.min.css');

  angular.module('textAnalyser',[])
    .controller('MainController', require('./controllers/MainController.js'))
    .factory('AnalyseService', require('./services/AnalyseService.js'))
    .directive('textInput', require('./components/textInput/textInput.js'))
    .directive('resultsTable', require('./components/resultsTable/resultsTable.js'));

})();
