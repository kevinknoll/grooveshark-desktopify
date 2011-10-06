const tabs = require('tabs');
const timer = require('timer');
const data = require('self').data;
tabs.on('ready', function(tab) {
  var url = tab.url;
  if (url.match('http://grooveshark.com')) {
    var panel = require('panel').Panel({
      contentURL: data.url('choose.html'),
      contentScriptFile: data.url('choose.js'),
      onMessage: function(data) {
        panel.destroy();
        if (data === 'go') {
          tab.url = url.replace(/http:\/\/grooveshark.com\/(#\/)?/, 'gs://');
          timer.setTimeout(function(){tab.close()}, 150);
        } else if (data === 'link') {
          tabs.open('https://addons.mozilla.org/en-US/firefox/addon/grooveshark-desktopify/');
        }
      }
    });
    panel.show();
  }
});