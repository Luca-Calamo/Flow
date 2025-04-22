// app/utils/cameraUtils.js

// Start the camera
export const startCamera = async (videoRef) => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
        });

        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }

        return stream;
    } catch (err) {
        console.error("Error accessing camera:", err);
        alert("Camera access denied or not available");
        return null;
    }
};

// Stop the camera
export const stopCamera = (videoRef) => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
        stream.getTracks().forEach((track) => track.stop());
    }
};

// Capture photo from video stream
export const capturePhoto = (videoRef, canvasRef) => {
    if (!videoRef.current || !canvasRef.current) return null;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    // Set canvas size to match video
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    // Draw current frame to canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);

    // Get image data URL
    return canvas.toDataURL("image/png");
};
