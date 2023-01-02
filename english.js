console.log("Welcome to Spotify");

// Initialixe the variables
let songIndex = 0;
let audioElement = new Audio('song/11.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongNAme = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let song = [
    {songName: "Let me love you       ", filePath: "song/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "-Tu-Bandeya    ", filePath: "song/12.mp3", coverPath: "covers/2.jpg"},
    {songName: "Jiske ", filePath: "song/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "Khamoshiyan           ", filePath: "song/14.mp3", coverPath: "covers/4.jpg"},
    {songName: " si judaiyan  ", filePath: "song/15.mp3", coverPath: "covers/5.jpg"},
    {songName: "Mushkurane ki wajah   ", filePath: "song/16.mp3", coverPath: "covers/6.jpg"},
    {songName: "O sudh budh khoyi     ", filePath: "song/17.mp3", coverPath: "covers/7.jpg"},
    {songName: "Rabba ne tujhko       ", filePath: "song/18.mp3", coverPath: "covers/8.jpg"},
    {songName: "Sanson ko             ", filePath: "song/19.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tu jo mila            ", filePath: "song/20.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((element, i)=> {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;

})


// AddElement.play();

// Handle Play/Pause events
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to event
audioElement.addEventListener('timeupdate', () =>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongNAme.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex =0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongNAme.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex =0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongNAme.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
})