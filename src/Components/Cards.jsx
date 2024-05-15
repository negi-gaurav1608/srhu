import React from 'react'

function Cards({
    data,
    user,
    position,
    img
}) {
    return (
        <div className='my-5'>
            <figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 h-auto">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p className="text-lg font-medium text-red-500">
                        {user}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-red-500 dark:text-sky-300">
                        {data}
                    </div>
                    <div className="text-red-500 dark:text-slate-300">
                        {position}
                    </div>
                    </figcaption>
                </div>
                </figure>
        </div>
    )
}

export default Cards