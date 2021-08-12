//window.webkitSpeechRecognition-webspeech api to recognize our speech and convert to text
var speech_rec=window.webkitSpeechRecognition;
//to creat a new web speech API
var recognition=new speech_rec();

function start(){
    document.getElementById("text-box").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("text-box").innerHTML=content;

    if(content == "take my selfie"){
        speak();
    }

}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5s";
    var utter=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:350, height:250, image_format:'png', png_quality:90
});
camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>"
    });
    
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}