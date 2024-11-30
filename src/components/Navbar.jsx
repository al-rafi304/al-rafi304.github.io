const Navbar = () => {
    return (
        <nav className="bg-transparent text-white py-4 mb-6">
            <div className="container  flex items-center justify-between">
                {/* Left Side - Name */}
                <h1 className="text-2xl font-bold">🚀 Rafi</h1>

                {/* Right Side - Navigation Links */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#about" className="py-2 px-3 rounded-md hover:bg-slate-800">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="py-2 px-3 rounded-md hover:bg-slate-800">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="py-2 px-3 rounded-md hover:bg-slate-800">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
