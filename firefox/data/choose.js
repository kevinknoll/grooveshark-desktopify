var btn = document.getElementById('btn');
if (btn) {
  btn.onclick = function() {
    self.postMessage("Got the message!");
  }
}