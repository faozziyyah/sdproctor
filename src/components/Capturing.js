import React, { useEffect, useRef, useState } from 'react';

const ImageCapture = () => {
  const videoRef = useRef(null);

    // Assuming 'id' is a state variable
    const [id, setId] = useState(4);

  useEffect(() => {
    const setupCamera = async () => {
      const video = videoRef.current;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    setupCamera();
  }, []);

  const captureImage = async () => {

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    var imageName = 'user_' + id;
    alert(imageName);

    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
    const formData = new FormData();
    formData.append('image', blob, imageName + '.jpg');

    fetch(`https://demo.schautomate.com.ng/api/users/imageupload/${id}`, {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <video id="video" ref={videoRef} autoPlay playsInline muted></video>
      <button id="captureBtn" onClick={captureImage}>Capture Image</button>
    </div>
  );
};

export {ImageCapture};
