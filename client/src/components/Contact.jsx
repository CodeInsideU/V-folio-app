import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white bg-gradient-to-r from-amber-900 via-yellow-400 to-amber-100
                bg-clip-text text-transparent '>Contact</p>
                <p className='py-6 text-gray-400'>Let's get connect!</p>
            </div>

            <div className='flex justify-center items-center rounded-lg w-3/4 py-8'>
                <form action='https://getform.io/f/f09f226b-97ce-4adb-b3b9-c5f40d75860c' method = 'POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <input type="email" name='name' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2
                    rounded-md text-white focus:outline-none'/>
                    <textarea type="message" row='10' placeholder='Enter your message' className='p-2 bg-transparent border-2
                    rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-900 px-6
                    py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact