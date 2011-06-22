const tabs = require('tabs');
const timer = require('timer');
tabs.on('ready', function(tab) {
  var url = tab.url;
  if (url.match('http://grooveshark.com')) {
    var new_url = url.replace(/http:\/\/grooveshark.com\/(#\/)?/, 'gs://');
    tab.url = new_url;
    timer.setTimeout(function(){tab.close()}, 150);
  }
});