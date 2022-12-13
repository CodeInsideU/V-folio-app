import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import mongodb from '../assets/mongodb.png'
import reaction from '../assets/reaction.png'
import node from '../assets/node.png'
import docker from '../assets/docker.png'
import python from '../assets/python.png'
import github from '../assets/github.png'

const skills = () => {
    const skills = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-400'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-400'
        },
        {
            id:3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-400'
        },
        {
            id:4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-fuchsia-400'
        },
        {
            id:5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-400'
        },
        {
            id:6,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id:7,
            src: reaction,
            title: 'React',
            style: 'shadow-blue-400'
        },
        {
            id:8,
            src: node,
            title: 'Node',
            style: 'shadow-green-400'
        },
        {
            id:9,
            src: docker,
            title: 'Docker',
            style: 'shadow-blue-400'
        },
        {
            id:10,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-400'
        },
        {
            id:11,
            src: github,
            title: 'Github',
            style: 'shadow-fuchsia-400'
        }
    ]

    return (
        <div name='skills' className='bg-black w-full h-full'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-white p-2 inline bg-gradient-to-r from-amber-900 via-yellow-400 to-amber-200
                bg-clip-text text-transparent'>Skills</p>
                <p className='py-6 text-gray-400'>These are the technologies I've hand's on.....</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-gray-400 font-bold'>
                    {skills.map(({id,src,title,style}) => (
                        <div 
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )

        }

export default skills