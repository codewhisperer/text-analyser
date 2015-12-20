angular.module('textAnalyser', []).factory('AnalyseService', require('./AnalyseService.js'));

describe('AnalyseService', function() {

  var $injector = angular.injector([ 'textAnalyser' ]);
  var analyseService = $injector.get( 'AnalyseService' );

  var testText = "The	quick	brown fox	jumps	over	the	lazy	dog,	before	the	duffle	bag	became	his	toy,	now	he’s	happy.";

  it('Test word count', function() {
    var testWordCount = 19;

    // run test
    expect(analyseService.analyse(testText).wordCount).toBe(testWordCount);
  });

  it('Test comma count', function() {
    var testCommaCount = 2;

    // run test
    expect(analyseService.countCommas(testText)).toBe(testCommaCount);
  });

  it('Test full stop count', function() {
    var testFullStopCount = 1;

    // run test
    expect(analyseService.countFullStops(testText)).toBe(testFullStopCount);
  });
});
