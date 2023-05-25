import { useState, useEffect, useRef } from 'react';
import RecordRTC from 'recordrtc';

type OptionsType = {
    mimeType: string,
    // audioBitsPerSecond: number,
    type: string,
    recorderType: any,
    numberOfAudioChannels: number,
    desiredSampRate: number,
    timeSlice: number,
    ondataavailable: any,
};

type UseRecorderReturnType = {
    startRecording: () => void,
    stopRecording: () => Promise<string>,
    mediaStream: MediaStream | null,
};

const useRecorder = (
    options: OptionsType,
    dataAvailable: (blob: Blob) => void
): UseRecorderReturnType => {
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const recorderRef = useRef<RecordRTC | null>(null);

    useEffect(() => {
        // Request permissions and get user media
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            setMediaStream(stream);
        });

        return () => {
            // Cleanup
            if (mediaStream) {
                mediaStream.getTracks().forEach(track => {
                    track.stop();
                });
            }
        };
    }, []);

    const startRecording = () => {
        if (mediaStream) {
            recorderRef.current = new RecordRTC(mediaStream, options);
            recorderRef.current.startRecording();
            console.log(recorderRef.current)
            // recorderRef.current.mediaRecorder.ondataavailable = (blobEvent) => {
            //    dataAvailable(blobEvent.data);
            //};
        } else {
            console.error('MediaStream is null!');
        }
    };

    const stopRecording = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (recorderRef.current) {
                recorderRef.current.stopRecording(() => {
                    let blob = recorderRef.current?.getBlob();
                    //if (blob) {
                        // dataAvailable(blob);
                        // resolve(URL.createObjectURL(blob));
                    //} else {
                    //    reject('No recorded blob available!');
                    //}
                });
            } else {
                reject('No recording in progress!');
            }
        });
    };

    return { startRecording, stopRecording, mediaStream };
};

export default useRecorder;

