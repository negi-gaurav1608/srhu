import React from 'react';
import { Link } from 'react-router-dom';


const Sidebars = () => {
    return (
        <div className="bg-gray-800 text-white w-auto h-auto flex flex-col md:flex-col md:min-h-0 mt-2">
            
            <ul className="flex-1">
                <div className='my-3'>
                <Link to='dashboard' className='p-4 hover:bg-gray-700 cursor-pointer'>
                    Dashboard
                </Link>
                </div>

                <div className='my-3'>
                <Link to='dashboard' className='p-4 hover:bg-gray-700 cursor-pointer'>
                    Reports
                </Link>
                </div>
                
                <div className='my-3'>
                <Link to='dashboard' className='p-4 hover:bg-gray-700 cursor-pointer'>
                    Analytics
                </Link>
                </div>
                
            </ul>
        </div>
        
    );
};

export default Sidebars;
