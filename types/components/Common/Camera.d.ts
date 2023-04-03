import React from 'react';
type CameraProps = {
    mediaRecorderRef?: any | null;
    capturing?: boolean;
    setCapturing?: React.Dispatch<React.SetStateAction<boolean>>;
    recordedChunks?: any;
    setRecordedChunks?: React.Dispatch<React.SetStateAction<any>>;
    type: string;
    cameraType?: string;
};
declare const Camera: ({ capturing, setCapturing, mediaRecorderRef, recordedChunks, setRecordedChunks, type, cameraType }: CameraProps) => JSX.Element;
export default Camera;
