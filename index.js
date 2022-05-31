let photos = [
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/fbe05d6c-01d7-463d-bbf0-8dcd512857a1.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/65558036-18e4-4952-9562-556cadd681af.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/9305b596-ecf6-4ce4-9dbb-9e08d6ed3661.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/509382d5-c2c3-4f09-8716-dbbca3c1963b.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/3645a832-4051-4bb2-a41a-2cccf5fe2ce6.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/3a2f4357-f613-4cc6-a7dd-2f2b058fdf82.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/cf3640db-1dcf-4fc0-a763-170de349d898.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/b3ad4e1d-82d1-4334-9993-cef0cbf9a94f.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/88ad0149-6be1-4e44-8506-611f4603c269.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/8e4e2b3b-181c-42d5-a2bc-328aa488097b.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/66015e9b-ad78-4938-bbe2-df510ca83d04.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/ba9e3331-b67b-4871-a40e-cf6665d03ccf.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4607.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4439.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4438.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/fd10f53f-5e4b-4e59-9cb9-a4c40a8772ee.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/7d43c719-19ce-4238-85d3-e293ec19a0aa.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4436.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/db3a0da2-7b51-4139-b294-a89110d4f0fd.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4435.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4434.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/e3bc8211-55b5-47f9-919d-1a9e980ee14b.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4433.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4432.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4585.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/019e3563-d17b-43b6-be71-d7cf5a1c6d9f.JPG?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4451.jpg?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/IMG_4445.jpg?raw=true",
]

let songs = [
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/Doria - Island Songs VII.mp3?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/Dawn.mp3?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/Keith Kenniff - Even Now.mp3?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/Spring 1 - Recomposed by Max Richter Vivaldi The Four Seasons.mp3?raw=true",
"https://github.com/KaulitzGuimaraes/centimeters/blob/media/Home.mp3?raw=true",
]
function changeBg() {
    var imgUrl = photos[Math.floor(Math.random()*photos.length)];
    $('.vanimage').css('background-image', 'url(' + imgUrl + ')');

    $('.vanimage').fadeIn(1000);
}

function changeBackgroundSmoothly() {
    $('.vanimage').fadeOut(1000, changeBg);
   
}
var audio = document.getElementById("myaudio");
  audio.volume = 0.5;

let pos = 0
let status_ = true;
  audio = document.getElementById("myaudio");
  audio.addEventListener("ended", function() {
      audio.pause();
      if(pos == songs.length -1){
          pos = 0
      }else{
          pos+=1
      }
      audio.setAttribute('src',songs[pos])
      audio.play();
  });

const card = document.querySelector('#main');

card.addEventListener('dblclick', function (e) {
    if (status_){
        audio.pause()
        status_ = false
    }else{
        audio.play()
        status_ = true
    }
    
});

setInterval(changeBackgroundSmoothly,5000);