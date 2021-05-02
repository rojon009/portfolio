import React from 'react';

const Bar = ({data}) => {
    const {name,level,Icon} = data;
    return (
        <div className="text-white bg-gray-300 rounded-full">
            <div 
            className="flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-grish to-blue-500"
            style={{width: `${level}`}}>
                <Icon className="mr-3" />
                {name}
            </div>
            
        </div>
    );
};

export default Bar;