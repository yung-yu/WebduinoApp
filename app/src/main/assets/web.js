var led;


boardReady('Ak0D', function (board) {
  board.samplingInterval = 20;
  led1 = getLed(board, 10);
  led2 = getLed(board, 11);
  document.getElementById("demo-area-02-light").className = "off";
  document.getElementById("demo-area-01-light").className = "off";
  led1.off();
  led2.off();
  document.getElementById("demo-area-01-light").addEventListener("click",function(){
      if (document.getElementById("demo-area-01-light").className == "off") {
        document.getElementById("demo-area-01-light").className = "on";
        led1.on();
      } else {
        document.getElementById("demo-area-01-light").className = "off";
        led1.off();
      }
    });
    document.getElementById("demo-area-02-light").addEventListener("click",function(){
           if (document.getElementById("demo-area-02-light").className == "off") {
             document.getElementById("demo-area-02-light").className = "on";
             led2.on();
           } else {
             document.getElementById("demo-area-02-light").className = "off";
             led2.off();
           }
         });
led1.on();
});
