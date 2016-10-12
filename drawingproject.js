  var canvasDiv = document.getElementById("drawingArea");
  var canvas = canvasDiv.getContext('2d');

canvas.beginPath();
canvas.moveTo(50,50);
canvas.lineTo(100,50);
canvas.lineTo(100,25);
canvas.fill();
//Head//
canvas.fillStyle = "pink";
canvas.beginPath();
canvas.arc(120, 40, 25, 0, 2*Math.PI);
canvas.fill();
//Eye//
canvas.fillStyle = "teal";
canvas.beginPath();
canvas.arc(115, 35, 5, 0, 2*Math.PI);
canvas.fill();
//Body//
canvas.fillStyle = "pink";
canvas.fillRect(145, 50, 100, 100);
//Left wing//
canvas.fillStyle = "violet";
canvas.beginPath();
canvas.moveTo(30,150);
canvas.lineTo(100,100);
canvas.lineTo(150,125);
canvas.fill();
//Right wing//
canvas.fillStyle = "violet";
canvas.beginPath();
canvas.moveTo(230,125);
canvas.lineTo(300,100);
canvas.lineTo(350,125);
canvas.fill();
//Body//
canvas.fillStyle = "hotpink";
canvas.fillRect(145, 100, 100, 100);
//legs//
canvas.beginPath();
canvas.lineWidth=2;
canvas.strokeStyle = "black";
canvas.moveTo(220,180);
canvas.lineTo(300,160);
canvas.lineTo(315,165);
canvas.moveTo(300,160);
canvas.lineTo(315,158);
canvas.moveTo(300,160);
canvas.lineTo(315,150);
canvas.stroke();

canvas.beginPath();
canvas.moveTo(170,180);
canvas.lineTo(110,240);
canvas.lineTo(115,255);
canvas.moveTo(110,240);
canvas.lineTo(95,255);
canvas.moveTo(110,240);
canvas.lineTo(85,255);
canvas.stroke();

canvas.fillStyle = "black";
canvas.beginPath();
canvas.moveTo(50,15);
canvas.lineTo(100,55);
canvas.lineTo(100,25);
canvas.fill();
/*Babies*/
//baby right wing//
canvas.fillStyle = "whitesmoke";
canvas.beginPath();
canvas.moveTo(560,115);
canvas.lineTo(520,115);
canvas.lineTo(535,100);
canvas.fill();
//baby body//
canvas.fillStyle = "ghostwhite";
canvas.fillRect(500, 100, 25, 25);
//baby head//
canvas.fillStyle = "white";
canvas.beginPath();
canvas.arc(500, 95, 10, 0, 2*Math.PI);
canvas.fill();

canvas.fillStyle = "black";
canvas.beginPath();
canvas.moveTo(470,90);
canvas.lineTo(490,90);
canvas.lineTo(490,100);
canvas.fill();
