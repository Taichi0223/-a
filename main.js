var speechRecognition = window.webkitSpeechRecognition;

var agent = new speechRecognition();


function text_start() {
  document.getElementById("textbox").innerHTML = "";
  agent.start();
}



agent.onresult = function (event) {
  console.log(event);
  content = event.results[0][0].transcript;

  document.getElementById("textbox").innerHTML = content;
  if (content == "take my selfie") {
    agent_speak();
  }


}

function agent_speak() {
  var synth = window.speechSynthesis;
  //speakdata = document.getElementById("textbox").value;


  Webcam.attach("#camera");

setTimeout(function(){
  img_id = "img1";
  takeselfie();
  speakdata = "Taking next collage in 2.5 seconds";
  utter = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utter);
}, 2500);

setTimeout(function(){
  img_id = "img2";
  takeselfie();
  speakdata = "Taking next collage in 2.5 seconds";
  utter = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utter);
}, 5000);

setTimeout(function(){
  img_id = "img3";
  takeselfie();
  speakdata = "Taking next collage in 2.5 seconds";
  utter = new SpeechSynthesisUtterance(speakdata);
  synth.speak(utter);
}, 7500);
}

Webcam.set({
  width: 360,
  height: 250,
  image_format: "png",
  png_quality: 360,
});

function takeselfie() {
  Webcam.snap(function (pic) {
if(img_id == "img1"){
    document.getElementById("result1").innerHTML = "<img id = 'img1'   src = '" + pic + "'/>";
downloadpicture()}

if(img_id == "img2"){
  document.getElementById("result2").innerHTML = "<img id = 'img2'   src = '" + pic + "'/>";
downloadpicture()}

if(img_id == "img3"){
  document.getElementById("result3").innerHTML = "<img id = 'img3'   src = '" + pic + "'/>";
downloadpicture()}
  });

}

function downloadpicture() {
  anchor_tag = document.getElementById("link");
  picture = document.getElementById("img").src;
  anchor_tag.href = picture;
  anchor_tag.click();
}