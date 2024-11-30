import ProjectCard from "../components/ProjectCard"

const Home = () => {
    const projects = [
        {
            title:'Bleu Framework',
            thumbnail:"/bleu.png",
            technologies: ['Python'],
            description:"A Backend Web Framework made from scratch using Python",
            link:"https://github.com/al-rafi304/Bleu"
        },
        {
            title:'Tailor Maven',
            thumbnail:"/tailormaven.png",
            technologies: ['Express.js', 'MongoDB', 'React.js', 'R3D', 'Socket.io'],
            description:"A suit desinging website that supports 3D visualization and realtime chat system with page admin",
            link:"https://github.com/al-rafi304/TailorMaven"
        },
        {
            title:'Social Media Website',
            thumbnail:"/socialmedia2.png",
            technologies: ['Django', 'SQLite', 'JavaScript'],
            description:"A social media platform enabling content sharing and user interactions through comments, likes, and shares",
            link:"https://github.com/al-rafi304/django-social-media"
        },
        {
            title:'E-Commerce Website',
            thumbnail:"/ecommerce.png",
            technologies: ['Django', 'SQLite'],
            description:"An online marketplace built with Django, offering a seamless platform for users to buy and sell products.",
            link:"https://github.com/al-rafi304/django-social-media"
        },
    ]
    return(
        <>
            <h2 className="text-4xl my-3">Hi! I'm Rafi 👋</h2>

            <p>I'm a <code>CS undergrad</code> aspiring to be a <code>backend developer</code> with a mindset of exploring and learning.
                I've worked with web frameworks such as <code>Django, ExpressJS</code> and know my way around databases like 
                <code> MySQL and MongoDB.</code> I did varieties of solo projects using <code>Python, C#, JavaScript, Flutter</code>, etc.
            </p>
            <br></br>

            {/* Socials */}

            <h3 className="text-3xl mb-4">Projects</h3>
            <div className="grid gap-5 ">
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    title={project.title}
                    thumbnail={project.thumbnail}
                    technologies={project.technologies}
                    description={project.description}
                    link={project.link}
                    />
                ))}
            </div>
        </>
    )
}

export default Home