"use client"
import {useState} from 'react';
import {useReactMediaRecorder} from "react-media-recorder";

export const Record = ({setPrompt, setIsLoading, setError}: any) => {
    const {status, startRecording, stopRecording, mediaBlobUrl}: any =
        useReactMediaRecorder({
            audio: true, mediaRecorderOptions: {
                mimeType: 'audio/webm',
            },
            stopStreamsOnStop: true,
            onStop: async (blobUrl, blob) => {
                await transcriptAudio({blob})
            }
        });

    const transcriptAudio = async ({blob}: any) => {
        try {
            setIsLoading(true)
            const audioFile = new File([blob], 'recording.webm', {
                type: 'audio/webm'
            })

            const formData: any = new FormData();
            formData.append("file", audioFile);

            const response = await fetch('/demo/api/chat/transcript', {
                method: "POST",
                body: formData
            });


            if (response) {
                const {text} = await response.json();
                setPrompt(text);

            }
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <span className="absolute inset-y-0 flex items-center">
                <button type="button"
                        className="mx-2 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-stone-100"
                        onTouchStart={startRecording}
                        onMouseDown={startRecording}
                        onTouchEnd={stopRecording}
                        onMouseUp={stopRecording}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor"
                       className={`h-5 w-5 text-gray-600 ${status === "recording" && 'animate-pulse text-red-500'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                  </svg>
                </button>
            </span>
        </>
    );
};
