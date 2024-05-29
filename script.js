console.log("Welcome to Spotify!");
// Container-1: N/A

//Container-2: SongList

//Step-1: Whenever details of a list has to be added using JS, create a DS that stores details like an Array of Objects:
let songs = [
    {songName: "Drippy", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "0 To 100", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mi Amore", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dior", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Guilty", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Tu Hi Haqeeqat", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Pardesh Katenda", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Adharam Madhuram", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jis Andhe Ne", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Cheques", filePath: "songs/2.mp3", coverPath: "covers/10.jpg"}
   ];

//Step-2: Get the Reference of the Element's Object from the DOM Tree:
let songNameElement = Array.from(document.getElementsByClassName('musicName'));
let imageCoverName = Array.from(document.getElementsByClassName('imageN'));


//Step-3: Set the name or attribute or add HTML looping the Array of Elements of same Class/same Column:
for(let i =0; i<songNameElement.length; i++){
    songNameElement[i].innerText = songs[i].songName;
}


for(let i =0; i<imageCoverName.length; i++){
    imageCoverName[i].src = songs[i].coverPath;
}

//Container-2: SongList

//Step-1: Initaialise songIndex: 
let songIndex = 0;

//Step-2: Create an Audio Object that will be played uniquly all over the website:
let audioElement = new Audio('songs/1.mp3');

//Step-3: Get the reference of the play button from DOM Tree:
let playSong = document.getElementById('playSong');


//Step-4: Select the image elements of each song(row) from the DOM Tree:
let playingSong = Array.from(document.getElementsByClassName('imageN'));


//Step-5: Adding and Initaiting event listener for all the songs using loop, waiting for the event to happen:
for(let i =0; i<playingSong.length; i++){
    playingSong[i].addEventListener('click', (e)=>{
        
        songIndex = parseInt(e.target.id); 
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        document.getElementById('imgg').src = `covers/${songIndex}.jpg`;
        Array.from(document.getElementsByClassName('songItem1')).forEach((e)=>{
            e.style.backgroundColor = 'rgb(28, 28, 28)';
        });

    document.getElementById('sngN').innerText = songs[songIndex-1].songName;
    document.getElementById('imgg').src = `covers/${songIndex}.jpg`;
    playSong.classList.remove('fa-play-circle');
    playSong.classList.add('fa-pause-circle');
    })
}



//Container-3: MusicController

//Step-1: Add Event to the button(R):
playSong.addEventListener('click', ()=>{
   if(audioElement.paused || audioElement.currentTime==0){
        audioElement.play();
        playSong.classList.remove('fa-play-circle');
        playSong.classList.add('fa-pause-circle');
   }
   else{
        audioElement.pause();
        playSong.classList.remove('fa-pause-circle');
        playSong.classList.add('fa-play-circle');
    }
})


//Step-2: Get the reference of the progressBar from DOM Tree to change the "value" attribute using audio object:
let myProgressBar = document.getElementById('myProgressBar');


//Step-3: 'timeupdate' Event of Audio Object gets fire automatically after every fraction of second, everything inside the eventHandler Function executes during the songPlay:

audioElement.addEventListener('timeupdate', ()=>{
    myProgressBar.value = parseInt((audioElement.currentTime/audioElement.duration)* 100);
})


//Step-4: 'change' event recognises changes the value of myProgressBar.value attribute on whatever mark it is clicked on:
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value)/100)* audioElement.duration;
})


//Step-5: Adding Event to the Next Song and Previous Song:
document.getElementById('nextSong').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 1;
    }
    else{
        songIndex++;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('sngN').innerText = songs[songIndex-1].songName;
    document.getElementById('imgg').src = `covers/${songIndex}.jpg`;
    playSong.classList.remove('fa-play-circle');
    playSong.classList.add('fa-pause-circle');
})

document.getElementById('previousSong').addEventListener('click', ()=>{
    if(songIndex<1){
        songIndex =0;
    }
    else{
        songIndex--;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('sngN').innerText = songs[songIndex-1].songName;
    document.getElementById('imgg').src = `covers/${songIndex}.jpg`;
    playSong.classList.remove('fa-play-circle');
    playSong.classList.add('fa-pause-circle');
})
