// "use client"

import React from "react";
import {useReactMediaRecorder} from "react-media-recorder";

export const Record = () => {
    const {status, startRecording, stopRecording, mediaBlobUrl} =
        useReactMediaRecorder({audio: true});


    const onStartRecording = async () => {
        startRecording();
    }

    const onStopRecording = async () => {
        stopRecording();
        if (mediaBlobUrl) {
            const audioBlob = await fetch(mediaBlobUrl).then((mediaBlobUrlResponse) => mediaBlobUrlResponse.blob());
            const audioFile = new File([audioBlob], 'recording.wav', {
                type: 'audio/webm'
            })

            const formData: any = new FormData();
            formData.append("file", audioFile);

            const response = await fetch('/demo/api/chat/transcript', {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: formData
            });

            if (response) {
                const data = await response.json();
                console.info({data});
            }
        }
    }

    return (
        <span className="absolute inset-y-0 flex items-center">
        <button type="button"
                className="mx-2 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-stone-100"
                onTouchStart={onStartRecording}
                onMouseDown={onStartRecording}
                onTouchEnd={onStopRecording}
                onMouseUp={onStopRecording}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor"
               className={`h-5 w-5 text-gray-600 ${status === "recording" && 'animate-pulse text-red-500'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
          </svg>
        </button>
    </span>
    );
};
