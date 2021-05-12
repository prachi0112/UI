window.addEventListener("load", initEvents);

var audioPlayer;
var showCurrentSong;
var savePlay;
var delPlay;

function initEvents() {
    audioPlayer = document.querySelector('#audio');
    showCurrentSong = document.querySelector('#current_song');
    savePlay = document.querySelector("#savePlay");
    delPlay = document.querySelector("#delPlay");

    loadAllSongs();
    loadPlaylist();
    PlaylistOptions();
}

function PlaylistOptions() {
    savePlay.addEventListener("click", savePlaylist);
    delPlay.addEventListener("click", deletePlaylist);
}

function loadAllSongs() {
    var ul = document.querySelector('#songsList');

    // for(var i = 0; i < songsList.length; i++) {
    //     var li = document.createElement("li");
    //     li.innerHTML = songsList[i].song_name;
    //     ul.appendChild(li);
    // }

    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        // li.innerHTML = obj.song_name;
        li.className = 'col-md-3';

        var img = document.createElement("img");
        img.setAttribute('src', obj.song_thumb);
        img.addEventListener("error", function() {
            this.src = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidphelan%2Ffiles%2F2019%2F01%2Fapple_music_1280x720-1200x675.jpg";
        });
        img.className = 'w-100';
        img.setAttribute('title', obj.song_id);

        var span = document.createElement("span");
        span.innerHTML = obj.song_name;

        var btn = document.createElement("button");
        btn.innerHTML = "Add to Playlist";
        btn.className = "d-block w-100 btn btn-primary";

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);

        img.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlaylist);
    });
}

function playSong() {
    var songId = event.srcElement.title;
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var currentSong = songsList[i];
        }
    }
    // console.log(currentSong);
    audioPlayer.src = currentSong.song_url;
    audioPlayer.play();
    showCurrentSong.innerHTML = currentSong.song_name;
}

function addToPlaylist() {
    var songId = event.srcElement.parentElement.children[0].title;
    for(var i = 0; i < songsList.length; i++) {
        if(songsList[i].song_id == songId) {
            var currentSong = songsList[i];
        }
    }
    playListOperations.addSong(songId, currentSong.song_name, currentSong.song_url,
        currentSong.song_thumb);

    showPlayList();
    // savePlaylist();
}

function showPlayList() {
    var ul = document.querySelector('#playList');
    ul.innerHTML = "";    // Comment this line to see what's it doing
    playListOperations.playList.forEach(function(obj) {
        var li = document.createElement("li");
        li.className = 'col-md-6';

        var img = document.createElement("img");
        img.setAttribute('src', obj.thumb);
        img.addEventListener("error", function() {
            this.src = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidphelan%2Ffiles%2F2019%2F01%2Fapple_music_1280x720-1200x675.jpg";
        });
        img.className = 'w-100';
        img.setAttribute('title', obj.id);

        var span = document.createElement("span");
        span.innerHTML = obj.name;

        var btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "d-block w-100 btn btn-primary";

        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);

        img.addEventListener("click", playSong);
        btn.addEventListener("click", deleteFromPlaylist);
    });
}

function deleteFromPlaylist() {
    var songId = event.srcElement.parentElement.children[0].title;
    playListOperations.deleteSong(songId);
    showPlayList();
    // savePlaylist();
}

function savePlaylist() {
    if(window.localStorage) {
        var json = JSON.stringify(playListOperations.playList);
        localStorage.setItem('playlist', json);
        alert("Playlist Saved..");
    }
    else {
        alert("Loacal Storage not supported..");
    }
}

function loadPlaylist() {
    if(window.localStorage) {
        if(localStorage.playlist) {
            // var data = localStorage.playlist;
            var data = localStorage.getItem('playlist');
            playListOperations.playList = JSON.parse(data);
            showPlayList();
        }
    }
    else {
        alert("Local Storage not supported..");
    }
}

function deletePlaylist() {
    playListOperations.playList.splice(0, playListOperations.playList.length);
    showPlayList();
    alert("Playlist Deleted..");
    savePlaylist();
}

function searchSong() {
    var search_song = document.querySelector("#search_song");
    search_song.addEventListener("keyup", searchSong);
}