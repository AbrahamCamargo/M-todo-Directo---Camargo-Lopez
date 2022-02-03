

let cont = 0;
let x1 = 0, y1 = 0, x2 = 0, y2 = 0, m = 0, b = 0, Y = 0;

function getMousePosition(canvas, event) {

    cont = cont + 1;

    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
  
    if (cont == 1)
    {
       x1 = x;
       y1 = y;
       console.log("Para x1: " + x, 
                   "Para y1: " + y);
    }
    else if (cont == 2)
    {
       x2 = x;
       y2 = y;
       console.log("Para x2: " + x, 
                   "Para y2: " + y);
      
      m = (y2 - y1) / (x2 - x1);
      b = y1 -(m * x1);

      console.log("M = " + m);      
      console.log("B = " + b);


      let inicio = 0, fin = 0;

      if (x1 > x2)
      {
        inicio = x2;
        fin = x1;
      }
      else
      {
        inicio = x1;
        fin = x2;
      }
      
      var context = canvas.getContext("2d");
      context.fillstyle = "green";

      for(var i = inicio; i <= fin; i++)
      {
        Y = (m*i) + b;
        redondeo = Math.round(Y);
        context.fillRect(i, Y, 1, 1);
        console.log("X="+ i + " " + "Y=" + redondeo);
      }
    }

}

let canvasElem = document.querySelector("canvas");
  
canvasElem.addEventListener("mousedown", function(e)
{
    getMousePosition(canvasElem, e);
});

function refreshPage(){
    window.location.reload();
} 