import TechItem from "./TechItem"

const TechCard = ({ title, description, icon, techs }) => {
    return (
        <>
            <div className="flex-col border-none bg-slate-800 rounded-lg p-4 w-full md:w-2/5">
                <div className="flex gap-2">
                    {/* <img src={icon}/> */}
                    <div
                        className="w-6 h-6 bg-sky-600"
                        style={{
                            WebkitMaskImage: `url('${icon}')`,
                            WebkitMaskRepeat: "no-repeat",
                            WebkitMaskSize: "contain",
                            maskImage: `url('${icon}')`,
                            maskRepeat: "no-repeat",
                            maskSize: "contain",
                        }}
                    ></div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <p className="mb-2">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {techs.map((tech, idx) => (
                        <TechItem tech={tech.name} icon={tech.icon}/>
                    ))}
                </div>
            </div>


        </>

    );
}

export default TechCard