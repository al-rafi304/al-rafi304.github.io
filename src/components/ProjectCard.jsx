const ProjectCard = ({ title, description, technologies, thumbnail, link }) => {
    return (
        <>
        <div className="flex border-none bg-slate-800 rounded-lg p-4 md:h-48">
            {/* Container for Image and Content */}
            <div className="flex-auto md:flex gap-8">
                {/* Image Section */}
                <img src={thumbnail} className="object-cover rounded-xl h-40 w-full md:h-full md:w-1/2" alt="Thumbnail" />
                
                {/* Content Section */}
                <div className="flex flex-col justify-between p-2 md:w-4/5">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <a href={link} className="text-blue-500 hover:underline">GitHub</a>
                    
                    {/* Technologies Container */}
                    <div className="flex gap-2 mt-2 flex-wrap">
                        {technologies.map((tech, index) => (
                            <p className="border-none p-1.5 rounded-lg bg-slate-700 flex-shrink flex-grow-0 text-sm">{tech}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>


        </>

    );
};

export default ProjectCard;
