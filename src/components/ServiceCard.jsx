import React from 'react';

const ServiceCard = ({service}) => {
    const {Icon, title, description} = service;
    function createMarkup() {
        return {__html: description};
      }
    return (
        <div className="bg-white dark:bg-dark-500 flex items-center p-2 space-x-4 rounded-lg">
            <Icon className="w-20 h-20 text-grish" />
            <div>
                <h2 className="font-bold text-lg underline dark:text-white">{title}</h2>
                <p className="tracking-wide text-sm text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
    );
};

export default ServiceCard;