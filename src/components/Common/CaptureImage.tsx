import React, { useRef } from 'react';

type CaptureProps = {
  showModal: boolean;
};
const CaptureImage = ({ showModal }: CaptureProps) => {
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  const getUsercamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: showModal
      })
      .then((stream) => {
        let video: any = videoRef?.current;
        video.srcObject = showModal === true ? stream : null;
        video.autoplay = showModal === true ? true : false;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const takepicture = () => {
    let width = 500;
    let height = width / (16 / 9);
    let photo: any = photoRef?.current;
    let video = videoRef?.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };

  const clearImage = () => {
    let photo: any = photoRef?.current;

    let ctx = photo.getContext('2d');
    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  return (
    <div className="capture_im">
      <video ref={videoRef}></video>
      <button onClick={getUsercamera} className="bg-sky p-3 text-white rounded-md m-3">
        Open camera
      </button>
      <button onClick={takepicture} className="bg-sky p-3 text-white rounded-md m-3">
        Take Photo
      </button>
      <canvas ref={photoRef}></canvas>
      <button onClick={clearImage} className="bg-red p-3 text-white rounded-md m-3">
        Delete
      </button>
    </div>
  );
};

export default CaptureImage;
