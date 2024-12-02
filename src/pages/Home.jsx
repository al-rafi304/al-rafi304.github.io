import ProjectCard from "../components/ProjectCard"
import SocialButton from "../components/SocialButton"
import TechCard from "../components/TechCard"
import TechItem from "../components/TechItem"

const Home = () => {
    const projects = [
        {
            title: 'Bleu Framework',
            thumbnail: "/bleu.png",
            technologies: ['Python'],
            description: "A Backend Web Framework made from scratch using Python",
            link: "https://github.com/al-rafi304/Bleu"
        },
        {
            title: 'Tailor Maven',
            thumbnail: "/tailormaven.png",
            technologies: ['Express.js', 'MongoDB', 'React.js', 'R3D', 'Socket.io'],
            description: "A suit desinging website that supports 3D visualization and realtime chat system with page admin",
            link: "https://github.com/al-rafi304/TailorMaven"
        },
        {
            title: 'Social Media Website',
            thumbnail: "/socialmedia2.png",
            technologies: ['Django', 'SQLite', 'JavaScript'],
            description: "A social media platform enabling content sharing and user interactions through comments, likes, and shares",
            link: "https://github.com/al-rafi304/django-social-media"
        },
        {
            title: 'E-Commerce Website',
            thumbnail: "/ecommerce.png",
            technologies: ['Django', 'SQLite'],
            description: "An online marketplace built with Django, offering a seamless platform for users to buy and sell products.",
            link: "https://github.com/al-rafi304/django-social-media"
        },
    ]

    const skills = [
        {
            'title': 'Languages',
            'description': 'Programming languages I am confident in and have worked with',
            'icon': '/icons/language.svg',
            'tech': [
                {
                    'name': 'Python',
                    'icon': 'icons/python.svg'
                },
                {
                    'name': 'Javascript',
                    'icon': 'icons/javascript.svg'
                },
                {
                    'name': 'C',
                    'icon': 'icons/c.svg'
                },
                {
                    'name': 'C#',
                    'icon': 'icons/csharp.svg'
                },
                {
                    'name': 'SQL',
                    'icon': 'icons/sql.svg'
                },
                {
                    'name': 'Bash',
                    'icon': 'icons/bash.svg'
                }
            ]
        },
        {
            'title': 'Frameworks',
            'description': 'Backend and Frontend frameworks I have experience in',
            'icon': '/icons/server.svg',
            'tech': [
                {
                    'name': 'Node.js',
                    'icon': 'icons/nodejs.svg'
                },
                {
                    'name': 'Express.js',
                    'icon': 'icons/expressjs.svg'
                },
                {
                    'name': 'React.js',
                    'icon': 'icons/reactjs.svg'
                },
                {
                    'name': 'Django',
                    'icon': 'icons/django.svg'
                },
                {
                    'name': 'Flask',
                    'icon': 'icons/flask.svg'
                },
            ]
        },
        {
            'title': 'Database',
            'description': 'Relational and Non-relational databases I\'v worked with',
            'icon': '/icons/database.svg',
            'tech': [
                {
                    'name': 'MySQL',
                    'icon': '/icons/mysql.svg'
                },
                {
                    'name': 'SQLite',
                    'icon': '/icons/sqlite.svg'
                },
                {
                    'name': 'MongoDB',
                    'icon': '/icons/mongo.svg'
                },
                {
                    'name': 'Firebase',
                    'icon': '/icons/firebase.svg'
                },
            ]
        },
        {
            'title': 'Tools & Tech',
            'description': 'Technologies I frequently use and have proficiency in',
            'icon': '/icons/tools2.svg',
            'tech': [
                {
                    'name': 'Git',
                    'icon': '/icons/git.svg'
                },
                {
                    'name': 'GitHub',
                    'icon': '/icons/github.svg'
                },
                {
                    'name': 'Docker',
                    'icon': '/icons/docker.svg'
                },
                {
                    'name': 'Postman',
                    'icon': '/icons/postman.svg'
                },
                {
                    'name': 'Linux',
                    'icon': ''
                },
            ]
        }
    ]

    return (
        <>
            {/* Introduction */}
            <h2 className="text-4xl my-2 font-bold">Mohammad Al Rafi</h2>
            <h4 className="text-gray-400 text-base mb-4">Backend Developer • Python • Node.js • MongoDB • MySQL</h4>

            <p className="mb-4">I'm an aspiring backend developer with a mindset of exploring and learning.
                I've worked with web frameworks such as Django, ExpressJS and know my way around databases like
                MySQL and MongoDB. I did varieties of solo projects using Python, C#, JavaScript, Flutter, etc.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mb-12 flex-wrap">
                <SocialButton link="https://www.github.com/al-rafi304">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path></svg>
                </SocialButton>
                <SocialButton link="https://www.linkedin.com/in/mohammad-al-rafi">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z" fill-rule="evenodd"></path></svg>
                </SocialButton>
                <SocialButton link="https://www.facebook.com/mohammad.alrafi">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path></svg>
                </SocialButton>
            </div>

            {/* Projects */}
            <h3 className="text-3xl font-bold mb-4">Projects</h3>
            <div className="grid gap-5 mb-8">
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
                <button href="#" className="text-lg ms-4 text-left">View All Projects -&gt;</button>
            </div>

            {/* Skills */}
            <h3 className="text-3xl font-bold mb-4">Skills & Technologies</h3>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-start ">
                {skills.map((skill, inx) => (
                    <TechCard title={skill.title} description={skill.description} icon={skill.icon} techs={skill.tech}/>
                ))}
            </div>
        </>
    )
}

export default Home