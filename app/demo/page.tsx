"use client"
import 'regenerator-runtime/runtime'
import React, {useState} from "react";
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
import Image from 'next/image'

export default function Demo() {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const onVoiceMessage = async() => {
        if (listening) {
            await SpeechRecognition.stopListening()
            return false;
        }
        resetTranscript();
        await SpeechRecognition.startListening();
    }

    return (
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div
                    className="h-[70vh] md:h-[75vh] relative rounded flex flex-col space-y-4 p-6 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch bg-white">
                    <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white ">Are you using sudo?</span>
                                </div>
                                <div>
                                    <span
                                        className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Run this command sudo chown -R `whoami` /Users/your_user_profile/.npm-global/ then install the package globally without using sudo</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                                alt="My profile" className="w-6 h-6 rounded-full order-2"/>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="flex items-end">
                            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                <div>
                                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span>
                                </div>
                                <div>
                                    <span
                                        className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">I have no issue with any other packages installed with root permission globally.</span>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1581481615985-ba4775734a9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=144&amp;h=144&q=80"
                                alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 border-gray-200 p-4 mb-2 sm:mb-0 bg-white rounded">
                    <div className="relative flex">
                        {browserSupportsSpeechRecognition && (
                            <span className="absolute inset-y-0 flex items-center">
                            <button type="button"
                                    className="ml-1 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                                    onTouchStart={onVoiceMessage}
                                    onMouseDown={onVoiceMessage}
                                    onTouchEnd={onVoiceMessage}
                                    onMouseUp={onVoiceMessage}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor" className={`h-6 w-6 text-gray-600 ${listening && 'animate-pulse text-red-500'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                              </svg>
                            </button>
                        </span>
                        )}


                        <input type="text" placeholder="Send a message."
                               className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                        />

                        <span className="absolute right-0 inset-y-0 flex items-center">
                            <button type="button"
                                    className="mr-1 inline-flex items-center justify-center h-10 w-10 text-gray-500 focus:outline-none">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                   className="h-6 w-6 ml-2 transform rotate-90">
                                        <path
                                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                              </svg>
                            </button>
                        </span>
                    </div>
                    <div className="flex justify-between pt-2">
                        <button type="button"
                                className="inline-flex items-center justify-center rounded px-3 py-2 bg-gray-100 border-2 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-7.5 0 32 32"
                                 version="1.1" className="h-6 w-6 mr-1">
                                <path
                                    d="M15.88 13.84c-1.68-3.48-5.44-5.24-9.040-4.6l0.96-1.8c0.24-0.4 0.080-0.92-0.32-1.12-0.4-0.24-0.92-0.080-1.12 0.32l-1.96 3.64c0 0-0.44 0.72 0.24 1.040l3.64 1.96c0.12 0.080 0.28 0.12 0.4 0.12 0.28 0 0.6-0.16 0.72-0.44 0.24-0.4 0.080-0.92-0.32-1.12l-1.88-1.040c2.84-0.48 5.8 0.96 7.12 3.68 1.6 3.32 0.2 7.32-3.12 8.88-1.6 0.76-3.4 0.88-5.080 0.28s-3.040-1.8-3.8-3.4c-0.76-1.6-0.88-3.4-0.28-5.080 0.16-0.44-0.080-0.92-0.52-1.080-0.4-0.080-0.88 0.16-1.040 0.6-0.72 2.12-0.6 4.36 0.36 6.36s2.64 3.52 4.76 4.28c0.92 0.32 1.84 0.48 2.76 0.48 1.24 0 2.48-0.28 3.6-0.84 4.16-2 5.92-7 3.92-11.12z"></path>
                            </svg>
                            <span className="font-normal">Restart</span>

                        </button>

                        <button type="button"
                                className="inline-flex items-center justify-center rounded px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"
                                 className="h-5 w-5 mr-2">
                                <path id="Path_50" data-name="Path 50"
                                      d="M-11.5,0h-11A2.5,2.5,0,0,0-25,2.5v8A2.5,2.5,0,0,0-22.5,13h.5v2.5a.5.5,0,0,0,.309.462A.489.489,0,0,0-21.5,16a.5.5,0,0,0,.354-.146L-18.293,13H-11.5A2.5,2.5,0,0,0-9,10.5v-8A2.5,2.5,0,0,0-11.5,0ZM-10,10.5A1.5,1.5,0,0,1-11.5,12h-7a.5.5,0,0,0-.354.146L-21,14.293V12.5a.5.5,0,0,0-.5-.5h-1A1.5,1.5,0,0,1-24,10.5v-8A1.5,1.5,0,0,1-22.5,1h11A1.5,1.5,0,0,1-10,2.5Zm-2.038-3.809a.518.518,0,0,1-.109.163l-2,2A.5.5,0,0,1-14.5,9a.5.5,0,0,1-.354-.146.5.5,0,0,1,0-.708L-13.707,7H-18.5A1.5,1.5,0,0,0-20,8.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A2.5,2.5,0,0,1-18.5,6h4.793l-1.147-1.146a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0l2,2a.518.518,0,0,1,.109.163A.505.505,0,0,1-12.038,6.691Z"
                                      transform="translate(25)"/>
                            </svg>
                            <span className="font-normal">Generate Request</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
