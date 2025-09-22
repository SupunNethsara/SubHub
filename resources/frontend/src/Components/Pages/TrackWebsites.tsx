import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddIcon, OptionsIcon, SearchIcon } from "./Svg/Svgicons.tsx";

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
    const navigate = useNavigate();

    const filteredWebsites = websites.filter(website =>
        website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        website.url.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/5 rounded-full filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-3 h-10 bg-green-500 mr-3 rounded-full"></div>
                        <h1 className="text-4xl font-bold">
                            Track Your Websites
                        </h1>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Monitor content changes and get notified when your
                        favorite websites update
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
                        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition duration-300 flex items-center justify-center shadow-lg shadow-green-500/20">
                            {AddIcon}
                            Add Website
                        </button>
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
                                className="bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-700/20 overflow-hidden hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={website.image}
                                        alt={website.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute top-4 left-4 w-3 h-3 bg-green-500/95 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"></div>
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
                                            onClick={() =>
                                                website.path &&
                                                navigate(website.path, {
                                                    state: {
                                                        website_id: website.id
                                                    },
                                                })
                                            }
                                            className="flex-1 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-medium py-2 px-4 rounded-lg transition duration-300 text-sm border border-green-500/20"
                                        >
                                            View WebSite
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center bg-gray-700/50 hover:bg-gray-700 text-gray-300 rounded-lg transition duration-300 border border-gray-600/50">
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
        </div>
    );
}

export default TrackWebsites;
