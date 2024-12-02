const SocialButton = ({ link, children }) => {
    return (
        <a href={link}>
        <button className="bg-slate-800 hover:bg-slate-700 p-2 rounded-xl">
            {children}
        </button>
    </a>

    )
}

export default SocialButton