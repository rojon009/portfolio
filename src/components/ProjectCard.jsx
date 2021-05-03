import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaWindowClose } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
const ProjectCard = ({ project: { name, category, image_path, deployed_url, description, github_url } }) => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className="col-span-12 p-3 sm:col-span-6 lg:col-span-4 bg-gray-300 dark:bg-dark-900 dark:text-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="overflow-hidden rounded-lg">
                    <img onClick={() => setActive(true)} src={image_path} alt={name} className="rounded-lg transform hover:scale-110 transition-all duration-500 cursor-pointer object-cover w-full" />
                </div>
                <div>
                    <h3 className="text-lg font-medium tracking-wide -mb-1 mt-1">{name}</h3>
                    <p className="text-sm">{category}</p>
                </div>
            </div>
            {
                active && (
                <div className="grid grid-cols-12 gap-4 fixed lg:absolute shadow-2xl inset-0 lg:left-0 lg:right-0 lg:-bottom-10 bg-gray-200 dark:bg-dark-900 dark:text-white z-10 rounded-lg overflow-hidden pt-20 lg:pt-10 px-2">
                    <div className="col-span-12 lg:col-span-6 mx-auto space-y-4">
                        <img src={image_path} className="rounded-md" alt={name}/>
                        <div className="flex justify-center space-x-4">
                            <motion.button
                                whileHover={{scale: 1.03}} whileTap={{scale:1}}
                                onClick={() => window.open(deployed_url)}
                                className="flex flex-1 items-center rounded-md hover:shadow-xl bg-gradient-to-r from-grish to-blue-400 px-4 py-2"
                                ><CgWebsite className="mr-1" size={30}/> Live Demo</motion.button>
                            <motion.button
                                whileHover={{scale: 1.03}} whileTap={{scale:1}}
                                onClick={() => window.open(github_url[0])}
                                className="flex flex-1 items-center rounded-md hover:shadow-xl bg-gradient-to-r from-grish to-blue-400 px-4 py-2"
                                ><FiGithub className="mr-1" size={30} /> Github</motion.button>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <h3 className="text-xl font-bold">{name} - <span className="text-sm">{category}</span></h3>
                        <h4 className="text-lg font-semibold">Description</h4>
                        <ul className="list-disc ml-5">
                            {
                                description.map((desc,index)=><li key={index}>{desc}</li>)
                            }
                        </ul>
                    </div>
                    <motion.button whileHover={{scale: 1.2}} whileTap={{scale:1}} onClick={()=>setActive(false)} className="absolute top-5 right-5 text-red-500"><FaWindowClose className="w-8 h-8 fill-current" /></motion.button>
                </div>
                )
            }
        </>
    );
};

export default ProjectCard;