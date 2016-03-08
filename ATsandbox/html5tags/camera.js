window.addEventListener("DOMContentLoaded", function() {
            // Grab elements, create settings, etc.

            video = document.getElementById("liveFeed");
            videoObj =
            {   "video": true };
                errBack = function(error) {
                console.log("Video capture error: ", error.code);
            }

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            }else if(navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    video.src = window.URL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }


            var canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");

            document.getElementById("snap").addEventListener("click", function() {
                context.drawImage(video, 0, 0, 640, 480);
            });
        }, false);