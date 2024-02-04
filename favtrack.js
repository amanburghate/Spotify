let favoriteSongs = [];
favoriteSongs = localStorage.favsongs;
favoriteSongs = favoriteSongs.split(",");

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
];


favoriteSongs.forEach((element, i)=>{ 
    var div1 = document.createElement('div');
    div1.classList.add('songItem');
    var img1 = document.createElement('img');
    img1.src =songs[element].coverPath;
    var span1 = document.createElement('span');
    span1.classList.add('songName');
    span1.innerText = songs[element].songName;
    var span2 = document.createElement('span');
    span2.classList.add('songlistplay');
    var span3 = document.createElement('span');
    span3.classList.add('timestamp');
    var itag = document.createElement('i');
    itag.classList.add('far');
    itag.classList.add('songItemPlay');
    itag.classList.add('fa-play-circle');
    itag.id = i;
    span3.appendChild(itag);
    span2.appendChild(span3);
    div1.appendChild(span2);
    div1.appendChild(span1);
    div1.appendChild(img1);
    songdiv.appendChild(div1);
})
 
