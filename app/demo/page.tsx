"use client";

import React, {useState, useEffect} from "react";

enum USER_TYPES {
    BOT = 'bot',
    USER = 'user'
}

export default function Demo() {
    const [reset, setIsReset] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [conversation, setConversation] = useState({});
    const browserSupportsAudioRecording = true;
    const recording = false


    useEffect(() => {
        const chat = {
            bot: 'How can I assist you today ?',
            user: 'Run this command sudo chown -R `whoami` /Users/your_user_profile/.npm-global/ then install the package globally without using sudo'
        }
        setConversation(chat);
        setIsReset(false)
    }, [reset])

    const onChangePrompt = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value)
    }

    const onKeyDownPrompt = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            await dispatchChat();
        }
    }

    const onClickPrompt = async (event: React.MouseEvent<HTMLButtonElement>) => {
        await dispatchChat();
    }

    const onResetConversation = async () => {
        setIsReset(true)
    }

    const onGenerate = async () => {
        console.info('Should have api call')
    }

    const dispatchChat = async () => {
        const chat = {
            ...conversation,
            user: prompt
        }

        setConversation(chat);
        setPrompt('');
    }


    const onVoiceMessage = async () => {

    }

    return (
        <>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-8 lg:px-6">
                <div
                    className="h-[65vh] md:h-[65vh] relative rounded flex flex-col space-y-4 p-6 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch bg-white">


                    {Object.entries(conversation).map(([userType, message], index) => {
                        const isUser = userType === USER_TYPES.USER;
                        return (
                            <div className="chat-message" key={`chat-message-${index}`}>
                                <div className={`flex items-end ${isUser && 'justify-end'}`}>
                                    <div
                                        className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${isUser ? 'order-1 items-end' : 'order-2 items-start'}`}>
                                        <div>
                                                <span
                                                    className={`px-4 py-2 rounded-lg inline-block ${isUser ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                                    {`${message}`}
                                                </span>
                                        </div>
                                    </div>
                                    <img
                                        src={`${isUser ? 'https://cdn-icons-png.flaticon.com/512/6171/6171927.png' : 'https://cdn-icons-png.flaticon.com/512/3398/3398643.png'}`}
                                        alt={userType} className="w-8 h-8 rounded-full order-1 border-2"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="border-t-2 border-gray-200 p-6 mb-2 sm:mb-0 bg-stone-50 rounded">
                    <div className="flex justify-center pb-4">
                        <button type="button"
                                className="mr-2 inline-flex items-center justify-center rounded-md px-2 py-2 border-2 focus:outline-none bg-white"
                                onClick={onResetConversation}
                        >
                            <svg stroke="currentColor" fill="none" viewBox="0 0 24 24"
                                 strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"
                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="1 4 1 10 7 10"></polyline>
                                <polyline points="23 20 23 14 17 14"></polyline>
                                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                            </svg>
                            <span className="font-light text-sm">Restart</span>
                        </button>

                        <button type="button"
                                className="inline-flex items-center justify-center rounded-md px-2 py-2 border-2 focus:outline-none bg-white"
                                onClick={onGenerate}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"
                                 className="h-4 w-4 mr-2">
                                <path id="Path_50" data-name="Path 50"
                                      d="M-11.5,0h-11A2.5,2.5,0,0,0-25,2.5v8A2.5,2.5,0,0,0-22.5,13h.5v2.5a.5.5,0,0,0,.309.462A.489.489,0,0,0-21.5,16a.5.5,0,0,0,.354-.146L-18.293,13H-11.5A2.5,2.5,0,0,0-9,10.5v-8A2.5,2.5,0,0,0-11.5,0ZM-10,10.5A1.5,1.5,0,0,1-11.5,12h-7a.5.5,0,0,0-.354.146L-21,14.293V12.5a.5.5,0,0,0-.5-.5h-1A1.5,1.5,0,0,1-24,10.5v-8A1.5,1.5,0,0,1-22.5,1h11A1.5,1.5,0,0,1-10,2.5Zm-2.038-3.809a.518.518,0,0,1-.109.163l-2,2A.5.5,0,0,1-14.5,9a.5.5,0,0,1-.354-.146.5.5,0,0,1,0-.708L-13.707,7H-18.5A1.5,1.5,0,0,0-20,8.5a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A2.5,2.5,0,0,1-18.5,6h4.793l-1.147-1.146a.5.5,0,0,1,0-.708.5.5,0,0,1,.708,0l2,2a.518.518,0,0,1,.109.163A.505.505,0,0,1-12.038,6.691Z"
                                      transform="translate(25)"/>
                            </svg>
                            <span className="font-light text-sm">Generate</span>
                        </button>
                    </div>
                    <div className="relative flex">
                        {browserSupportsAudioRecording && (
                            <span className="absolute inset-y-0 flex items-center">
                            <button type="button"
                                    className="mx-2 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-stone-100"
                                    onTouchStart={onVoiceMessage}
                                    onMouseDown={onVoiceMessage}
                                    onTouchEnd={onVoiceMessage}
                                    onMouseUp={onVoiceMessage}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                   stroke="currentColor"
                                   className={`h-5 w-5 text-gray-600 ${recording && 'animate-pulse text-red-500'}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                              </svg>
                            </button>
                        </span>
                        )}


                        <input type="text" placeholder="Send a message."
                               className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-14 bg-white rounded-md py-3 border-2"
                               value={prompt}
                               onChange={onChangePrompt}
                               onKeyDown={onKeyDownPrompt}
                        />

                        <span className="absolute right-0 inset-y-0 flex items-center">
                            <button type="button"
                                    className="mx-2 inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none bg-stone-100"
                                    onClick={onClickPrompt}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                   className="h-5 w-5 text-gray-600 transform rotate-90">
                                        <path
                                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                              </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
