import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddIcon, OptionsIcon, SearchIcon, HomeIcon } from "./Svg/Svgicons.tsx";

function TrackWebsites() {
    const websites = [
        {
            id: 1,
            name: "TechNews.LK",
            url: "https://technews.lk",
            image: "TechNews.jpeg",
            lastUpdated: "5 hours ago",
            status: "active",
            path: "/TechNews",
        },
        {
            id: 2,
            name: "ReadMe Sri Lanka",
            url: "http://readme.lk",
            image: "Readme.png",
            lastUpdated: "1 day ago",
            status: "active",
            path: "/ReadmeLk"
        },
        {
            id: 3,
            name: "Techspot Sri Lanka",
            url: "https://techspot.lk",
            image: "TechSpot.webp",
            lastUpdated: "3 hours ago",
            status: "active",
        },
        {
            id: 4,
            name: "Ada Derana Tech",
            url: "https://adaderana.lk/tech",
            image: "AdaDerana.jpg",
            lastUpdated: "Just now",
            status: "active",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const navigate = useNavigate();

    const filteredWebsites = websites.filter(website =>
        website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        website.url.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddWebsite = () => {
        setToastMessage("🚧 Website adding feature is coming soon! Currently showcasing pre-configured websites for demonstration.");
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    const handleViewWebsite = (website: any) => {
        if (website.path) {
            navigate(website.path, {
                state: { website_id: website.id }
            });
        } else {
            setToastMessage(`🌐 ${website.name} detailed view is under development!`);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    const handleHomeNavigate = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {showToast && (
                    <div className="fixed top-4 right-4 z-50 animate-slide-in">
                        <div className="bg-gray-800/90 backdrop-blur-md border border-gray-600/50 rounded-xl p-4 shadow-2xl shadow-black/50 max-w-sm">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-yellow-400 text-sm">💡</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white text-sm leading-relaxed">{toastMessage}</p>
                                </div>
                                <button
                                    onClick={() => setShowToast(false)}
                                    className="flex-shrink-0 w-5 h-5 bg-gray-700/50 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <span className="text-gray-400 text-xs">×</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mb-8">
                    <button
                        onClick={handleHomeNavigate}
                        className="flex items-center space-x-2 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white py-2 px-4 rounded-xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 group"
                        title="Go back to Home"
                    >
                        {HomeIcon}
                        <span className="text-sm font-medium">Home</span>
                    </button>
                </div>

                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-3 h-10 bg-green-500 mr-3 rounded-full"></div>
                        <h1 className="text-4xl font-bold">
                            Track Your Websites
                        </h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Monitor content changes and get notified when your favorite websites update
                    </p>
                </div>

                <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-700/30 p-6 mb-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="relative flex-grow">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                {SearchIcon}
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-10 pr-3 py-3 bg-gray-900/40 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-500"
                                placeholder="Search for websites or add a new URL..."
                            />
                        </div>

                        <div className="relative group">
                            <button
                                onClick={handleAddWebsite}
                                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:scale-105"
                            >
                                {AddIcon}
                                Add Website
                            </button>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                                <div className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-xs text-gray-300 whitespace-nowrap">
                                    Coming soon - Custom website tracking
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredWebsites.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <div className="text-gray-400 text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">No websites found</h3>
                            <p className="text-gray-500">Try adjusting your search terms</p>
                        </div>
                    ) : (
                        filteredWebsites.map((website) => (
                            <div
                                key={website.id}
                                className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/20 overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={website.image}
                                        alt={website.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-green-500/95 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"></div>
                                        <span className="text-xs bg-black/50 px-2 py-1 rounded-full text-green-400">
                                            Demo Website
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-white mb-1 truncate">
                                        {website.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 truncate">
                                        {website.url}
                                    </p>

                                    <div className="flex items-center justify-between mb-5">
                                        <span className="text-sm text-gray-400">
                                            Updated: {website.lastUpdated}
                                        </span>
                                    </div>

                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => handleViewWebsite(website)}
                                            className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-medium py-2 px-4 rounded-lg transition duration-300 text-sm border border-green-500/20 hover:scale-105"
                                        >
                                            {website.path ? "View Website" : "Preview"}
                                        </button>
                                        <button
                                            onClick={() => {
                                                setToastMessage(`⚙️ Options for ${website.name} coming soon!`);
                                                setShowToast(true);
                                                setTimeout(() => setShowToast(false), 3000);
                                            }}
                                            className="w-10 h-10 flex items-center justify-center bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-lg transition duration-300 border border-gray-600/50 hover:scale-105"
                                        >
                                            {OptionsIcon}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {searchTerm && (
                    <div className="mt-6 text-center">
                        <p className="text-gray-400 text-sm">
                            Found {filteredWebsites.length} website{filteredWebsites.length !== 1 ? 's' : ''} matching "{searchTerm}"
                        </p>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}

export default TrackWebsites;
