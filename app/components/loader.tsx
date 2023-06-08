export  const Loader = () => {
    return (
        <div className="flex items-center justify-center fixed z-10 bg-white bg-opacity-90 top-0 overflow-hidden w-full h-full max-h-screen">
            <div className="flex flex-col justify-center items-center space-x-1 text-sm text-gray-700">
                <svg fill='none' className="w-20 h-20 animate-spin text-blue-700" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd'
                          d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'
                          fill='currentColor' fillRule='evenodd' />
                </svg>
                <p className="mb-2 animate-pulse">Loading ...</p>
                <p className="animate-pulse">This may take a few seconds. Please don't close this page.</p>
            </div>
        </div>
    )
}