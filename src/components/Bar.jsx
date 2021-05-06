import { motion } from 'framer-motion';
import React from 'react';

const Bar = ({data}) => {
    const {name,level,Icon} = data;
    const variants = {
        initial: {
            width: 0
        },
        animate: {
            width: level,
            transition: {
                duration: 0.5,
                type: 'spring',
                dumping: 10,
                stiffness: 100
            }
        }
    }
    return (
        <div className="text-white bg-gray-300 rounded-full overflow-hidden">
            <motion.div 
            variants={variants}
            initial="initial"
            animate="animate"
            className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-grish to-blue-500"
            style={{width: `${level}`}}>
                <Icon className="mr-3" />
                <span className="whitespace-nowrap">{name}</span>
            </motion.div>
            
        </div>
    );
};

export default Bar;