const ProjectCard = ({ title, description, technologies, thumbnail, link }) => {
    return (
        <>
         {/* <div className="inline-grid grid-cols-2 border rounded-lg p-1">
             <div>
                 <img src={thumbnail} className="w-48 h-auto"/>
             </div>
             <div>
                 <h2 className="text-xl font-bold">{title}</h2>
                 <p>{description}</p>
                 <span>{technologies}</span><br/>
                 <a href={link}>GitHub</a>
             </div>
         </div> */}

        {/* <div className=" p-1 mb-4 flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full dark:border-gray-700">
            <img className="object-fill w-full rounded-lg h-44 md:h-46 md:w-48 md:rounded-lg"
                src={thumbnail}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href={link} className="text-blue-400">GitHub</a>
                <div className="container flex gap-2">
                    <p className="border-none p-2 rounded-lg bg-slate-900">{technologies}</p>
                    <p className="border-none p-2 rounded-lg bg-slate-900">{technologies}</p>
                </div>
            </div>
        </div> */}
        <div className="flex border bg-slate-900 rounded-lg p-2 h-48">
            {/* Container for Image and Content */}
            <div className="flex flex-1 gap-3">
                {/* Image Section */}
                <img 
                    src={thumbnail} 
                    className="object-cover rounded-md h-full w-1/2" 
                    alt="Thumbnail" 
                />
                
                {/* Content Section */}
                <div className="flex flex-col justify-between p-2 w-1/2">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <a href={link} className="text-blue-500 hover:underline">GitHub</a>
                    
                    {/* Technologies Container */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                        <p className="border-none p-2 rounded-lg bg-slate-700">{technologies}</p>
                    </div>
                </div>
            </div>
        </div>


        </>

    );
};

export default ProjectCard;
