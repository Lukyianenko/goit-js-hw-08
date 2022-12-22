    import Player from "@vimeo/player";
    import throttle from 'lodash.throttle';

    const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);
   
    onReloadPage();
    
    player.on('timeupdate', throttle(function(data) {
    const timeStop = data.seconds;
    localStorage.setItem("videoplayer-current-time", timeStop);
    }, 500));


    function onReloadPage() {
        const timeStart = localStorage.getItem("videoplayer-current-time");
        if (timeStart) {
            player.setCurrentTime(timeStart);
        }  
    }
    

