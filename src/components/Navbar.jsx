const Navbar = () => {
    return (
        <nav className="bg-transparent text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Side - Name */}
                <h1 className="text-2xl font-bold">Your Name</h1>

                {/* Right Side - Navigation Links */}
                <ul className="flex space-x-8">
                    <li>
                        <a href="#about" className="hover:text-amber-400">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-amber-400">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-amber-400">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
