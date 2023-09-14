console.log("page loaded...");

function over(video) {
    video.play();
    video.muted = true;
}

function out(video) {
    video.pause();
}