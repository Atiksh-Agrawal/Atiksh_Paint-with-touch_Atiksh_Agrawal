var mouse_event = "empty";
var last_pos_x, last_pos_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 2;
var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
}

canvas.addEventListener("touchstart", start_my);

function start_my(e) {
    color = document.getElementById("Color").value;
    line_width = document.getElementById("width").value;

    last_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    last_pos_y = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", move_my);

function move_my(e) {
    current_pos_x = e.touches[0].clientX - canvas.offsetLeft;
    current_pos_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;

    ctx.moveTo(last_pos_x, last_pos_y);
    ctx.lineTo(current_pos_x, current_pos_y);
    ctx.stroke();


    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;

}

canvas.addEventListener("mousedown", mousedown_my);

function mousedown_my(e) {
    color = document.getElementById("Color").value;
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", mousemove_my);

function mousemove_my(e) {
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        ctx.moveTo(last_pos_x, last_pos_y);
        ctx.lineTo(current_pos_x, current_pos_y);
        ctx.stroke();
    }

    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;

}
canvas.addEventListener("mouseup", mouseup_my);

function mouseup_my(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mouseleave_my);

function mouseleave_my(e) {
    mouse_event = "mouseleave";
}


function Clear() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}