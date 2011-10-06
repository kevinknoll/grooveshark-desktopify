document.getElementById('btn').onclick = function() {
  self.postMessage('go');
};
document.getElementById('continue').onclick = function(e) {
  self.postMessage('no');
};
document.getElementById('link').onclick = function(e) {
  self.postMessage('link');
};