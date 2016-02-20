var led1;
var led2;
var _E8_A8_88_E6_99_82_E5_99_A8;

boardReady('Ak0D', function (board) {
  board.samplingInterval = 20;
  led1 = getLed(board, 10);
  led2 = getLed(board, 11);
  document.getElementById("demo-area-01-light").className = "off";
  document.getElementById("demo-area-02-light").className = "off";
  document.getElementById("demo-area-03-light").className = "off";
  led1.off();
  led2.off();
  document.getElementById("demo-area-01-light").addEventListener("click",function(){
      clearTimeout(_E8_A8_88_E6_99_82_E5_99_A8);
      document.getElementById("demo-area-03-light").className = "off";
      if (document.getElementById("demo-area-01-light").className == "off") {
        document.getElementById("demo-area-01-light").className = "on";
        led1.on();
      } else {
        document.getElementById("demo-area-01-light").className = "off";
        led1.off();
      }
      });
  document.getElementById("demo-area-02-light").addEventListener("click",function(){
       clearTimeout(_E8_A8_88_E6_99_82_E5_99_A8);
       document.getElementById("demo-area-03-light").className = "off";
       if (document.getElementById("demo-area-02-light").className == "off") {
         document.getElementById("demo-area-02-light").className = "on";
         led2.on();
       } else {
         document.getElementById("demo-area-02-light").className = "off";
         led2.off();
       }
     });

     document.getElementById("demo-area-03-light").addEventListener("click",function(){
         if (document.getElementById("demo-area-03-light").getAttribute("class")=="on") {
           document.getElementById("demo-area-03-light").setAttribute("class","off");
           led1.off();
           led2.off();
           clearTimeout(_E8_A8_88_E6_99_82_E5_99_A8);
         } else {
           document.getElementById("demo-area-03-light").setAttribute("class","on");
           var blinkVar=1;
           var blinkFunction=function(){
             blinkVar=blinkVar+1;
             if(blinkVar%2==0){
             led1.on();
             led2.off();
             document.getElementById("demo-area-03-light").setAttribute("class","on");
           }else{
             led1.off();
             led2.on();
              document.getElementById("demo-area-03-light").setAttribute("class","off");
            }
             _E8_A8_88_E6_99_82_E5_99_A8 = setTimeout(blinkFunction,500);
           };
           blinkFunction();
         }

       });
});
