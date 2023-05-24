Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function (data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'">';
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3o7RaB7TS/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}