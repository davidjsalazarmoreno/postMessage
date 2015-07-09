window.addEventListener("message", function(e) {
  console.log(e.data);
  console.log(e.origin);
}, false);

window.onload = function() {
  var iframe = document.getElementById("remoto"),
      textarea = document.getElementById("mensaje");
      button = document.getElementsByTagName("button");

  button[0].onclick = function( e ) {
    e.preventDefault();
    console.log(textarea.value);
    iframe.contentWindow.postMessage(textarea.value, "http://127.0.0.1:4444/remoto.html")
  };

};
