import React from 'react';
import { services } from '../data'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
    return (
        <div>
            <p className="pb-5 dark:text-white">I am a Full Stack Web Developer. I expertise on React and Node. I have done several project with MERN Stack. I am confident about my work. Feel free to contact me for your personal or organizational projects or jobs.</p>
            <div className="bg-gray-200 dark:bg-dark-900 -mx-4 px-3 pb-24 -mb-5">
                <h4 className="text-2xl font-bold tracking-wide py-3 dark:text-white">Services I provide</h4>
                <div className="grid lg:grid-cols-2 gap-4">
                    {
                        services.map((service, index) => <ServiceCard key={index} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;