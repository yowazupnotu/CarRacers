canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

car1width = 40;
car1height = 40;

car2width = 40;
car2height = 40;

backgroundimg = "track.png";
console.log("backgroundimg =" + backgroundimg);
car1img = "car1.png";
car2img = "car2.png";

car1x = 400;
car1y = 10;

car2x = 400;
car2y = 60;

function add() {
    background_img = new Image();
    background_img.onload = background_image;
    background_img.src = backgroundimg;

    car1_img = new Image();
    car1_img.onload = car1_image;
    car1_img.src = car1img;

    car2_img = new Image();
    car2_img.onload = car2_image;
    car2_img.src = car2img;

}

function background_image() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function car1_image() {
    ctx.drawImage(car1_img, car1x, car1y, car1width, car1height);
}

function car2_image() {
    ctx.drawImage(car2_img, car2x, car2y, car2width, car2height);
}

window.addEventListener("keydown1", my_keydown1)

function my_keydown1(e) {
    console.log("yeet")
    keycode = e.keyCode;
    console.log(keycode);

    if(keycode == 37)
    {
    leftone();
    }

    if(keycode == 38)
    {
    upone();
    }

    if(keycode == 39)
    {
    rightone();
    }

    if(keycode == 40)
    {
    downone();
    }
}

window.addEventListener("keydown2", my_keydown2)

function my_keydown2(e) {
    keycode = e.keyCode;
    console.log(keycode);

    if(keycode == 65)
    {
    lefttwo();
    }

    if(keycode == 87)
    {
    uptwo();
    }

    if(keycode == 68)
    {
    righttwo();
    }

    if(keycode == 83)
    {
    downtwo();
    }
}

function leftone() {
    
    if (car1x >= 0){
        car1x = car1x - 5;
        console.log("X Position of Car 1 is - ", car1x);
    }
    background_image();
    car1_image();
}

function lefttwo() {
    
    if (car2x >= 0){
        car2x = car1x - 5;
        console.log("X Position of Car 2 is - ", car2x);
    }
    background_image();
    car2_image();
}

function rightone() {
    
    if (car1x <= 710){
        car1x = car1x + 5;
        console.log("X Position of Car 1 is - ", car1x);
    }
    background_image();
    car1_image();
}

function righttwo() {
    
    if (car2x <= 710){
        car2x = car2x + 5;
        console.log("X Position of Car 2 is - ", car2x);
    }
    background_image();
    car2_image();
}

function upone() {
    
    if (car1y >= 0){
        car1y = car1y - 5;
        console.log("Y Position of Car 1 is - ", car1y);
    }
    background_image();
    car1_image();
}

function uptwo() {
    
    if (car2y >= 0){
        car2y = car2y - 5;
        console.log("Y Position of Car 2 is - ", car2y);
    }
    background_image();
    car2_image();
}

function downone() {
    
    if (car1y <= 510){
        car1y = car1y + 5;
        console.log("Y Position of Car 1 is - ", car1y);
    }
    background_image();
    car1_image();
}

function downtwo() {
    
    if (car2y <= 510){
        car2y = car2y + 5;
        console.log("Y Position of Car 2 is - ", car2y);
    }
    background_image();
    car2_image();
}