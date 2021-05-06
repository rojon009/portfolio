import { motion } from 'framer-motion';
import React from 'react';
import { stagger } from '../animation';
import { blogs } from '../data';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-2xl pb-5 dark:text-white">My Blogs</h1>
            <motion.div variants={stagger} initial="initial" animate="animate" className="space-y-3">
                {
                    blogs.map((blog,index)=> <BlogCard key={index} blog={blog} />)
                }
            </motion.div>
        </div>
    );
};

export default Blogs;