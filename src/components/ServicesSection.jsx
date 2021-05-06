import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp, stagger } from '../animation';
import { services } from '../data'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    return (
        <div>
            <motion.p variants={fadeInUp} initial="initial" animate="animate" className="pb-5 dark:text-white">I am a Full Stack Web Developer. I expertise on React and Node. I have done several projects with MERN Stack. I am confident about my work. Feel free to contact me for your personal or organizational projects or jobs.</motion.p>
            <div className="bg-gray-200 dark:bg-dark-900 -mx-4 px-3 pb-24 -mb-5">
                <h4 className="text-2xl font-bold tracking-wide py-3 dark:text-white">Services I provide</h4>
                <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-4">
                    {
                        services.map((service, index) =><motion.div variants={fadeInUp} > <ServiceCard key={index} service={service} /></motion.div>)
                    }
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesSection;