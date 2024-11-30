import ProjectCard from "../components/ProjectCard"

const Home = () => {
    
    return(
        <>
            <span>Hi!, I'm Rafi...</span>

            <p>I'm a <code>CS undergrad</code> aspiring to be a <code>backend developer</code> with a mindset of exploring and learning.
                I've worked with web frameworks such as <code>Django, ExpressJS</code> and know my way around databases like 
                <code> MySQL and MongoDB.</code> I did varieties of solo projects using <code>Python, C#, JavaScript, Flutter</code>, etc.
            </p>
            <br></br>

            <h3 className="">Projects</h3>
            <div className="grid gap-5 ">
                <ProjectCard 
                title='BleuFramework'
                thumbnail="/bleu.png"
                technologies="Python"
                description="A Backend Web Framework made from scratch using Python"
                link="https://github.com/al-rafi304/Bleu"
                />
                <ProjectCard 
                title='TailorMaven'
                thumbnail="/tailormaven.png"
                technologies="Express.js"
                description="A suit desinging website that supports 3D visualization and realtime chat system with page admin"
                link="https://github.com/al-rafi304/TailorMaven"
                />
            </div>
        </>
    )
}

export default Home