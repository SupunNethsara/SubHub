function IntroHeader() {
    return (
        <div>
            <header className="absolute top-0 left-0 w-full z-20 py-6">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">

                        <img
                            src="/Logo.png"
                            alt="Logo"
                            className="w-40 h-16 object-cover rounded-lg"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href="" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Features</a>
                        <a href="" className="text-gray-300 hover:text-green-400 transition-colors duration-300">Pricing</a>
                        <a href="" className="text-gray-300 hover:text-green-400 transition-colors duration-300">About</a>
                        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 text-sm">
                            Sign In
                        </button>
                    </div>

                    <button className="md:hidden text-gray-300 hover:text-green-400">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </header>
        </div>
    );
}

export default IntroHeader;
