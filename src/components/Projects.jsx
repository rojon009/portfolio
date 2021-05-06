import { motion } from 'framer-motion';
import React from 'react';
import { stagger } from '../animation';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className="lg:relative">
            <h3 className="text-2xl pb-4 dark:text-white">Projects I have done</h3>
            <motion.div variants={stagger} initial="initial" animate="animate" className="grid grid-cols-12 gap-4">
            {
                projects.map((project,index)=><ProjectCard key={index} project={project} />)
            }
            </motion.div>
        </div>
    );
};

export default Projects;