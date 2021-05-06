import { motion } from 'framer-motion';
import React from 'react';
import { fadeInUp } from '../animation';

const BlogCard = ({blog:{title,description,image_path}}) => {
    return (
        <motion.div variants={fadeInUp} className="flex bg-gray-200 dark:bg-dark-900 dark:text-white p-2 rounded-md items-center space-x-3 hover:shadow-md cursor-pointer">
            <img className="w-20" src={image_path} alt="thumbnail"/>
            <div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </motion.div>
    );
};

export default BlogCard;