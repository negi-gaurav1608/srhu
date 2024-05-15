import React from 'react';

function Dashboard() {
    return (
        <div>
            <div className="bg-gray-800 text-white w-auto h-auto flex flex-col md:flex-col md:min-h-0 mt-2">
                <ul className="flex-1">
                    <div className='my-3'>
                    <a href="#dashboard">Dashboard</a>
                    </div>

                    <div className='my-3'>
                    <a href="#report">Reports</a>
                    </div>
                    
                    <div className='my-3'>
                    <a href="#analytics">Analytics</a>
                    </div>
                    
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='grid grid-cols-1 md:grid-cols-2 my-3' id="dashboard mt-20">


                <div className='p-6 flex flex-row-end justify-center h-42 justify-content-center align-items-center'>
                    <img src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg" height="70px" width="70px"
                    alt="user"/>
                </div>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg align-items-center justify-content-center'>
                    <p>
                        username
                    </p>
                    <p>
                        email
                    </p>
                    <p>
                        position
                    </p>
                </div>

                


            </div>

            <div className='p-6 flex flex-row-center justify-center h-auto justify-content-center align-items-center mt-10' id="report">
                    <img src="https://insights.omnia-health.com/sites/cet.com/files/Omdia_imaging_2.png" alt="graph" className='m-10' height="150px" />
                    
                    
            </div>

            <div className='p-6 flex flex-row-center justify-center h-auto justify-content-center align-items-center mt-10' id="analytics">
                    <img src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/03/Screen-Shot-2021-04-06-at-2.48.39-PM.png" alt="graph" className='m-10' height="150px" />
                    
                    
            </div>
        </div>
    )
}

export default Dashboard
