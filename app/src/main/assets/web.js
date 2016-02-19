var led;


boardReady('Ak0D', function (board) {
  board.samplingInterval = 20;
  led = getLed(board, 10);
  document.getElementById("demo-area-02-light").className = "off";
  led.off();
  document.getElementById("demo-area-02-light").addEventListener("click",function(){
    if (document.getElementById("demo-area-02-light").className == "off") {
      document.getElementById("demo-area-02-light").className = "on";
      led.on();
    } else {
      document.getElementById("demo-area-02-light").className = "off";
      led.off();
    }
  });
});
