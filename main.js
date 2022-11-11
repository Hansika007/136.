status1 = "";
video = "";

function preload()
{
}

function setup()
{
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector =ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML= "Status : Object Detecting";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
}

function draw()
{
    image(video , 0 , 0 , 350 , 350);
}
