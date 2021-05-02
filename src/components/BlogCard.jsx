import React from 'react';

const BlogCard = ({blog:{title,description,image_path}}) => {
    return (
        <div className="flex bg-gray-200 dark:bg-dark-900 dark:text-white p-2 rounded-md items-center space-x-3 hover:shadow-md cursor-pointer">
            <img className="w-20" src={image_path} alt="thumbnail"/>
            <div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;