import React from 'react';
import { blogs } from '../data';
import BlogCard from './BlogCard';

const Blogs = () => {
    return (
        <div>
            <h1 className="text-2xl pb-5 dark:text-white">My Blogs</h1>
            <div className="space-y-3">
                {
                    blogs.map((blog,index)=> <BlogCard key={index} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;