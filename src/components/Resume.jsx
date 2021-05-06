import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../animation';
import { skills, tools } from '../data';
import Bar from './Bar';

const Resume = () => {
    
    return (
        <div className="space-y-5">
        <div className="grid lg:grid-cols-2 gap-5 dark:text-white">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
             className="space-y-1">
                <h2 className="text-2xl font-medium">Course</h2>
                <h3 className="text-lg font-semibold">Complete Web Development with J. Mahbub</h3>
                <h4 className="font-semibold">Programming Hero</h4>
                <p className="text-gray-500">This is a professional course where anyone can build proper skill of web development and good mindset of how to work.</p>
            </motion.div>
            <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate" className="space-y-1">
                <h2 className="text-2xl font-medium">Education</h2>
                <h3 className="text-lg font-semibold">Mechanical Engineering (Undergraduate)</h3>
                <h4 className="font-semibold">Shahjalal University of Science & Technology, Sylhet</h4>
                <p className="text-gray-500">I am doing my B.Sc. besides I have gain communication and management skill through organization.</p>
            </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 dark:text-white">
            <div className="space-y-1">
                <h1 className="text-3xl">Skills</h1>
                {
                    skills.map((skill,index)=><Bar key={index} data={skill} />)
                }
            </div>
            <div className="space-y-1">
                <h1 className="text-3xl">Tools</h1>
                {
                    tools.map((tool,index)=><Bar key={index} data={tool} />)
                }
            </div>
        </div>
        </div>
    );
};

export default Resume;