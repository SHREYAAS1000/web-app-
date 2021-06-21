function preload(){

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses); // on(): used to start  execueting
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}

function draw()
{
image(video,0,0,300,300)
}

function take_snapshot()
{
    save("MyFilterImage.png");
}

function gotPoses(results)
{
     if(results.length > 0) // if condition is not used , then posenet will stop and app will not work
     {
         console.log(results);
         console.log("nose x ="+ results[0].pose.nose.x);
         console.log("nose y ="+ results[0].pose.nose.y);
     }
}

