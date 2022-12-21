    import Player from "@vimeo/player";

    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
   
    player.on('timeupdate', function(data) {
    const timeStop = data.seconds;
    localStorage.setItem("videoplayer-current-time", timeStop);
    });

    const timeStart = localStorage.getItem("videoplayer-current-time");
    player.setCurrentTime(timeStart);

