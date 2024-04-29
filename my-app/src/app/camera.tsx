import React, { useRef, useEffect, useState } from "react";

function Camera() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const photoRef = useRef<HTMLCanvasElement>(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080 }
            })
            .then(stream => {
                let video = videoRef.current;
                if (video) {
                    video.srcObject = stream;
                    video.play();
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    const takePhoto = () => {
        const width = 414;
        const height = window.innerWidth / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        if (photo && video) {
            photo.width = width;
            photo.height = height;

            let ctx = photo.getContext('2d');
            if (ctx) {
                ctx.drawImage(video, 0, 0, width, height);
                setHasPhoto(true);
            }
        }
    }

    const closePhoto = () => {
        let photo = photoRef.current;
        if (photo) {
            let ctx = photo.getContext('2d');
            if (ctx) {
                ctx.clearRect(0, 0, photo.width, photo.height);
                setHasPhoto(false);
            }
        }
    }

    useEffect(() => {
        getVideo();
    }, []);

    return (
        <div className="CameraApp">
            <div className="Camera">
                <video ref={videoRef}></video>
                <button onClick={takePhoto}>Taka Mynd</button>
            </div>
            <div className={'result' + (hasPhoto ? ' hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button onClick={closePhoto}>Bakka</button>
            </div>
        </div>
    );
}

export default Camera;
