import React from 'react'
import profile from '../images/rojon.jpg';
import {SiFacebook, SiGithub, SiLinkedin} from 'react-icons/si';
import {IoLocationOutline} from 'react-icons/io5'
import { HiOutlineDownload } from 'react-icons/hi';
import resume from '../images/rojon_resume.pdf';

const SideBar = ({handleDark, dark}) => {
    return (
        <div className="text-center p-5">
            <img className="w-32 h-32 rounded-full object-cover mx-auto ring-1 ring-black ring-offset-2 dark:ring-white dark:ring-offset-transparent" src={profile} alt="profile"/>
            <h3 className="my-4 text-3xl font-medium tracking-wider dark:text-white"><span>Rojon</span> Ali</h3>
            <p className="bg-gray-200 rounded-full py-1 my-3">Web Developer</p>
            <a href={resume} target="blank" download className="bg-gray-200 rounded-full py-1 my-3 flex justify-center items-center space-x-1 cursor-pointer"><HiOutlineDownload className="w-5 h-5 animate-bounce" /><span>Download Resume</span></a>
            {/* social icons */}
            <div className="flex justify-around pt-2">
                <a className="text-green-500 dark:text-grish hover:animate-pulse" href="https://www.facebook.com/rojon009" target="blank">
                    <SiFacebook className="w-8 h-8" />
                </a>
                <a className="text-green-500 dark:text-grish hover:animate-pulse" href="https://www.linkedin.com/in/rojon009" target="blank">
                    <SiLinkedin className="w-8 h-8" />
                </a>
                <a className="text-green-500  dark:text-grish hover:animate-pulse" href="https://www.github.com/rojon038" target="blank">
                    <SiGithub className="w-8 h-8" />
                </a>
            </div>
            {/* address */}
            <div className="my-5 bg-gray-200 dark:bg-dark-400 dark:text-white py-3 -mx-5 space-y-1">
                <div className="flex justify-center items-center space-x-1">
                    <IoLocationOutline className="w-5 h-5" />
                    <span>Sylhet, Bangladesh</span>
                </div>
                <p>rojon009@gmail.com</p>
                <p>+8801797764296</p>
            </div>
            <div className="space-y-2">
                <button
                 className="bg-gradient-to-r hover:shadow-lg from-green-400 to-blue-400 w-8/12 rounded-full py-2 text-white"
                 onClick={()=> window.open('mailto:rojon009@gmail.com')}>Email Me</button>
                <button 
                onClick={handleDark}
                className="bg-gradient-to-r hover:shadow-lg from-green-400 to-blue-400 w-8/12 rounded-full py-2 text-white">{dark === 'enable' ? 'Light' : 'Dark'} Theme</button>
            </div>
        </div>
    )
}

export default SideBar
