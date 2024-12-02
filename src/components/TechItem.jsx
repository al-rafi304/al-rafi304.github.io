const TechItem = ({ tech, icon }) => {
    return (
        <div className="flex">
            <span className="flex text-sm gap-1 border-none p-1.5 rounded-lg bg-slate-700 flex-shrink flex-grow-0">
                <img src={icon} />
                {tech}
            </span>
        </div>
    )
}

export default TechItem