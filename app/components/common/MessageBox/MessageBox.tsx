import React from 'react'

type MessageProps = {
    message: string;
}
const MessageBox = ({ message }: MessageProps) => {
    return (
        <div className='flex flex-1 justify-center'>
           <p className='text-xl'> {message}</p>
        </div>
    )
}

export default MessageBox