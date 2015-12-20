module.exports = function() {
  return {
    analyse: function(text) {
      var results = {};

      // split by spaces, tabs, commas or full stops
      var words = text.split(/[\t ,.]+/);

      // filter empty words and special characters that are not part of words
      words = _.filter(words, function(word) {
        if(word.length > 0 && !word.match(/^(\(|\-|\_|\‘|\[|\]|\{|\}|\“|\£|\$|\&|\%|\!|\:|\;|\\|\/|\))+$/g)) {
          return word;
        }
      });

      // group words by starting letter
      results = _.groupBy(words.sort(), function(word) {
        // turn all words to lower case
        word = word.toLowerCase();
        return word[0];
      });
      // set word count in results
      results.wordCount = words.length;

      return results;
    },
    countCommas: function(text) {
      // count commas in text
      var commaCount = text.match(/,/g);
      if(commaCount) {
        return commaCount.length;
      }
      return 0;
    },
    countFullStops: function(text) {
      // count full stops in text
      var fullStopCount = text.match(/\./g);
      if(fullStopCount) {
        return fullStopCount.length;
      }
      return 0;
    }
  };
};

module.exports.$inject = [];
