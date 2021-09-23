var mouse_event ="empty" ;
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color ="blue";
width_of_line =3;
canvas.addEventListener("mousedown",mymousedown);
 function mymousedown(e){
color=document.getElementById("color").value;
width_of_line = document.getElementById("width").value;
mouse_event="mouseDown";


 }
 canvas.addEventListener("mousemove",mymousemove);

 function mymousemove(e){
current_position_of_x =e.clientX-canvas.offsetLeft;
current_position_of_y =e.clientY-canvas.offsetTop;

if (mouse_event =="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth =width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(current_position_of_x,current_position_of_y);
    ctx.stroke();

}  
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
 }
 canvas.addEventListener("mouseup",mymouseup);
 function mymouseup(e){
     mouse_event="mouseUp";
 }
 canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
     mouse_event="mouseLeave";
 }
 function cleararea(){
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }
